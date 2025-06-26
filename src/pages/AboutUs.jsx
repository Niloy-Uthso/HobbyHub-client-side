import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-gray-900 dark:to-gray-800 py-16 px-6 md:px-20 mt-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-purple-700 dark:text-pink-400 mb-8">
          About HobbyHub
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-10">
          HobbyHub is your go-to platform for discovering, joining, and creating groups around the hobbies you love.
          Whether you're a painter, a coder, a chef, or a storyteller, there's a place here for you to connect and grow.
        </p>
        
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-purple-600  mb-2">Passion-Driven</h3>
            <p className="text-gray-600 dark:text-gray-200">
              We believe hobbies bring people together. HobbyHub exists to celebrate that joy and creativity.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">Inclusive Community</h3>
            <p className="text-gray-600 dark:text-gray-200">
              All skill levels, backgrounds, and ages are welcome. We value inclusivity and shared passion.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-purple-600 mb-2">Easy to Connect</h3>
            <p className="text-gray-600 dark:text-gray-200">
              Our platform helps you find or build groups effortlessly, both locally and globally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
