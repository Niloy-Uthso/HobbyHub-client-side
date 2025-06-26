import React from 'react';
import Swal from 'sweetalert2';

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Optional: clear form fields (if needed)
    e.target.reset();

    // Show SweetAlert
    Swal.fire({
      title: 'Message Sent!',
      text: 'Thank you for reaching out. We’ll get back to you soon.',
      icon: 'success',
      confirmButtonColor: '#8b5cf6',
    });
  };

  return (
    <section className="py-16 px-6 md:px-20 bg-gradient-to-br from-pink-100 to-purple-100 dark:from-gray-900 dark:to-gray-800 mt-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-purple-700 dark:text-pink-400 mb-8">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          Got a question, suggestion, or just want to say hello? We’d love to hear from you!
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-purple-700 dark:text-pink-300">Email</h4>
              <p className="text-gray-700 dark:text-gray-300">support@hobbyhub.com</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-purple-700 dark:text-pink-300">Phone</h4>
              <p className="text-gray-700 dark:text-gray-300">+880 123 456 789</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-purple-700 dark:text-pink-300">Location</h4>
              <p className="text-gray-700 dark:text-gray-300">Dhaka, Bangladesh</p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-transparent text-gray-800 dark:text-white focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-transparent text-gray-800 dark:text-white focus:outline-none"
              required
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-transparent text-gray-800 dark:text-white focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
