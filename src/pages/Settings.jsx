import React, { useEffect, useState } from "react";
import "../Settings.css";

function Settings() {
  const savedSettings =
    JSON.parse(localStorage.getItem("settings")) || {};

  const [darkMode, setDarkMode] = useState(
    savedSettings.darkMode || false
  );

  const [notifications, setNotifications] = useState(
    savedSettings.notifications ?? true
  );

  const [emailUpdates, setEmailUpdates] = useState(
    savedSettings.emailUpdates ?? true
  );

  // Save settings
  useEffect(() => {
    localStorage.setItem(
      "settings",
      JSON.stringify({
        darkMode,
        notifications,
        emailUpdates,
      })
    );
  }, [darkMode, notifications, emailUpdates]);

  const handleClearData = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to clear all account data?"
    );

    if (!confirmDelete) return;

    localStorage.clear();

    setDarkMode(false);
    setNotifications(true);
    setEmailUpdates(true);

    alert("All account data has been cleared.");
  };

  return (
    <div
      className={
        darkMode
          ? "settings-page dark"
          : "settings-page"
      }
    >
      <div className="settings-card">

        {/* Header */}
        <div className="settings-header">
          <h1>⚙️ Settings</h1>
          <p>Customize your LearnHub experience</p>
        </div>

        <div className="settings-body">

          {/* Appearance */}
          <div className="settings-section">

            <h2>🎨 Appearance</h2>

            <div className="settings-row">

              <div className="settings-info">
                <h3>Dark Mode</h3>

                <p>
                  Change the appearance of LearnHub
                </p>
              </div>

              <label className="switch">

                <input
                  type="checkbox"
                  checked={darkMode}
                  onChange={(e) =>
                    setDarkMode(e.target.checked)
                  }
                />

                <span className="slider"></span>

              </label>

            </div>

          </div>

          {/* Notifications */}
          <div className="settings-section">

            <h2>🔔 Notifications</h2>

            <div className="settings-row">

              <div className="settings-info">
                <h3>Course Notifications</h3>

                <p>
                  Get notifications about your courses
                </p>
              </div>

              <label className="switch">

                <input
                  type="checkbox"
                  checked={notifications}
                  onChange={(e) =>
                    setNotifications(e.target.checked)
                  }
                />

                <span className="slider"></span>

              </label>

            </div>

          </div>

          {/* Email Updates */}
          <div className="settings-section">

            <h2>📧 Email Updates</h2>

            <div className="settings-row">

              <div className="settings-info">
                <h3>Email Updates</h3>

                <p>
                  Receive LearnHub updates by email
                </p>
              </div>

              <label className="switch">

                <input
                  type="checkbox"
                  checked={emailUpdates}
                  onChange={(e) =>
                    setEmailUpdates(e.target.checked)
                  }
                />

                <span className="slider"></span>

              </label>

            </div>

          </div>

          {/* Account */}
          <div className="settings-section">

            <h2>👤 Account</h2>

            <button
              className="clear-button"
              onClick={handleClearData}
            >
              🗑️ Clear Account Data
            </button>

          </div>

          {/* Save */}
          <button
            className="save-button"
            onClick={() =>
              alert("Settings saved successfully! ✅")
            }
          >
            💾 Save Settings
          </button>

        </div>
      </div>
    </div>
  );
}

export default Settings;