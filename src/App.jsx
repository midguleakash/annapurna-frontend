import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Login from "./pages/auth/Login";
// import Login from "./pages/Login";
import Signup from "./pages/auth/Signup";
import DonorDashboard from "./pages/donor/DonorDashboard";
import Donate from "./pages/donor/Donate";
import DonationHistory from "./pages/donor/DonationHistory";

import VolunteerDashboard from "./pages/volunteer/VolunteerDashboard";
import VolunteerSeeAllDonation from "./pages/volunteer/VolunteerSeeAllDonation";
import VolunteerSeeAllReceiveRequest from "./pages/volunteer/VolunteerSeeAllReceiveRequest";
import VolunteerMyMatchHistory from "./pages/volunteer/VolunteerMyMatchHistory";
import VolunteerAllMatchHistory from "./pages/volunteer/VolunteerAllMatchHistory";

import ReceiverDashboard from "./pages/receiver/ReceiverDashboard";
import RequestFood from "./pages/receiver/RequestFood";
import RequestHistory from "./pages/receiver/RequestHistory";

import ProtectedRoute from "./components/ProtectedRoute";
import Unauthorized from "./pages/Unauthorized";
import PublicRoute from "./components/PublicRoute";
import NotFound from "./pages/NotFound";


// import DonorDashboard from "./pages/DonorDashboard";
// import VolunteerDashboard from "./pages/VolunteerDashboard";
// import ReceiverDashboard from "./pages/ReceiverDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        
        <Route
          path="/"
          element={
            <PublicRoute>
              <Home />
            </PublicRoute>
          }
        />

        <Route
          path="/about"
          element={
            <PublicRoute>
              <About />
            </PublicRoute>
          }
        />

        <Route
          path="/contact"
          element={
            <PublicRoute>
              <Contact />
            </PublicRoute>
          }
        />

        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        <Route
          path="/signup"
          element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          }
        />


        <Route path="/unauthorized" element={<Unauthorized />} />


        // route for donor role
        <Route
          path="/donor"
          element={
            <ProtectedRoute allowedRole="donor">
              <DonorDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/donor/donate"
          element={
            <ProtectedRoute allowedRole="donor">
              <Donate />
            </ProtectedRoute>
          }
        />

        <Route
          path="/donor/history"
          element={
            <ProtectedRoute allowedRole="donor">
              <DonationHistory />
            </ProtectedRoute>
          }
        />


          // route for receiver role
        <Route
          path="/receiver"
          element={
            <ProtectedRoute allowedRole="receiver">
              <ReceiverDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/receiver/request-food"
          element={
            <ProtectedRoute allowedRole="receiver">
              <RequestFood />
            </ProtectedRoute>
          }
        />

        <Route
          path="/receiver/history"
          element={
            <ProtectedRoute allowedRole="receiver">
              <RequestHistory />
            </ProtectedRoute>
          }
        />




          // route for volunteer role
        <Route
          path="/volunteer"
          element={
            <ProtectedRoute allowedRole="volunteer">
              <VolunteerDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/volunteer/donations"
          element={
            <ProtectedRoute allowedRole="volunteer">
              <VolunteerSeeAllDonation />
            </ProtectedRoute>
          }
        />

        <Route
          path="/volunteer/requests"
          element={
            <ProtectedRoute allowedRole="volunteer">
              <VolunteerSeeAllReceiveRequest />
            </ProtectedRoute>
          }
        />

        <Route
          path="/volunteer/matches/my"
          element={
            <ProtectedRoute allowedRole="volunteer">
              <VolunteerMyMatchHistory />
            </ProtectedRoute>
          }
        />

        <Route
          path="/volunteer/matches/all"
          element={
            <ProtectedRoute allowedRole="volunteer">
              <VolunteerAllMatchHistory />
            </ProtectedRoute>
          }
        />



        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
