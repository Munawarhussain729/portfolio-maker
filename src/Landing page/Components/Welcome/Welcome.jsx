import React from 'react';
import './Welcome.css';  // Optional CSS for custom styling

const Welcome = () => {
  return (
    <div className="welcome-section container-fluid py-5">
      <div className="row align-items-center">
        {/* Left Side: Text Content */}
        <div className="leftside container col-md-5 ms-5 col-lg-5">
          <h2 className="fw-bold mb-3">Unleash your potential with a custom Portfolio</h2>
          <p className="mb-4">
            Transform your ideas and projects into a stunning portfolio that showcases your creativity
            and hard work with elegance.
          </p>
          <div className="d-flex align-items-center">
            <button className="btn btn-dark me-3">Get Started</button>
            <a href="#" className="btn btn-outline-secondary">Explore Our Templates</a>
          </div>
        </div>

        {/* Right Side: Image Gallery */}
        <div className=" container col-md-6 d-flex justify-content-center">
          <div className="image-gallery">
            {/* Image Thumbnails */}
            <img src="/path/to/image1.jpg" alt="Portfolio Example 1" className="img-thumbnail" />
            <img src="/path/to/image2.jpg" alt="Portfolio Example 2" className="img-thumbnail ms-3" />
            <img src="/path/to/image3.jpg" alt="Portfolio Example 3" className="img-thumbnail ms-3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
