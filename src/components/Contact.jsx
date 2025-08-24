import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_pfq47lc",    
        "template_rg3tggl",    
        form.current,
        "8emLqWqMUoWcLN65S"      
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          setStatus("❌ Failed to send message. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-8 py-9 "
    >
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-4 border-b-4 border-teal-400 inline-block">
        Contact Me
      </h2>
      <p className="text-gray-400 mb-12 text-center max-w-xl">
        Got a question, an idea, or just want to say hi? Feel free to contact me
        I usually respond within an hour.
      </p>

      {/* Form */}
      <form ref={form} onSubmit={sendEmail} className="w-full max-w-lg space-y-6">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-4 bg-gray-900 rounded-2xl border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-4 bg-gray-900 rounded-2xl border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          className="w-full p-4 bg-gray-900 rounded-2xl border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
        ></textarea>
        <button
          type="submit"
          disabled={loading}
          className="px-8 py-4 bg-teal-400 text-black font-bold rounded-full hover:bg-teal-300 transition-all duration-300 shadow-lg shadow-teal-400/50 disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      {/* Status Message */}
      {status && (
        <p className="mt-4 text-center text-sm text-gray-300">{status}</p>
      )}

      {/* Social Links */}
      <div className="flex space-x-6 mt-12 text-2xl">
        <a
          href="https://github.com/ash-1231"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-teal-400 transition-colors"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/ashutosh-aditya-265886282/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-teal-400 transition-colors"
        >
          <FaLinkedin />
        </a>
       
      </div>
    </section>
  );
};

export default Contact;
