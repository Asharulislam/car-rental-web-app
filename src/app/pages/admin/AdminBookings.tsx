import { useState } from "react";
import { generatePath, Link } from "react-router-dom";
import FilterPill from "../../component/FilterPill";
import Heading from "../../component/Heading";
import Text from "../../component/Text";
import SearchInput from "../../component/admin/SearchInput";
import StatusBadge from "../../component/admin/StatusBadge";
import AppRoutes from "../../constants/AppRoutes";
import AppStrings from "../../constants/AppStrings";
import type { BookingStatus } from "../../features/bookings/types";
import { useLoad } from "../../hooks/useLoad";
import { getBookings } from "../../services/bookingsService";
import { formatDate, formatMoney } from "../../utils/format";
import { matchesSearch } from "../../utils/search";

const strings = AppStrings.admin.bookings;
const common = AppStrings.admin.common;
const statuses: BookingStatus[] = ["pending", "confirmed", "completed", "cancelled"];

export default function AdminBookings() {
  const { data: bookings, isLoading, failed } = useLoad(getBookings, "bookings");
  const [status, setStatus] = useState<BookingStatus | "">(""); // "" = all
  const [search, setSearch] = useState("");

  // Search and status filter work together
  const visible = (bookings ?? []).filter(
    (b) =>
      (!status || b.status === status) &&
      matchesSearch(search, b.id, b.customer.name, b.customer.email, b.car.brand, b.car.type, b.placeOfRental, b.placeOfReturn),
  );

  return (
    <>
      <Heading level={3}>{strings.title}</Heading>

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
        {bookings && visible.length === 0 && (
          <Text variant="muted" className="p-8 text-center">{bookings.length ? common.noResults : strings.empty}</Text>
        )}

        {visible.length > 0 && (
          <div className="overflow-x-auto">
            <table className="w-full min-w-200 text-left">
              <thead className="bg-input text-sm text-text-dark/60">
                <tr>
                  <th className="px-6 py-4 font-semibold">{strings.columns.id}</th>
                  <th className="px-6 py-4 font-semibold">{strings.columns.customer}</th>
                  <th className="px-6 py-4 font-semibold">{strings.columns.car}</th>
                  <th className="px-6 py-4 font-semibold">{strings.columns.dates}</th>
                  <th className="px-6 py-4 font-semibold">{strings.columns.total}</th>
                  <th className="px-6 py-4 font-semibold">{strings.columns.status}</th>
                  <th className="px-6 py-4" />
                </tr>
              </thead>
              <tbody>
                {visible.map((booking) => (
                  <tr key={booking.id} className="border-t border-text-dark/10">
                    <td className="px-6 py-4 font-semibold">#{booking.id}</td>
                    <td className="px-6 py-4">
                      <p className="font-semibold">{booking.customer.name}</p>
                      <p className="text-sm text-text-dark/60">{booking.customer.email}</p>
                    </td>
                    <td className="px-6 py-4">{booking.car.brand} <span className="text-text-dark/60">{booking.car.type}</span></td>
                    <td className="px-6 py-4 text-sm">{formatDate(booking.rentalDate)} → {formatDate(booking.returnDate)}</td>
                    <td className="px-6 py-4 font-semibold text-primary">{formatMoney(booking.totalPrice)}</td>
                    <td className="px-6 py-4"><StatusBadge status={booking.status} /></td>
                    <td className="px-6 py-4 text-right">
                      <Link
                        to={generatePath(AppRoutes.adminBookingDetails, { id: String(booking.id) })}
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
