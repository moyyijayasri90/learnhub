import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="container py-5">

      {/* Welcome */}
      <div className="mb-4">
        <h1>Welcome to LearnHub 👋</h1>
        <p className="text-muted">
          Continue learning and achieve your goals.
        </p>
      </div>

      {/* Statistics */}
      <div className="row g-4 mb-5">

        <div className="col-md-3">
          <div className="card shadow-sm p-4 text-center">
            <h2>4</h2>
            <p className="mb-0">My Courses</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm p-4 text-center">
            <h2>65%</h2>
            <p className="mb-0">Overall Progress</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm p-4 text-center">
            <h2>12</h2>
            <p className="mb-0">Completed Lessons</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm p-4 text-center">
            <h2>2</h2>
            <p className="mb-0">Certificates</p>
          </div>
        </div>

      </div>

      {/* Continue Learning */}
      <div className="card shadow-sm p-4 mb-5">

        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="mb-0">Continue Learning</h2>

          <Link to="/courses" className="btn btn-outline-primary">
            Browse Courses
          </Link>
        </div>

        <div className="row align-items-center">

          <div className="col-md-8">

            <h4>Complete Web Development</h4>

            <p className="text-muted">
              HTML, CSS, JavaScript and real-world projects.
            </p>

            <div className="progress mb-2">
              <div
                className="progress-bar"
                style={{ width: "65%" }}
              >
                65%
              </div>
            </div>

            <small className="text-muted">
              13 of 20 lessons completed
            </small>

          </div>

          <div className="col-md-4 text-md-end mt-3 mt-md-0">

            <Link
              to="/learning/1"
              className="btn btn-primary"
            >
              Continue Learning →
            </Link>

          </div>

        </div>

      </div>

      {/* Dashboard Menu */}
      <h2 className="mb-4">My LearnHub</h2>

      <div className="row g-4">

        <div className="col-md-4">
          <Link
            to="/my-courses"
            className="text-decoration-none"
          >
            <div className="card shadow-sm p-4 h-100">
              <h3>📚 My Courses</h3>
              <p className="text-muted">
                View and continue your enrolled courses.
              </p>
            </div>
          </Link>
        </div>

        <div className="col-md-4">
          <Link
            to="/profile"
            className="text-decoration-none"
          >
            <div className="card shadow-sm p-4 h-100">
              <h3>👤 Profile</h3>
              <p className="text-muted">
                View and update your profile information.
              </p>
            </div>
          </Link>
        </div>

        <div className="col-md-4">
          <Link
            to="/certificates"
            className="text-decoration-none"
          >
            <div className="card shadow-sm p-4 h-100">
              <h3>🏆 Certificates</h3>
              <p className="text-muted">
                View your earned course certificates.
              </p>
            </div>
          </Link>
        </div>

        <div className="col-md-4">
          <Link
            to="/wishlist"
            className="text-decoration-none"
          >
            <div className="card shadow-sm p-4 h-100">
              <h3>❤️ Wishlist</h3>
              <p className="text-muted">
                View your saved courses.
              </p>
            </div>
          </Link>
        </div>

        <div className="col-md-4">
          <Link
            to="/settings"
            className="text-decoration-none"
          >
            <div className="card shadow-sm p-4 h-100">
              <h3>⚙️ Settings</h3>
              <p className="text-muted">
                Manage your LearnHub preferences.
              </p>
            </div>
          </Link>
        </div>

        <div className="col-md-4">
          <Link
            to="/courses"
            className="text-decoration-none"
          >
            <div className="card shadow-sm p-4 h-100">
              <h3>🔎 Explore Courses</h3>
              <p className="text-muted">
                Discover new courses and skills.
              </p>
            </div>
          </Link>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;