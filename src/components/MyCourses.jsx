import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import courseData from "../pages/data/courseData";

function MyCourses() {

  const courses = Object.keys(courseData).map((id) => ({
    id: Number(id),
    ...courseData[id]
  }));

  return (
    <div className="container py-5">

      <h1 className="mb-2">📚 My Courses</h1>

      <p className="text-muted mb-4">
        Continue learning your enrolled courses.
      </p>

      <div className="row">

        {courses.map((course) => (
          <CourseItem
            key={course.id}
            course={course}
          />
        ))}

      </div>

    </div>
  );
}


function CourseItem({ course }) {

  const [progress, setProgress] = useState(0);

  useEffect(() => {

    const completedLessons =
      JSON.parse(
        localStorage.getItem(
          `completedLessons-${course.id}`
        )
      ) || [];

    const quizData =
      JSON.parse(
        localStorage.getItem(
          `quizScore-${course.id}`
        )
      );

    const totalLessons = course.lessons.length;

    const completedLessonCount =
      completedLessons.length;

    const quizCompleted =
      quizData &&
      quizData.percentage >= 60
        ? 1
        : 0;

    const totalItems =
      totalLessons + 1;

    const completedItems =
      completedLessonCount + quizCompleted;

    const calculatedProgress =
      Math.round(
        (completedItems / totalItems) * 100
      );

    setProgress(calculatedProgress);

  }, [course.id, course.lessons.length]);


  return (
    <div className="col-md-6 col-lg-4 mb-4">

      <div className="card h-100 shadow-sm">

        {/* Course Image */}

        <img
          src={getCourseImage(course.id)}
          className="card-img-top"
          alt={course.title}
          style={{
            height: "200px",
            objectFit: "cover"
          }}
        />

        <div className="card-body d-flex flex-column">

          {/* Course Title */}

          <h4 className="card-title">
            {course.title}
          </h4>

          {/* Description */}

          <p className="card-text text-muted">
            {getCourseDescription(course.id)}
          </p>

          {/* Continue Learning */}

          <Link
            to={`/learning/${course.id}`}
            className="btn btn-primary mt-auto"
          >
            Continue Learning →
          </Link>


          {/* Progress */}

          {progress > 0 && (
            <div className="mt-3">

              <div className="d-flex justify-content-between">

                <small>
                  Progress
                </small>

                <small>
                  {progress}%
                </small>

              </div>

              <div
                className="progress mt-1"
                style={{
                  height: "8px"
                }}
              >

                <div
                  className="progress-bar"
                  style={{
                    width: `${progress}%`
                  }}
                />

              </div>

            </div>
          )}

        </div>

      </div>

    </div>
  );
}


/* Course Images */

function getCourseImage(id) {

  const images = {
    1: "/images/web-development.jpg",
    2: "/images/javascript.jpg",
    3: "/images/react.jpg",
    4: "/images/html-css.jpg",
    5: "/images/nodejs.jpg",
    6: "/images/mern.jpg",
    7: "/images/python.jpg",
    8: "/images/java.jpg",
    9: "/images/c.jpg",
    10: "/images/sql.jpg",
    11: "/images/mongodb.jpg",
    12: "/images/data-structures.jpg",
    13: "/images/machine-learning.jpg",
    14: "/images/ai.jpg",
    15: "/images/cybersecurity.jpg",
    16: "/images/cloud.jpg"
  };

  return images[id];
}


/* Course Descriptions */

function getCourseDescription(id) {

  const descriptions = {

    1:
      "Learn HTML, CSS, JavaScript, Bootstrap, React, Node.js and MongoDB.",

    2:
      "Learn JavaScript from basics to functions, arrays and objects.",

    3:
      "Learn React components, JSX, props, state, hooks and routing.",

    4:
      "Master HTML structure, CSS styling, Flexbox, Grid and responsive design.",

    5:
      "Build backend applications and REST APIs using Node.js and Express.",

    6:
      "Learn MongoDB, Express, React and Node.js by building full-stack applications.",

    7:
      "Learn Python programming from basics to object-oriented programming.",

    8:
      "Learn Java programming, OOP, arrays, inheritance and exception handling.",

    9:
      "Learn C programming fundamentals, functions, loops and arrays.",

    10:
      "Learn SQL queries, filtering, grouping, database operations and joins.",

    11:
      "Learn MongoDB databases, collections, documents and queries.",

    12:
      "Learn arrays, linked lists, stacks, queues, trees, graphs and algorithms.",

    13:
      "Learn machine learning concepts, regression, classification and clustering.",

    14:
      "Learn artificial intelligence, intelligent agents, search and NLP.",

    15:
      "Learn cyber security, authentication, encryption, malware and web security.",

    16:
      "Learn cloud computing, service models, virtualization, storage and security."

  };

  return descriptions[id];
}


export default MyCourses;