import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import courseData from "./data/courseData";

function Learning() {
  const { id } = useParams();

  const course = courseData[id];

  // -----------------------------
  // Course Not Found
  // -----------------------------

  if (!course) {
    return (
      <div className="container py-5">
        <h2>Course Not Found</h2>

        <Link
          to="/courses"
          className="btn btn-primary mt-3"
        >
          Back to Courses
        </Link>
      </div>
    );
  }

  // -----------------------------
  // State
  // -----------------------------

  const [selectedLesson, setSelectedLesson] = useState(0);

  const [completedLessons, setCompletedLessons] = useState(() => {
    const saved = localStorage.getItem(
      `completedLessons-${id}`
    );

    return saved ? JSON.parse(saved) : [];
  });

  const [quizAnswers, setQuizAnswers] = useState({});

  const [quizSubmitted, setQuizSubmitted] = useState(() => {
    const saved = localStorage.getItem(
      `quizScore-${id}`
    );

    return saved ? true : false;
  });

  const [quizScore, setQuizScore] = useState(() => {
    const saved = localStorage.getItem(
      `quizScore-${id}`
    );

    return saved
      ? JSON.parse(saved).score
      : 0;
  });

  // -----------------------------
  // Lesson Complete
  // -----------------------------

  const markLessonComplete = () => {
    if (!completedLessons.includes(selectedLesson)) {
      const updatedLessons = [
        ...completedLessons,
        selectedLesson
      ];

      setCompletedLessons(updatedLessons);

      localStorage.setItem(
        `completedLessons-${id}`,
        JSON.stringify(updatedLessons)
      );
    }
  };

  // -----------------------------
  // Quiz Answer
  // -----------------------------

  const handleAnswer = (questionIndex, answer) => {
    setQuizAnswers({
      ...quizAnswers,
      [questionIndex]: answer
    });
  };

  // -----------------------------
  // Submit Quiz
  // -----------------------------

  const submitQuiz = () => {
    let score = 0;

    course.quiz.forEach((question, index) => {
      if (quizAnswers[index] === question.answer) {
        score++;
      }
    });

    const percentage = Math.round(
      (score / course.quiz.length) * 100
    );

    setQuizScore(score);
    setQuizSubmitted(true);

    localStorage.setItem(
      `quizScore-${id}`,
      JSON.stringify({
        score: score,
        total: course.quiz.length,
        percentage: percentage
      })
    );
  };

  // -----------------------------
  // Retry Quiz
  // -----------------------------

  const retryQuiz = () => {
    setQuizAnswers({});
    setQuizSubmitted(false);
    setQuizScore(0);

    localStorage.removeItem(
      `quizScore-${id}`
    );
  };

  // -----------------------------
  // Quiz Passed
  // -----------------------------

  const quizPassed =
    quizSubmitted &&
    quizScore >= Math.ceil(course.quiz.length * 0.6);

  // -----------------------------
  // Progress
  // -----------------------------

  const totalItems =
    course.lessons.length + 1;

  const completedItems =
    completedLessons.length +
    (quizPassed ? 1 : 0);

  const progress = Math.round(
    (completedItems / totalItems) * 100
  );

  // -----------------------------
  // Current Lesson
  // -----------------------------

  const currentLesson =
    course.lessons[selectedLesson];

  // Support both:
  // { title, content }
  // and
  // "Lesson name"

  const lessonTitle =
    typeof currentLesson === "string"
      ? currentLesson
      : currentLesson?.title || "Lesson";

  const lessonContent =
    typeof currentLesson === "string"
      ? `Welcome to ${currentLesson}.

In this lesson, you will learn the important concepts related to this topic.

Read the lesson carefully and complete it before moving to the next lesson.`
      : currentLesson?.content || "No lesson content available.";

  // -----------------------------
  // UI
  // -----------------------------

  return (
    <div className="container py-5">

      {/* Back Button */}

      <Link
        to={`/courses/${id}`}
        className="btn btn-outline-primary mb-4"
      >
        ← Back to Course
      </Link>

      {/* Course Header */}

      <div className="mb-4">

        <h1>
          🎓 {course.title}
        </h1>

        <p className="text-muted">
          Learn this course step by step.
        </p>

      </div>

      {/* Progress */}

      <div className="card shadow-sm p-4 mb-4">

        <div className="d-flex justify-content-between">

          <h5>
            📊 Course Progress
          </h5>

          <strong>
            {progress}%
          </strong>

        </div>

        <div
          className="progress mt-2"
          style={{ height: "15px" }}
        >

          <div
            className="progress-bar"
            style={{
              width: `${progress}%`
            }}
          >
            {progress}%
          </div>

        </div>

        <small className="text-muted mt-2">
          {completedItems} of {totalItems} completed
        </small>

      </div>

      <div className="row">

        {/* =========================
            LEFT SIDE
        ========================== */}

        <div className="col-md-4">

          <div className="card shadow-sm">

            <div className="card-header bg-primary text-white">

              <h5 className="mb-0">
                📚 Course Content
              </h5>

            </div>

            <div className="list-group list-group-flush">

              {course.lessons.map(
                (lesson, index) => {

                  const title =
                    typeof lesson === "string"
                      ? lesson
                      : lesson.title;

                  return (
                    <button
                      key={index}
                      className={`list-group-item list-group-item-action ${
                        selectedLesson === index
                          ? "active"
                          : ""
                      }`}
                      onClick={() =>
                        setSelectedLesson(index)
                      }
                    >

                      {completedLessons.includes(index)
                        ? "✅"
                        : "⭕"}

                      {" "}

                      {index + 1}. {title}

                    </button>
                  );
                }
              )}

              {/* Quiz Button */}

              <button
                className={`list-group-item list-group-item-action ${
                  selectedLesson === "quiz"
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setSelectedLesson("quiz")
                }
              >

                {quizPassed
                  ? "✅"
                  : "📝"}

                {" "}Quiz

              </button>

            </div>

          </div>

        </div>

        {/* =========================
            RIGHT SIDE
        ========================== */}

        <div className="col-md-8">

          {/* =====================
              QUIZ PAGE
          ====================== */}

          {selectedLesson === "quiz" ? (

            <div className="card shadow-sm">

              <div className="card-body p-4">

                <h2>
                  📝 {course.title} Quiz
                </h2>

                <p className="text-muted">
                  Select the correct answer for each question.
                </p>

                <hr />

                {course.quiz.map(
                  (question, index) => (

                    <div
                      key={index}
                      className="mb-4"
                    >

                      <h5>
                        {index + 1}.{" "}
                        {question.question}
                      </h5>

                      <div className="mt-3">

                        {question.options.map(
                          (option, optionIndex) => (

                            <div
                              className="form-check mb-2"
                              key={optionIndex}
                            >

                              <input
                                className="form-check-input"
                                type="radio"
                                name={`question-${index}`}
                                id={`q-${index}-${optionIndex}`}
                                checked={
                                  quizAnswers[index] ===
                                  option
                                }
                                onChange={() =>
                                  handleAnswer(
                                    index,
                                    option
                                  )
                                }
                                disabled={quizSubmitted}
                              />

                              <label
                                className="form-check-label"
                                htmlFor={`q-${index}-${optionIndex}`}
                              >
                                {option}
                              </label>

                            </div>

                          )
                        )}

                      </div>

                    </div>

                  )
                )}

                {/* Submit */}

                {!quizSubmitted ? (

                  <button
                    className="btn btn-primary"
                    onClick={submitQuiz}
                  >
                    Submit Quiz
                  </button>

                ) : (

                  <div>

                    <div
                      className={`alert ${
                        quizPassed
                          ? "alert-success"
                          : "alert-danger"
                      }`}
                    >

                      <h4>
                        Score: {quizScore} /{" "}
                        {course.quiz.length}
                      </h4>

                      <p className="mb-0">

                        {quizPassed
                          ? "🎉 Quiz Passed! Your progress has been updated."
                          : "❌ Quiz Failed. You need at least 60% to pass."}

                      </p>

                    </div>

                    {!quizPassed && (

                      <button
                        className="btn btn-warning"
                        onClick={retryQuiz}
                      >
                        🔄 Retry Quiz
                      </button>

                    )}

                  </div>

                )}

              </div>

            </div>

          ) : (

            /* =====================
               LESSON PAGE
            ====================== */

            <div className="card shadow-sm">

              <div className="card-body p-4">

                {/* Lesson Title */}

                <h2>
                  {lessonTitle}
                </h2>

                <hr />

                {/* Lesson Content */}

                <div
                  style={{
                    lineHeight: "1.8",
                    whiteSpace: "pre-line"
                  }}
                >
                  {lessonContent}
                </div>

                <hr />

                {/* Complete Button */}

                {!completedLessons.includes(
                  selectedLesson
                ) ? (

                  <button
                    className="btn btn-success"
                    onClick={markLessonComplete}
                  >
                    ✓ Mark Lesson Complete
                  </button>

                ) : (

                  <div className="alert alert-success">
                    ✅ Lesson Completed!
                  </div>

                )}

                {/* Previous / Next */}

                <div className="d-flex justify-content-between mt-4">

                  {selectedLesson > 0 ? (

                    <button
                      className="btn btn-outline-secondary"
                      onClick={() =>
                        setSelectedLesson(
                          selectedLesson - 1
                        )
                      }
                    >
                      ← Previous
                    </button>

                  ) : (
                    <div></div>
                  )}

                  {selectedLesson <
                    course.lessons.length - 1 && (

                    <button
                      className="btn btn-primary"
                      onClick={() =>
                        setSelectedLesson(
                          selectedLesson + 1
                        )
                      }
                    >
                      Next Lesson →
                    </button>

                  )}

                  {selectedLesson ===
                    course.lessons.length - 1 && (

                    <button
                      className="btn btn-warning"
                      onClick={() =>
                        setSelectedLesson("quiz")
                      }
                    >
                      Go to Quiz →
                    </button>

                  )}

                </div>

              </div>

            </div>

          )}

        </div>

      </div>

    </div>
  );
}

export default Learning;