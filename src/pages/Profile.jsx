import React, { useState } from "react";
import { Link } from "react-router-dom";

function Profile() {
  const savedProfile =
    JSON.parse(localStorage.getItem("profile")) || {};

  const [name, setName] = useState(savedProfile.name || "");
  const [email, setEmail] = useState(savedProfile.email || "");
  const [college, setCollege] = useState(savedProfile.college || "");
  const [phone, setPhone] = useState(savedProfile.phone || "");
  const [skills, setSkills] = useState(savedProfile.skills || "");

  const handleSave = (e) => {
    e.preventDefault();

    if (!name || !email) {
      alert("Please enter your name and email");
      return;
    }

    const profileData = {
      name,
      email,
      college,
      phone,
      skills
    };

    localStorage.setItem(
      "profile",
      JSON.stringify(profileData)
    );

    alert("Profile saved successfully! 🎉");
  };

  return (
    <div className="container py-5">

      <div className="row justify-content-center">
        <div className="col-md-8">

          <div className="card shadow">

            <div className="card-header bg-primary text-white text-center">
              <h2 className="mb-0">👤 My Profile</h2>
            </div>

            <div className="card-body p-4">

              <form onSubmit={handleSave}>

                {/* Name */}
                <div className="mb-3">
                  <label className="form-label fw-bold">
                    Full Name
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) =>
                      setName(e.target.value)
                    }
                  />
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label className="form-label fw-bold">
                    Email
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                  />
                </div>

                {/* College */}
                <div className="mb-3">
                  <label className="form-label fw-bold">
                    College Name
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your college name"
                    value={college}
                    onChange={(e) =>
                      setCollege(e.target.value)
                    }
                  />
                </div>

                {/* Phone */}
                <div className="mb-3">
                  <label className="form-label fw-bold">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) =>
                      setPhone(e.target.value)
                    }
                  />
                </div>

                {/* Skills */}
                <div className="mb-3">
                  <label className="form-label fw-bold">
                    Skills
                  </label>

                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder="Example: HTML, CSS, JavaScript, React"
                    value={skills}
                    onChange={(e) =>
                      setSkills(e.target.value)
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100"
                >
                  💾 Save Profile
                </button>

              </form>

              <div className="text-center mt-4">
                <Link
                  to="/dashboard"
                  className="btn btn-outline-secondary"
                >
                  ← Back to Dashboard
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Profile;