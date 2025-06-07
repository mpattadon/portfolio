import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_3qwp2p6', 'template_jybyomc', form.current, 'Hm4PeUsH9TUDH-ZEO')
      .then(() => {
        setStatus('SUCCESS');
        form.current.reset();
      })
      .catch(() => {
        setStatus('FAILED');
      });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white pl-0 md:pl-16 flex justify-center">
      <div className="w-[calc(100vw-4rem)] py-10 px-4 flex flex-col items-center">
        <div className="w-full max-w-4xl">
          <h1 className="text-4xl font-extrabold text-center mb-2">Contact Me</h1>
          <div className="w-full border-t border-gray-600 mb-10"></div>

          {/* Contact Methods */}
          <div className="flex flex-col gap-6 mb-12">
            <div className="flex items-center gap-4">
              <img src="assets/icons/email.svg" alt="Email" className="w-8 h-8" />
              <a
                href="mailto:mpattadon.c@gmail.com"
                className="text-lg text-blue-400 hover:text-yellow-400"
              >
                mpattadon.c@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <img src="assets/icons/gh.svg" alt="GitHub" className="w-8 h-8" />
              <a
                href="https://github.com/mpattadon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-blue-400 hover:text-yellow-400"
              >
                GitHub
              </a>
            </div>
            <div className="flex items-center gap-4">
              <img src="assets/icons/linkedin.svg" alt="LinkedIn" className="w-8 h-8" />
              <a
                href="https://linkedin.com/in/pattadon-chattrakul-74a713273"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-blue-400 hover:text-yellow-400"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="w-full border-t border-gray-600 mb-6"></div>

          {/* Form Section */}
          <h2 className="text-2xl font-semibold text-center mb-4">Send a Message</h2>
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="bg-gray-800 text-white px-4 py-2 rounded border border-gray-600"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              required
              className="bg-gray-800 text-white px-4 py-2 rounded border border-gray-600"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="bg-gray-800 text-white px-4 py-2 rounded border border-gray-600"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="bg-gray-800 text-white px-4 py-2 rounded border border-gray-600"
            ></textarea>
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-6 rounded w-fit"
            >
              Send Email
            </button>
          </form>

          {/* Status */}
          {status === 'SUCCESS' && <p className="text-green-400 mt-4">Message sent successfully!</p>}
          {status === 'FAILED' && <p className="text-red-400 mt-4">Failed to send message. Try again later.</p>}
        </div>
      </div>
    </div>
  );
}
