import React from "react";
import { Link, useParams } from "react-router-dom";

function CourseDetails() {
  const { id } = useParams();

  const courses = {
    1: {
      title: "Complete Web Development",
      category: "Web Development",
      image: "/images/web-development.jpg",
      description: "Learn HTML, CSS, JavaScript and build real websites.",
      rating: "4.8",
      students: "25K",
      duration: "40 Hours",
      level: "Beginner",
    },

    2: {
      title: "JavaScript for Beginners",
      category: "Web Development",
      image: "/images/javascript.jpg",
      description: "Master JavaScript fundamentals with practical examples.",
      rating: "4.7",
      students: "18K",
      duration: "25 Hours",
      level: "Beginner",
    },

    3: {
      title: "React JS Complete Course",
      category: "Web Development",
      image: "/images/react.jpg",
      description: "Build modern web applications using React JS.",
      rating: "4.9",
      students: "32K",
      duration: "30 Hours",
      level: "Intermediate",
    },

    4: {
      title: "HTML & CSS Masterclass",
      category: "Web Development",
      image: "/images/html-css.jpg",
      description: "Learn responsive web design using HTML and CSS.",
      rating: "4.8",
      students: "28K",
      duration: "22 Hours",
      level: "Beginner",
    },

    5: {
      title: "Node.js Backend Development",
      category: "Web Development",
      image: "/images/nodejs.jpg",
      description: "Build powerful backend applications using Node.js.",
      rating: "4.7",
      students: "17K",
      duration: "32 Hours",
      level: "Intermediate",
    },

    6: {
      title: "MERN Stack Development",
      category: "Web Development",
      image: "/images/mern.jpg",
      description: "Learn MongoDB, Express, React and Node.js.",
      rating: "4.9",
      students: "21K",
      duration: "55 Hours",
      level: "Advanced",
    },

    7: {
      title: "Python Programming",
      category: "Programming",
      image: "/images/python.jpg",
      description: "Learn Python programming from basics to advanced.",
      rating: "4.8",
      students: "45K",
      duration: "35 Hours",
      level: "Beginner",
    },

    8: {
      title: "Java Programming",
      category: "Programming",
      image: "/images/java.jpg",
      description: "Learn Java programming and object-oriented concepts.",
      rating: "4.7",
      students: "30K",
      duration: "38 Hours",
      level: "Beginner",
    },

    9: {
      title: "C Programming",
      category: "Programming",
      image: "/images/c.jpg",
      description: "Learn C programming from fundamentals to advanced concepts.",
      rating: "4.6",
      students: "26K",
      duration: "30 Hours",
      level: "Beginner",
    },

    10: {
      title: "SQL Database Course",
      category: "Database",
      image: "/images/sql.jpg",
      description: "Learn SQL queries, joins, grouping and database operations.",
      rating: "4.8",
      students: "24K",
      duration: "28 Hours",
      level: "Beginner",
    },

    11: {
      title: "MongoDB Complete Course",
      category: "Database",
      image: "/images/mongodb.jpg",
      description: "Learn MongoDB and NoSQL database development.",
      rating: "4.7",
      students: "16K",
      duration: "25 Hours",
      level: "Intermediate",
    },

    12: {
      title: "Data Structures & Algorithms",
      category: "Programming",
      image: "/images/data-structures.jpg",
      description: "Master data structures and algorithms for coding interviews.",
      rating: "4.9",
      students: "40K",
      duration: "45 Hours",
      level: "Intermediate",
    },

    13: {
      title: "Machine Learning",
      category: "AI & ML",
      image: "/images/machine-learning.jpg",
      description: "Learn machine learning algorithms and build ML projects.",
      rating: "4.8",
      students: "29K",
      duration: "42 Hours",
      level: "Intermediate",
    },

    14: {
      title: "Artificial Intelligence",
      category: "AI & ML",
      image: "/images/ai.jpg",
      description: "Understand AI concepts and build intelligent applications.",
      rating: "4.7",
      students: "23K",
      duration: "40 Hours",
      level: "Advanced",
    },

    15: {
      title: "Cyber Security",
      category: "Security",
      image: "/images/cybersecurity.jpg",
      description: "Learn network security and cryptography basics.",
      rating: "4.8",
      students: "19K",
      duration: "36 Hours",
      level: "Intermediate",
    },

    16: {
      title: "Cloud Computing",
      category: "Cloud",
      image: "/images/cloud.jpg",
      description: "Learn cloud computing concepts and modern cloud platforms.",
      rating: "4.7",
      students: "15K",
      duration: "34 Hours",
      level: "Intermediate",
    },
  };

  const course = courses[id];

  if (!course) {
    return (
      <div className="container text-center py-5">
        <h2>Course Not Found</h2>

        <Link to="/courses" className="btn btn-primary mt-3">
          Back to Courses
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-5">

      <Link to="/courses" className="btn btn-outline-primary mb-4">
        ← Back to Courses
      </Link>

      <div className="row align-items-center">

        <div className="col-md-5 mb-4">
          <img
            src={course.image}
            alt={course.title}
            className="img-fluid rounded shadow"
          />
        </div>

        <div className="col-md-7">

          <span className="badge bg-primary mb-3">
            {course.category}
          </span>

          <h1>{course.title}</h1>

          <p className="lead mt-3">
            {course.description}
          </p>

          <p>
            ⭐ <strong>{course.rating}</strong>{" "}
            ({course.students} students)
          </p>

          <p>
            👨‍🏫 <strong>Instructor:</strong> LearnHub Instructor
          </p>

          <p>
            ⏱️ <strong>Duration:</strong> {course.duration}
          </p>

          <p>
            📊 <strong>Level:</strong> {course.level}
          </p>

          <Link
            to={`/learning/${id}`}
            className="btn btn-primary btn-lg mt-3"
          >
            Start Learning
          </Link>

        </div>
      </div>

      <div className="mt-5">

        <h2>What You Will Learn</h2>

        <ul className="list-group mt-3">

          <li className="list-group-item">
            ✅ Learn the fundamentals
          </li>

          <li className="list-group-item">
            ✅ Build practical projects
          </li>

          <li className="list-group-item">
            ✅ Learn industry-ready skills
          </li>

          <li className="list-group-item">
            ✅ Complete real-world assignments
          </li>

          <li className="list-group-item">
            ✅ Get a certificate after completion
          </li>

        </ul>

      </div>

      <div className="mt-5">

        <h2>Course Curriculum</h2>

        <div className="list-group mt-3">

          <div className="list-group-item">
            <strong>1. Introduction</strong>
            <p className="mb-0 mt-2">
              Introduction to the course and learning roadmap.
            </p>
          </div>

          <div className="list-group-item">
            <strong>2. Fundamentals</strong>
            <p className="mb-0 mt-2">
              Learn the basic concepts step by step.
            </p>
          </div>

          <div className="list-group-item">
            <strong>3. Practical Projects</strong>
            <p className="mb-0 mt-2">
              Build practical projects and improve your skills.
            </p>
          </div>

          <div className="list-group-item">
            <strong>4. Real World Applications</strong>
            <p className="mb-0 mt-2">
              Apply your knowledge to real-world problems.
            </p>
          </div>

        </div>

      </div>

      <div className="text-center mt-5 p-5 bg-light rounded">

        <h2>Ready to Start Learning?</h2>

        <p className="text-muted">
          Start this course and improve your skills today.
        </p>

        <Link
          to={`/learning/${id}`}
          className="btn btn-primary btn-lg"
        >
          Start Learning Now
        </Link>

      </div>

    </div>
  );
}

export default CourseDetails;