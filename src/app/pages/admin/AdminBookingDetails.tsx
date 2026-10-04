import { generatePath, Link, useParams } from "react-router-dom";
import Heading from "../../component/Heading";
import Text from "../../component/Text";
import { AdminCard, DetailRow } from "../../component/admin/AdminCard";
import { CarSummaryCard, CustomerCard } from "../../component/admin/CustomerAndCarCards";
import StatusBadge from "../../component/admin/StatusBadge";
import AppRoutes from "../../constants/AppRoutes";
import AppStrings from "../../constants/AppStrings";
import { useLoad } from "../../hooks/useLoad";
import { getBooking } from "../../services/bookingsService";
import { formatDate, formatDateTime, formatMoney } from "../../utils/format";

const strings = AppStrings.admin.bookings;
const common = AppStrings.admin.common;

export default function AdminBookingDetails() {
  const { id = "" } = useParams();
  const { data: booking, isLoading, failed } = useLoad(() => getBooking(id), `booking-${id}`);

  return (
    <>
      <Link to={AppRoutes.adminBookings} className="text-sm text-text-dark/60 hover:text-primary">
        ← {common.back}
      </Link>

      {isLoading && <Text variant="muted" className="mt-6">{common.loading}</Text>}
      {failed && <Text className="mt-6 text-danger">{common.notFound}</Text>}

      {booking && (
        <>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <Heading level={3}>{strings.detailsTitle} #{booking.id}</Heading>
            <StatusBadge status={booking.status} />
          </div>

          {/* 1 column on phone, 2 on tablet, 3 on desktop */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-start">
            <AdminCard title={strings.trip}>
              <DetailRow label={strings.placeOfRental}>{booking.placeOfRental}</DetailRow>
              <DetailRow label={strings.placeOfReturn}>{booking.placeOfReturn}</DetailRow>
              <DetailRow label={strings.rentalDate}>{formatDate(booking.rentalDate)}</DetailRow>
              <DetailRow label={strings.returnDate}>{formatDate(booking.returnDate)}</DetailRow>
              <DetailRow label={strings.days}>{booking.days}</DetailRow>
              <DetailRow label={strings.total}>
                <span className="text-primary">{formatMoney(booking.totalPrice)}</span>
              </DetailRow>
              <DetailRow label={strings.bookedOn}>{formatDateTime(booking.createdAt)}</DetailRow>
              <DetailRow label={strings.payment}>
                {booking.paymentId ? (
                  <Link
                    to={generatePath(AppRoutes.adminPaymentDetails, { id: String(booking.paymentId) })}
                    className="text-primary hover:underline"
                  >
                    {strings.viewPayment} #{booking.paymentId}
                  </Link>
                ) : (
                  <span className="text-danger">{strings.notPaid}</span>
                )}
              </DetailRow>
            </AdminCard>

            <CustomerCard customer={booking.customer} />
            <CarSummaryCard car={booking.car} />
          </div>
        </>
      )}
    </>
  );
}
