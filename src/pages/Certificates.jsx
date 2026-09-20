
import React from "react";
import { Link } from "react-router-dom";
import courseData from "./data/courseData";

function Certificates() {

  const completedCourses = Object.keys(courseData).filter((id) => {

    const course = courseData[id];

    const completedLessons =
      JSON.parse(
        localStorage.getItem(
          `completedLessons-${id}`
        )
      ) || [];

    const quizData =
      JSON.parse(
        localStorage.getItem(
          `quizScore-${id}`
        )
      );

    const lessonsCompleted =
      completedLessons.length ===
      course.lessons.length;

    const quizPassed =
      quizData &&
      quizData.percentage >= 60;

    return lessonsCompleted && quizPassed;
  });

  return (
    <div className="container py-5">

      <h1 className="mb-2">
        🎓 My Certificates
      </h1>

      <p className="text-muted mb-4">
        Certificates earned by completing courses.
      </p>

      {completedCourses.length === 0 ? (

        <div className="card shadow-sm p-5 text-center">

          <h3>
            📚 No Certificates Yet
          </h3>

          <p className="text-muted">
            Complete all lessons and pass the quiz
            with at least 60% to earn a certificate.
          </p>

          <Link
            to="/my-courses"
            className="btn btn-primary"
          >
            Continue Learning
          </Link>

        </div>

      ) : (

        <div className="row">

          {completedCourses.map((id) => (

            <div
              className="col-md-6 col-lg-4 mb-4"
              key={id}
            >

              <div className="card shadow-sm h-100">

                <div className="card-body text-center">

                  <div
                    style={{
                      fontSize: "60px"
                    }}
                  >
                    🏆
                  </div>

                  <h4 className="mt-3">
                    {courseData[id].title}
                  </h4>

                  <p className="text-success">
                    ✅ Course Completed
                  </p>

                  <p className="text-muted">
                    Certificate of Completion
                  </p>

                  <Link
                    to={`/certificate/${id}`}
                    className="btn btn-primary"
                  >
                    View Certificate
                  </Link>

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default Certificates;