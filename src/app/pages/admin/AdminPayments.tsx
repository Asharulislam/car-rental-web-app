import { useState } from "react";
import { generatePath, Link } from "react-router-dom";
import FilterPill from "../../component/FilterPill";
import Heading from "../../component/Heading";
import Text from "../../component/Text";
import SearchInput from "../../component/admin/SearchInput";
import StatusBadge from "../../component/admin/StatusBadge";
import AppRoutes from "../../constants/AppRoutes";
import AppStrings from "../../constants/AppStrings";
import type { PaymentStatus } from "../../features/bookings/types";
import { useLoad } from "../../hooks/useLoad";
import { getPayments } from "../../services/bookingsService";
import { formatDate, formatMoney } from "../../utils/format";
import { matchesSearch } from "../../utils/search";

const strings = AppStrings.admin.payments;
const common = AppStrings.admin.common;
const statuses: PaymentStatus[] = ["paid", "pending", "failed", "refunded"];

export default function AdminPayments() {
  const { data: payments, isLoading, failed } = useLoad(getPayments, "payments");
  const [status, setStatus] = useState<PaymentStatus | "">(""); // "" = all
  const [search, setSearch] = useState("");

  // Search and status filter work together
  const visible = (payments ?? []).filter(
    (p) =>
      (!status || p.status === status) &&
      matchesSearch(search, p.id, p.bookingId, p.customer.name, p.customer.email, p.car.brand, p.car.type, p.transactionId),
  );
  // Money actually received: only payments with status "paid"
  const totalPaid = (payments ?? []).filter((p) => p.status === "paid").reduce((sum, p) => sum + p.amount, 0);

  return (
    <>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <Heading level={3}>{strings.title}</Heading>
        {payments && (
          <div className="bg-white rounded-2xl px-5 py-3 text-right">
            <Text variant="small" className="text-text-dark/60">{strings.totalPaid}</Text>
            <Text variant="large" className="text-primary">{formatMoney(totalPaid)}</Text>
          </div>
        )}
      </div>

      {/* Search + status filter */}
      <div className="mt-6 flex flex-col gap-4">
        <SearchInput value={search} onChange={setSearch} placeholder={strings.search} />
        <div className="flex flex-wrap gap-2">
          <FilterPill size="sm" label={common.all} isActive={status === ""} onClick={() => setStatus("")} />
          {statuses.map((s) => (
            <FilterPill key={s} size="sm" label={AppStrings.admin.status[s]} isActive={status === s} onClick={() => setStatus(s)} />
          ))}
        </div>
      </div>

      <div className="mt-6 bg-white rounded-[20px] overflow-hidden">
        {isLoading && <Text variant="muted" className="p-8 text-center">{common.loading}</Text>}
        {failed && <Text className="p-8 text-center text-danger">{common.loadFailed}</Text>}
        {payments && visible.length === 0 && (
          <Text variant="muted" className="p-8 text-center">{payments.length ? common.noResults : strings.empty}</Text>
        )}

        {visible.length > 0 && (
          <div className="overflow-x-auto">
            <table className="w-full min-w-200 text-left">
              <thead className="bg-input text-sm text-text-dark/60">
                <tr>
                  <th className="px-6 py-4 font-semibold">{strings.columns.id}</th>
                  <th className="px-6 py-4 font-semibold">{strings.columns.customer}</th>
                  <th className="px-6 py-4 font-semibold">{strings.columns.car}</th>
                  <th className="px-6 py-4 font-semibold">{strings.columns.amount}</th>
                  <th className="px-6 py-4 font-semibold">{strings.columns.method}</th>
                  <th className="px-6 py-4 font-semibold">{strings.columns.date}</th>
                  <th className="px-6 py-4 font-semibold">{strings.columns.status}</th>
                  <th className="px-6 py-4" />
                </tr>
              </thead>
              <tbody>
                {visible.map((payment) => (
                  <tr key={payment.id} className="border-t border-text-dark/10">
                    <td className="px-6 py-4 font-semibold">#{payment.id}</td>
                    <td className="px-6 py-4">
                      <p className="font-semibold">{payment.customer.name}</p>
                      <p className="text-sm text-text-dark/60">{payment.customer.email}</p>
                    </td>
                    <td className="px-6 py-4">{payment.car.brand} <span className="text-text-dark/60">{payment.car.type}</span></td>
                    <td className="px-6 py-4 font-semibold text-primary">{formatMoney(payment.amount, payment.currency)}</td>
                    <td className="px-6 py-4">{payment.method}</td>
                    <td className="px-6 py-4 text-sm">{formatDate(payment.paidAt ?? payment.createdAt)}</td>
                    <td className="px-6 py-4"><StatusBadge status={payment.status} /></td>
                    <td className="px-6 py-4 text-right">
                      <Link
                        to={generatePath(AppRoutes.adminPaymentDetails, { id: String(payment.id) })}
                        className="text-sm font-semibold text-primary hover:underline"
                      >
                        {common.view}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}
