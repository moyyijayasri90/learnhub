import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Courses.css";

const coursesData = [
  {
    id: 1,
    title: "Complete Web Development",
    category: "Web Development",
    description: "Learn HTML, CSS, JavaScript and build real websites.",
    rating: 4.8,
    students: "25K",
    level: "Beginner",
    duration: "40 Hours",
    image: "/images/web-development.jpg",
  },
  {
    id: 2,
    title: "JavaScript for Beginners",
    category: "Web Development",
    description: "Master JavaScript fundamentals with practical examples.",
    rating: 4.7,
    students: "18K",
    level: "Beginner",
    duration: "25 Hours",
    image: "/images/javascript.jpg",
  },
  {
    id: 3,
    title: "React JS Complete Course",
    category: "Web Development",
    description: "Build modern web applications using React JS.",
    rating: 4.9,
    students: "32K",
    level: "Intermediate",
    duration: "30 Hours",
    image: "/images/react.jpg",
  },
  {
    id: 4,
    title: "HTML & CSS Masterclass",
    category: "Web Development",
    description: "Learn responsive web design using HTML and CSS.",
    rating: 4.8,
    students: "28K",
    level: "Beginner",
    duration: "22 Hours",
    image: "/images/html-css.jpg",
  },
  {
    id: 5,
    title: "Node.js Backend Development",
    category: "Web Development",
    description: "Build powerful backend applications using Node.js.",
    rating: 4.7,
    students: "17K",
    level: "Intermediate",
    duration: "32 Hours",
    image: "/images/nodejs.jpg",
  },
  {
    id: 6,
    title: "MERN Stack Development",
    category: "Web Development",
    description: "Learn MongoDB, Express, React and Node.js.",
    rating: 4.9,
    students: "21K",
    level: "Advanced",
    duration: "55 Hours",
    image: "/images/mern.jpg",
  },
  {
    id: 7,
    title: "Python Programming",
    category: "Programming",
    description: "Learn Python programming from basics to advanced.",
    rating: 4.8,
    students: "45K",
    level: "Beginner",
    duration: "35 Hours",
    image: "/images/python.jpg",
  },
  {
    id: 8,
    title: "Java Programming",
    category: "Programming",
    description: "Learn Java programming and object-oriented concepts.",
    rating: 4.7,
    students: "30K",
    level: "Beginner",
    duration: "38 Hours",
    image: "/images/java.jpg",
  },
  {
    id: 9,
    title: "C Programming",
    category: "Programming",
    description:
      "Learn C programming from fundamentals to advanced concepts.",
    rating: 4.6,
    students: "26K",
    level: "Beginner",
    duration: "30 Hours",
    image: "/images/c.jpg",
  },
  {
    id: 10,
    title: "SQL Database Course",
    category: "Database",
    description:
      "Learn SQL queries, joins, grouping and database operations.",
    rating: 4.8,
    students: "24K",
    level: "Beginner",
    duration: "28 Hours",
    image: "/images/sql.jpg",
  },
  {
    id: 11,
    title: "MongoDB Complete Course",
    category: "Database",
    description: "Learn MongoDB and NoSQL database development.",
    rating: 4.7,
    students: "16K",
    level: "Intermediate",
    duration: "25 Hours",
    image: "/images/mongodb.jpg",
  },
  {
    id: 12,
    title: "Data Structures & Algorithms",
    category: "Programming",
    description:
      "Master data structures and algorithms for coding interviews.",
    rating: 4.9,
    students: "40K",
    level: "Intermediate",
    duration: "45 Hours",
    image: "/images/data-structures.jpg",
  },
  {
    id: 13,
    title: "Machine Learning",
    category: "AI & ML",
    description:
      "Learn machine learning algorithms and build ML projects.",
    rating: 4.8,
    students: "29K",
    level: "Intermediate",
    duration: "42 Hours",
    image: "/images/machine-learning.jpg",
  },
  {
    id: 14,
    title: "Artificial Intelligence",
    category: "AI & ML",
    description:
      "Understand AI concepts and build intelligent applications.",
    rating: 4.7,
    students: "23K",
    level: "Advanced",
    duration: "40 Hours",
    image: "/images/ai.jpg",
  },
  {
    id: 15,
    title: "Cyber Security",
    category: "Security",
    description:
      "Learn network security, cryptography and ethical hacking basics.",
    rating: 4.8,
    students: "19K",
    level: "Intermediate",
    duration: "36 Hours",
    image: "/images/cybersecurity.jpg",
  },
  {
    id: 16,
    title: "Cloud Computing",
    category: "Cloud",
    description:
      "Learn cloud computing concepts and modern cloud platforms.",
    rating: 4.7,
    students: "15K",
    level: "Intermediate",
    duration: "34 Hours",
    image: "/images/cloud.jpg",
  },
];

