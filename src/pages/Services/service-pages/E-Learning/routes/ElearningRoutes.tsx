import { Routes, Route } from "react-router-dom";
import ElearningPage from "../ElearningPage";
import TechnologyPage from "../pages/TechnologyPage";

export default function ElearningRoutes() {
  return (
    <Routes>
      <Route index element={<ElearningPage />} />
      <Route path=":techSlug" element={<TechnologyPage />} />
    </Routes>
  );
}
