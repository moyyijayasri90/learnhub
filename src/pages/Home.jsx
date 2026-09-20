import React from "react";
import { Link } from "react-router-dom";
import "../Home.css";
function Home() {
  return (
    <div className="home-page">

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Learn Skills. Build Your Future.</h1>

          <p>
            Explore high-quality courses and learn new skills
            from anywhere, anytime.
          </p>

          <Link to="/courses" className="hero-button">
            Explore Courses
          </Link>
        </div>
      </section>


      {/* Categories Section */}
      <section className="categories-section">
        <h2>Explore Categories</h2>

        <div className="category-grid">

          <div className="category-card">
            <div className="category-icon">💻</div>
            <h3>Web Development</h3>
            <p>
              Learn HTML, CSS, JavaScript, React and more.
            </p>
          </div>

          <div className="category-card">
            <div className="category-icon">🐍</div>
            <h3>Programming</h3>
            <p>
              Learn Python, Java and programming fundamentals.
            </p>
          </div>

          <div className="category-card">
            <div className="category-icon">📊</div>
            <h3>Data Science</h3>
            <p>
              Learn data analysis, machine learning and AI.
            </p>
          </div>

          <div className="category-card">
            <div className="category-icon">📱</div>
            <h3>App Development</h3>
            <p>
              Build modern mobile applications.
            </p>
          </div>

        </div>
      </section>


      {/* Why Choose Section */}
      <section className="why-section">
        <h2>Why Choose LearnHub?</h2>

        <div className="why-grid">

          <div className="why-card">
            <div className="why-icon">🎓</div>
            <h3>Quality Courses</h3>
            <p>
              Learn from carefully designed courses with
              practical examples.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">🚀</div>
            <h3>Learn at Your Pace</h3>
            <p>
              Study whenever you want and learn at your own speed.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">💡</div>
            <h3>Practical Learning</h3>
            <p>
              Build projects and improve your real-world skills.
            </p>
          </div>

        </div>
      </section>


      {/* Call To Action */}
      <section className="cta-section">
        <h2>Ready to Start Learning?</h2>

        <p>
          Choose a course and start building your skills today.
        </p>

        <Link to="/courses" className="cta-button">
          Start Learning
        </Link>
      </section>

    </div>
  );
}

export default Home;