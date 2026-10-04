import { Routes, Route } from "react-router-dom";
import Layout from "./app/component/Layout";
import AdminLayout from "./app/component/admin/AdminLayout";
import RequireAuth from "./app/component/admin/RequireAuth";
import Home from "./app/pages/Home";
import Vehicles from "./app/pages/Vehicles";
import CarDetails from "./app/pages/CarDetails";
import About from "./app/pages/About";
import Contact from "./app/pages/Contact";
import AdminLogin from "./app/pages/admin/AdminLogin";
import AdminCars from "./app/pages/admin/AdminCars";
import AdminCarForm from "./app/pages/admin/AdminCarForm";
import AdminBookings from "./app/pages/admin/AdminBookings";
import AdminBookingDetails from "./app/pages/admin/AdminBookingDetails";
import AdminPayments from "./app/pages/admin/AdminPayments";
import AdminPaymentDetails from "./app/pages/admin/AdminPaymentDetails";
import AppRoutes from "./app/constants/AppRoutes";

export default function App() {
  return (
    <Routes>
      {/* Public site: Navbar + page + Footer */}
      <Route element={<Layout />}>
        <Route path={AppRoutes.home} element={<Home />} />
        <Route path={AppRoutes.vehicles} element={<Vehicles />} />
        <Route path={AppRoutes.carDetails} element={<CarDetails />} />
        <Route path={AppRoutes.about} element={<About />} />
        <Route path={AppRoutes.contact} element={<Contact />} />
      </Route>

      {/* Admin: login screen on its own, everything else needs a login */}
      <Route path={AppRoutes.adminLogin} element={<AdminLogin />} />
      <Route
        element={
          <RequireAuth>
            <AdminLayout />
          </RequireAuth>
        }
      >
        <Route path={AppRoutes.admin} element={<AdminCars />} />
        <Route path={AppRoutes.adminNewCar} element={<AdminCarForm />} />
        <Route path={AppRoutes.adminEditCar} element={<AdminCarForm />} />
        <Route path={AppRoutes.adminBookings} element={<AdminBookings />} />
        <Route path={AppRoutes.adminBookingDetails} element={<AdminBookingDetails />} />
        <Route path={AppRoutes.adminPayments} element={<AdminPayments />} />
        <Route path={AppRoutes.adminPaymentDetails} element={<AdminPaymentDetails />} />
      </Route>
    </Routes>
  );
}
