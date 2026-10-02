import { Routes, Route } from "react-router-dom";
import Layout from "./app/component/Layout";
import Home from "./app/pages/Home";
import Vehicles from "./app/pages/Vehicles";
import CarDetails from "./app/pages/CarDetails";
import About from "./app/pages/About";
import Contact from "./app/pages/Contact";
import AppRoutes from "./app/constants/AppRoutes";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={AppRoutes.home} element={<Home />} />
        <Route path={AppRoutes.vehicles} element={<Vehicles />} />
        <Route path={AppRoutes.carDetails} element={<CarDetails />} />
        <Route path={AppRoutes.about} element={<About />} />
        <Route path={AppRoutes.contact} element={<Contact />} />
      </Route>
    </Routes>
  );
}
