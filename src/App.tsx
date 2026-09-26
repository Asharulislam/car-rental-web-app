import { Routes, Route } from "react-router-dom";
import Layout from "./app/component/Layout";
import Home from "./app/pages/Home";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}
