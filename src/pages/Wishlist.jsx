import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import courseData from "./data/courseData";

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const savedWishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    setWishlist(savedWishlist);
  }, []);

  const removeFromWishlist = (id) => {
    const updatedWishlist = wishlist.filter(
      (courseId) => Number(courseId) !== Number(id)
    );

    setWishlist(updatedWishlist);

    localStorage.setItem(
      "wishlist",
      JSON.stringify(updatedWishlist)
    );
  };

  return (
    <div className="container py-5">

      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">
          ❤️ My Wishlist
        </h1>

        <p className="text-muted">
          Courses you saved for learning later
        </p>
      </div>

      {/* Empty Wishlist */}
      {wishlist.length === 0 ? (
        <div className="card shadow-sm text-center p-5">

          <div style={{ fontSize: "70px" }}>
            ❤️
          </div>

          <h3 className="mt-3">
            Your Wishlist is Empty
          </h3>

          <p className="text-muted">
            Explore our courses and add your favorite
            courses to your wishlist.
          </p>

          <Link
            to="/courses"
            className="btn btn-primary mt-3"
          >
            📚 Explore Courses
          </Link>

        </div>
      ) : (

        /* Wishlist Courses */
        <div className="row">

          {wishlist.map((id) => {

            const course = courseData[id];

            if (!course) return null;

            return (
              <div
                className="col-md-6 col-lg-4 mb-4"
                key={id}
              >

                <div className="card shadow-sm h-100">

                  {/* Course Image */}
                  {course.image && (
                    <img
                      src={course.image}
                      alt={course.title}
                      className="card-img-top"
                      style={{
                        height: "180px",
                        objectFit: "cover"
                      }}
                    />
                  )}

                  <div className="card-body d-flex flex-column">

                    <span className="badge bg-primary align-self-start mb-2">
                      {course.category}
                    </span>

                    <h4 className="card-title">
                      {course.title}
                    </h4>

                    <p className="text-muted">
                      {course.description}
                    </p>

                    <div className="mt-auto">

                      {/* Continue Learning */}
                      <Link
                        to={`/courses/${id}`}
                        className="btn btn-primary w-100 mb-2"
                      >
                        📚 View Course
                      </Link>

                      {/* Remove */}
                      <button
                        className="btn btn-outline-danger w-100"
                        onClick={() =>
                          removeFromWishlist(id)
                        }
                      >
                        💔 Remove from Wishlist
                      </button>

                    </div>

                  </div>
                </div>

              </div>
            );
          })}

        </div>
      )}

    </div>
  );
}

export default Wishlist;