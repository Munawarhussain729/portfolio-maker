import React from 'react';
import './Welcome.css'; // Optional CSS for custom styling
import image1 from '../../images/landing-page-1.png';
import image2 from '../../images/landing-page-2.png';
import image3 from '../../images/landing-page-3.png';

const Welcome = () => {
  return (
    <div className="welcome-section container-fluid py-5 m-5 mt-0  ">
      <div className="row align-items-center justify-content-between">
        {/* Left Side: Text Content */}
        <div className="col-md-5  ">
          <h2 className="fw-bold mb-3">Unleash your potential with a custom Portfolio</h2>
          <p className="mb-4">
            Transform your ideas and projects into a stunning portfolio that showcases your creativity
            and hard work with elegance.
          </p>
          <div className="d-flex align-items-center">
            <button className="btn btn-dark me-3 rounded-pill">Get Started</button>
            <a href="#" className="btn btn-outline-secondary rounded-pill">Explore Our Templates</a>
          </div>
        </div>

        {/* Right Side: Image Gallery */}
        <div className="col-lg-5 col-md-4 col-sm-3 d-flex justify-content-end ">
          <div className="image-gallery d-flex flex-column align-items-end me-5">
            {/* Image Thumbnails */}
            <img src={image1} alt="Portfolio Example 1" className="img-thumbnail img1 mb-3 rounded-9 img-fluid " />
            <img src={image2} alt="Portfolio Example 2" className="img-thumbnail img2 mb-3 rounded-9 img-fluid" />
            <img src={image3} alt="Portfolio Example 3" className="img-thumbnail img3 mb-3 rounded-9 img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
