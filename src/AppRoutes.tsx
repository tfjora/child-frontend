import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";

import LandingPage from "./pages/Landingpage";

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
