import React from 'react';

const AboutMe = () => {
    return (
        <section className="bg-white py-16 px-6 md:px-20">
            <div className="max-w-screen-lg mx-auto">
                {/* Section Title */}
                <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                    About Me
                </h2>
                <div className="flex flex-col md:flex-row items-center">
                    {/* Image Section */}
                    <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-10">
                        <img
                            src="https://via.placeholder.com/400"
                            alt="About Me"
                            className="rounded-lg shadow-lg object-cover h-[350px] w-full"
                        />
                    </div>
                    {/* Text Content */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            Hello! I'm a passionate developer dedicated to building responsive
                            and dynamic web experiences. With a keen eye for design and a
                            strong foundation in development, I aim to create projects that
                            not only look great but also function smoothly.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            My journey in web development started with a deep curiosity about
                            how websites work. Today, I work with modern tools and technologies
                            to bring ideas to life and help businesses and individuals present
                            their work in the best light possible.
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