function Courses() {
  const [searchTerm, setSearchTerm] = useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("All Categories");

  const [selectedLevel, setSelectedLevel] =
    useState("All Levels");

  // Wishlist
  const [wishlist, setWishlist] = useState(() => {
    return JSON.parse(localStorage.getItem("wishlist")) || [];
  });

  // Save wishlist
  useEffect(() => {
    localStorage.setItem(
      "wishlist",
      JSON.stringify(wishlist)
    );
  }, [wishlist]);

  // Add / Remove Wishlist
  const toggleWishlist = (courseId) => {
    if (wishlist.includes(courseId)) {
      setWishlist(
        wishlist.filter((id) => id !== courseId)
      );
    } else {
      setWishlist([...wishlist, courseId]);
    }
  };

  const categories = [
    "All Categories",
    "Web Development",
    "Programming",
    "Database",
    "AI & ML",
    "Security",
    "Cloud",
  ];

  const levels = [
    "All Levels",
    "Beginner",
    "Intermediate",
    "Advanced",
  ];

  const filteredCourses = coursesData.filter(
    (course) => {
      const matchesSearch =
        course.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        course.description
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        course.category
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All Categories" ||
        course.category === selectedCategory;

      const matchesLevel =
        selectedLevel === "All Levels" ||
        course.level === selectedLevel;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesLevel
      );
    }
  );

  return (
    <div className="courses-page">

      {/* Page Header */}
      <section className="courses-header">
        <h1>Explore Courses</h1>

        <p>
          Learn new skills and build your future with
          LearnHub
        </p>
      </section>

      {/* Search and Filters */}
      <section className="filters-section">

        <div className="search-box">
          <input
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(event) =>
              setSearchTerm(event.target.value)
            }
          />
        </div>

        <div className="filter-box">
          <label>Category</label>

          <select
            value={selectedCategory}
            onChange={(event) =>
              setSelectedCategory(event.target.value)
            }
          >
            {categories.map((category) => (
              <option
                key={category}
                value={category}
              >
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-box">
          <label>Level</label>

          <select
            value={selectedLevel}
            onChange={(event) =>
              setSelectedLevel(event.target.value)
            }
          >
            {levels.map((level) => (
              <option
                key={level}
                value={level}
              >
                {level}
              </option>
            ))}
          </select>
        </div>

      </section>

      {/* Course Count */}
      <section className="course-heading">

        <h2>Popular Courses</h2>

        <span>
          {filteredCourses.length} courses found
        </span>

      </section>

      {/* Courses Grid */}
      <section className="courses-grid">

        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => {

            const isWishlisted =
              wishlist.includes(course.id);

            return (
              <div
                className="course-card"
                key={course.id}
              >

                {/* Course Image */}
                <div className="course-image-container">

                  <img
                    src={course.image}
                    alt={course.title}
                    className="course-image"
                  />

                  {/* ONLY Small Wishlist Heart */}
                  <button
                    className="wishlist-button"
                    onClick={() =>
                      toggleWishlist(course.id)
                    }
                    title={
                      isWishlisted
                        ? "Remove from Wishlist"
                        : "Add to Wishlist"
                    }
                  >
                    {isWishlisted ? "❤️" : "🤍"}
                  </button>

                </div>

                {/* Course Details */}
                <div className="course-content">

                  <span className="course-category">
                    {course.category}
                  </span>

                  <h3>{course.title}</h3>

                  <p className="course-description">
                    {course.description}
                  </p>

                  <div className="rating">
                    ⭐ {course.rating}

                    <span>
                      ({course.students} students)
                    </span>
                  </div>

                  <div className="course-info">

                    <p>
                      <strong>Level:</strong>{" "}
                      {course.level}
                    </p>

                    <p>
                      ⏱️ {course.duration}
                    </p>

                  </div>

                  {/* Only Start Learning Button */}
                  <div className="course-buttons">

                    <Link
                      to={`/courses/${course.id}`}
                      className="details-button"
                    >
                      Start Learning
                    </Link>

                  </div>

                </div>

              </div>
            );
          })
        ) : (
          <div className="no-courses">

            <h2>No courses found</h2>

            <p>
              Try another search or change the filters.
            </p>

          </div>
        )}

      </section>

    </div>
  );
}

export default Courses;