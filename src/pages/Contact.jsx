import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateMailToLink = () => {
    const { name, email, subject, message } = formData;
    const mailto = `mailto:mpattadon.c@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `From: ${name} <${email}>\n\n${message}`
    )}`;
    return mailto;
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white pl-16 flex justify-center">
      <div className="w-[calc(100vw-4rem)] max-w-3xl px-4 py-10">
        {/* Header */}
        <h1 className="text-4xl font-extrabold text-center mb-2">Contact Me</h1>
        <div className="w-full border-t border-gray-600 mb-10"></div>

        {/* Contact Options */}
        <div className="flex flex-col gap-6 mb-12">
          <a
            href="mailto:mpattadon.c@gmail.com"
            className="flex items-center gap-4 hover:text-yellow-400 transition"
          >
            <img src="assets/icons/email.svg" alt="Email" className="w-8 h-8" />
            <span className="text-lg">mpattadon.c@gmail.com</span>
          </a>
          <a
            href="https://github.com/mpattadon"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 hover:text-yellow-400 transition"
          >
            <img src="assets/icons/gh.svg" alt="GitHub" className="w-8 h-8" />
            <span className="text-lg">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/pattadon-chattrakul-74a713273/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 hover:text-yellow-400 transition"
          >
            <img src="assets/icons/linkedin.svg" alt="LinkedIn" className="w-8 h-8" />
            <span className="text-lg">LinkedIn</span>
          </a>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-gray-600 mb-6"></div>

        {/* Contact Form (Fallback: opens default email client) */}
        <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="bg-gray-800 text-white px-4 py-2 rounded border border-gray-600 focus:outline-none focus:border-yellow-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            value={formData.email}
            onChange={handleChange}
            className="bg-gray-800 text-white px-4 py-2 rounded border border-gray-600 focus:outline-none focus:border-yellow-400"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Email Subject"
            value={formData.subject}
            onChange={handleChange}
            className="bg-gray-800 text-white px-4 py-2 rounded border border-gray-600 focus:outline-none focus:border-yellow-400"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="bg-gray-800 text-white px-4 py-2 rounded border border-gray-600 focus:outline-none focus:border-yellow-400"
            required
          ></textarea>
          <a
            href={generateMailToLink()}
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-6 rounded text-center mt-2 w-fit"
          >
            Send Email
          </a>
        </form>
      </div>
    </div>
  );
}
