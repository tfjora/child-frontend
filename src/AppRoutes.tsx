import { Route, Routes } from 'react-router-dom';

import LandingPage from './pages/Landingpage';

export default function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/:tab" element={<LandingPage />} />
            </Routes>
        </>
    );
}
