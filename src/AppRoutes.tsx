import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/Landingpage";

import { ToastProvider } from "react-toast-notifications";

export default function AppRoutes() {
  return (
    <>
      <ToastProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/:tab" element={<LandingPage />} />
          </Routes>
        </BrowserRouter>
      </ToastProvider>
    </>
  );
}
