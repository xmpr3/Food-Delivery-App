import React from "react";

const ContactUs = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">Contact Us</h1>

      <p className="text-lg text-center text-gray-700 mb-12">
        Have any questions or inquiries? Feel free to reach out to us. We'd love to hear from you!
      </p>

      <div className="bg-white shadow-lg p-8 rounded-xl">
        <form action="#" method="POST">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm font-semibold text-gray-600 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="John Doe"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-semibold text-gray-600 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="youremail@example.com"
              />
            </div>
          </div>

          <div className="flex flex-col mt-6">
            <label htmlFor="message" className="text-sm font-semibold text-gray-600 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="5"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your message..."
            ></textarea>
          </div>

          <div className="mt-6 text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
