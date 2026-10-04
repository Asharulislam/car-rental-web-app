import { generatePath, Link, useParams } from "react-router-dom";
import Heading from "../../component/Heading";
import Text from "../../component/Text";
import { AdminCard, DetailRow } from "../../component/admin/AdminCard";
import { CarSummaryCard, CustomerCard } from "../../component/admin/CustomerAndCarCards";
import StatusBadge from "../../component/admin/StatusBadge";
import AppRoutes from "../../constants/AppRoutes";
import AppStrings from "../../constants/AppStrings";
import { useLoad } from "../../hooks/useLoad";
import { getPayment } from "../../services/bookingsService";
import { formatDateTime, formatMoney } from "../../utils/format";

const strings = AppStrings.admin.payments;
const common = AppStrings.admin.common;

export default function AdminPaymentDetails() {
  const { id = "" } = useParams();
  const { data: payment, isLoading, failed } = useLoad(() => getPayment(id), `payment-${id}`);

  return (
    <>
      <Link to={AppRoutes.adminPayments} className="text-sm text-text-dark/60 hover:text-primary">
        ← {common.back}
      </Link>

      {isLoading && <Text variant="muted" className="mt-6">{common.loading}</Text>}
      {failed && <Text className="mt-6 text-danger">{common.notFound}</Text>}

      {payment && (
        <>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <Heading level={3}>{strings.detailsTitle} #{payment.id}</Heading>
            <StatusBadge status={payment.status} />
          </div>

          {/* 1 column on phone, 2 on tablet, 3 on desktop */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-start">
            <AdminCard title={strings.details}>
              <DetailRow label={strings.amount}>
                <span className="text-primary">{formatMoney(payment.amount, payment.currency)}</span>
              </DetailRow>
              <DetailRow label={strings.method}>{payment.method}</DetailRow>
              <DetailRow label={strings.provider}>{payment.provider}</DetailRow>
              <DetailRow label={strings.transactionId}>
                <span className="font-mono text-xs">{payment.transactionId}</span>
              </DetailRow>
              <DetailRow label={strings.paidAt}>{payment.paidAt ? formatDateTime(payment.paidAt) : "—"}</DetailRow>
              <DetailRow label={strings.createdAt}>{formatDateTime(payment.createdAt)}</DetailRow>
              <DetailRow label={strings.booking}>
                <Link
                  to={generatePath(AppRoutes.adminBookingDetails, { id: String(payment.bookingId) })}
                  className="text-primary hover:underline"
                >
                  {strings.viewBooking} #{payment.bookingId}
                </Link>
              </DetailRow>
            </AdminCard>

            <CustomerCard customer={payment.customer} />
            <CarSummaryCard car={payment.car} />
          </div>
        </>
      )}
    </>
  );
}
