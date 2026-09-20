import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Learning from "./pages/Learning";
import Dashboard from "./pages/Dashboard";
import MyCourses from "./components/MyCourses";
import Certificates from "./pages/Certificates";
import Certificate from "./pages/Certificate";
import Profile from "./pages/Profile";
import Wishlist from "./pages/Wishlist";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Login */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

        {/* Register */}
        <Route path="/register" element={<Register />} />

        {/* Home */}
        <Route
          path="/home"
          element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          }
        />

        {/* Courses */}
        <Route
          path="/courses"
          element={
            <>
              <Navbar />
              <Courses />
              <Footer />
            </>
          }
        />

        {/* Course Details */}
        <Route
          path="/courses/:id"
          element={
            <>
              <Navbar />
              <CourseDetails />
              <Footer />
            </>
          }
        />

        {/* Learning */}
        <Route
          path="/learning/:id"
          element={
            <>
              <Navbar />
              <Learning />
              <Footer />
            </>
          }
        />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <>
              <Navbar />
              <Dashboard />
              <Footer />
            </>
          }
        />

        {/* My Courses */}
        <Route
          path="/my-courses"
          element={
            <>
              <Navbar />
              <MyCourses />
              <Footer />
            </>
          }
        />

        {/* Certificates */}
        <Route
          path="/certificates"
          element={
            <>
              <Navbar />
              <Certificates />
              <Footer />
            </>
          }
        />

        {/* Certificate */}
        <Route
          path="/certificate/:id"
          element={
            <>
              <Navbar />
              <Certificate />
              <Footer />
            </>
          }
        />

        {/* Profile */}
        <Route
          path="/profile"
          element={
            <>
              <Navbar />
              <Profile />
              <Footer />
            </>
          }
        />

        {/* Wishlist */}
        <Route
          path="/wishlist"
          element={
            <>
              <Navbar />
              <Wishlist />
              <Footer />
            </>
          }
        />

        {/* Settings */}
        <Route
          path="/settings"
          element={
            <>
              <Navbar />
              <Settings />
              <Footer />
            </>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;