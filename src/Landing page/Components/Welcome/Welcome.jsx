import React from 'react';
import image1 from '../../images/landing-page-1.png';
import image2 from '../../images/landing-page-2.png';
import image3 from '../../images/landing-page-3.png';
import AboutMe from '../About/AboutUs';

const Welcome = () => {
  return (
    <div className="bg-gray-100 py-20 px-10">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 gap-x-3 md:grid-cols-2   items-center justify-between">
        <div className="w-full ">
          <h2 className="text-3xl font-bold mb-6">Unleash your potential with a custom Portfolio</h2>
          <p className="mb-6">
            Transform your ideas and projects into a stunning portfolio that showcases your creativity
            and hard work with elegance.
          </p>
          <div className="flex items-center space-x-4">
            <button className="bg-black text-white py-2 px-6 rounded-full">Get Started</button>
            <a href="#" className="border border-gray-400 py-2 px-6 rounded-full text-gray-600">Explore Our Templates</a>
          </div>
        </div>

        <div className="w-full h-[400px] grid grid-cols-2  gap-x-2 ">
          <div>
            <img
              src={image1}
              alt="Portfolio Example 1"
              className="rounded-lg "
            />
            <img
              src={image2}
              alt="Portfolio Example 2"
              className="rounded-lg mt-2 "
            />
          </div>
          <div>
            <img
              src={image3}
              alt="Portfolio Example 3"
              className="rounded-lg w-full max-h-[400px]"
            />
          </div>
          {/* <img
              src={image2}
              alt="Portfolio Example 2"
              className="rounded-lg border-2 border-gray-300 shadow-md w-[250px] h-[170px] relative z-10"
              style={{ top: '300px', left: '55%' }}
            />
            <img
              src={image3}
              alt="Portfolio Example 3"
              className="rounded-lg border-2 border-gray-300 shadow-md w-[250px] h-[350px] relative z-30"
              style={{ top: '120px', left: '77%' }}
            /> */}
          {/* </div> */}
        </div>
      </div><AboutMe/>
    </div>
  );
};

export default Welcome;
