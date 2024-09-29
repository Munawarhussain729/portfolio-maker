import React from 'react';
import TeamWork from "./../../assets/team_work.jpg"
const AboutMe = () => {
    return (
        <section id='about' className="bg-white py-16 px-6 md:px-20">
            <div className="max-w-screen-lg mx-auto">
                <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                    About Us
                </h2>
                <div className="flex flex-col md:flex-row items-center">
                    {/* Image Section */}
                    <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-10">
                        <img
                            src={TeamWork}
                            alt="About Me"
                            className="rounded-lg shadow-lg object-cover h-[550px] w-full"
                        />
                    </div>
                    {/* Text Content */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            At <span className='font-semibold text-black'>Portfolio Maker</span>, we believe that showcasing your skills and
                            achievements through a beautifully crafted portfolio can make all
                            the difference in today’s competitive world. Whether you're a designer,
                            developer, writer, or entrepreneur, a well-organized and visually
                            appealing portfolio is essential to stand out.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            Our platform provides an effortless way to create stunning, professional
                            portfolios tailored to your personal or professional needs. With a variety
                            of customizable templates and a user-friendly interface, we make it easy
                            for you to present your work in the best light possible.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Let's collaborate and build something amazing together!
                        </p>
                        {/* Call to Action */}
                        <div className="mt-8">
                            <a
                                href="#contact"
                                className="bg-blue-600 text-white py-3 px-8 rounded-full shadow hover:bg-blue-500 transition duration-300"
                            >
                                Get in Touch
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
