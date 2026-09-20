import React from "react";
import { Link, useParams } from "react-router-dom";
import courseData from "./data/courseData";
import "./Certificate.css";

function Certificate() {
  const { id } = useParams();

  const course = courseData[id];

  // Profile name
  const profile =
    JSON.parse(localStorage.getItem("profile")) || {};

  const studentName = profile.name || "Student Name";

  // Current date
  const issueDate = new Date().toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  });

  // Unique certificate ID
  const certificateId = `LH-${id}-CERT`;

  if (!course) {
    return (
      <div className="container py-5 text-center">
        <h2>Certificate Not Found</h2>

        <Link
          to="/certificates"
          className="btn btn-primary mt-3"
        >
          Back to Certificates
        </Link>
      </div>
    );
  }

  return (
    <div className="certificate-page">

      {/* PREMIUM CERTIFICATE */}
      <div className="premium-certificate">

        {/* Decorative corner elements */}
        <div className="corner corner-top-left"></div>
        <div className="corner corner-top-right"></div>
        <div className="corner corner-bottom-left"></div>
        <div className="corner corner-bottom-right"></div>

        {/* Watermark */}
        <div className="certificate-watermark">
          LEARNHUB
        </div>

        {/* Header */}
        <div className="certificate-header">

          <div className="learnhub-logo">
            🎓
          </div>

          <div>
            <h1>LearnHub</h1>

            <p>
              ONLINE LEARNING PLATFORM
            </p>
          </div>

          <div className="verified-badge">
            <div className="star">★</div>
            <strong>VERIFIED</strong>
            <span>ACHIEVEMENT</span>
          </div>

        </div>

        {/* Title */}
        <div className="certificate-heading">

          <h2>
            CERTIFICATE
          </h2>

          <h3>
            OF ACHIEVEMENT
          </h3>

        </div>

        <p className="presented-text">
          This certificate is proudly presented to
        </p>

        {/* Student */}
        <h1 className="student-name">
          {studentName}
        </h1>

        <div className="gold-line"></div>

        <p className="completion-text">
          for successfully completing the course
        </p>

        {/* Course */}
        <h2 className="course-title">
          {course.title}
        </h2>

        <p className="course-description">
          Successfully completed all course lessons
          and passed the final assessment.
        </p>

        {/* Details */}
        <div className="certificate-info">

          <div>
            <span>ISSUE DATE</span>
            <strong>{issueDate}</strong>
          </div>

          <div>
            <span>COURSE STATUS</span>
            <strong className="completed">
              ✓ COMPLETED
            </strong>
          </div>

          <div>
            <span>CERTIFICATE ID</span>
            <strong>{certificateId}</strong>
          </div>

        </div>

        {/* Bottom */}
        <div className="certificate-footer">

          <div className="verification">
            <span>Verification Code</span>
            <strong>{certificateId}</strong>
          </div>

          <div className="signature">
            <div className="signature-line"></div>
            <strong>LearnHub Team</strong>
            <span>Authorized Signature</span>
          </div>

          <div className="motto">
            <strong>Learn today.</strong>
            <span>Build tomorrow.</span>
          </div>

        </div>

      </div>

      {/* ACTION BUTTONS */}
      <div className="certificate-actions">

        <Link
          to="/certificates"
          className="btn btn-outline-primary"
        >
          ← Back to Certificates
        </Link>

        <button
          onClick={() => window.print()}
          className="btn btn-success ms-2"
        >
          🖨️ Download / Print Certificate
        </button>

      </div>

    </div>
  );
}

export default Certificate;