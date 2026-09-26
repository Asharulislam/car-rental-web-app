import { Routes, Route } from "react-router-dom";
import Layout from "./app/component/Layout";
import Home from "./app/pages/Home";
import AppRoutes from "./app/constants/AppRoutes";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={AppRoutes.home} element={<Home />} />
      </Route>
    </Routes>
  );
}
