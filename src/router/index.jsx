import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Housing from "../pages/Housing";
import Error from "../pages/Error";

function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/housing/:id" element={<Housing />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
