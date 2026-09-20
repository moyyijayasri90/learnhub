import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container">

        {/* LearnHub Logo */}
        <Link
          className="navbar-brand fw-bold"
          to="/home"
        >
          LearnHub
        </Link>

        {/* Three Dots Menu */}
        <div className="dropdown">

          <button
            className="btn text-white border-0 fs-2"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            title="Menu"
          >
            ⋮
          </button>

          <ul className="dropdown-menu dropdown-menu-end shadow">

            <li>
              <Link
                className="dropdown-item"
                to="/home"
              >
                🏠 Home
              </Link>
            </li>

            <li>
              <Link
                className="dropdown-item"
                to="/courses"
              >
                📚 Courses
              </Link>
            </li>

            <li>
              <Link
                className="dropdown-item"
                to="/dashboard"
              >
                📊 Dashboard
              </Link>
            </li>

            <li>
              <hr className="dropdown-divider" />
            </li>

            <li>
              <Link
                className="dropdown-item"
                to="/profile"
              >
                👤 Profile
              </Link>
            </li>

            <li>
              <Link
                className="dropdown-item"
                to="/my-courses"
              >
                📖 My Courses
              </Link>
            </li>

            <li>
              <Link
                className="dropdown-item"
                to="/certificates"
              >
                🎓 Certificates
              </Link>
            </li>

            <li>
              <Link
                className="dropdown-item"
                to="/wishlist"
              >
                ❤️ Wishlist
              </Link>
            </li>

            <li>
              <Link
                className="dropdown-item"
                to="/settings"
              >
                ⚙️ Settings
              </Link>
            </li>

            <li>
              <hr className="dropdown-divider" />
            </li>

            <li>
              <button
                className="dropdown-item text-danger"
                onClick={handleLogout}
              >
                🚪 Logout
              </button>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;