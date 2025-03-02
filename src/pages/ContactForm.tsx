import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Linkedin, Twitter, Github } from "lucide-react";

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    emailjs
      .send(
        "service_6gmavfj",
        "template_bl51dap",
        {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "LSGs6pppt9lJ-xW9x"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" });
        },
        (error) => {
          alert(`Failed to send message: ${error.text}`);
        }
      );
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[url('/images/img1.jpg')] px-4">
      <div className="relative items-center  w-full max-w-4xl bg-gray-800 rounded-lg p-10 flex flex-col md:flex-row">
        {/* Left Section - Contact Details */}
        <div className="md:w-1/2 bg-gray-700 p-8 rounded-lg flex flex-col">
          {/* Title */}
          <h2 className="text-3xl font-bold text-white">Let's Connect</h2>
          <p className="text-gray-300 mt-8"> Feel free to reach out via this form or email me directly. I will get back to you as soon as possible 😊</p>

          {/* Contact Details */}
          <div className="mt-6 space-y-4">
            <div className="flex items-center text-gray-300 hover:text-green-400 transition duration-300">
              <Mail className="text-green-400 mr-4" />
              <span>joycejattane@gmail.com</span>
            </div>
            {/* <div className="flex items-center text-gray-300 hover:text-green-400 transition duration-300">
              <Phone className="text-green-400 mr-4" />
              <span>+1 (800) 000-0000</span>
            </div> */}
          </div>

          {/* Social Icons - FIXED to stay at bottom */}
          <div className="mt-auto flex space-x-4 pt-8">
            <a href="#" className="text-gray-400 hover:text-green-400 transition duration-300">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition duration-300">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition duration-300">
              <Github size={24} />
            </a>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="md:w-1/2 bg-gray-800 p-8 rounded-lg shadow-lg w-full">
          <h2 className="text-2xl font-bold text-white text-center mb-6">Contact Form</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Inputs */}
            <div className="flex space-x-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-1/2 bg-gray-700 border border-gray-600 rounded-md py-3 px-4 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 transition duration-300 hover:border-green-500"
                placeholder="First Name"
                required
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-1/2 bg-gray-700 border border-gray-600 rounded-md py-3 px-4 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 transition duration-300 hover:border-green-500"
                placeholder="Last Name"
                required
              />
            </div>

            {/* Email Input */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-gray-700 border border-gray-600 rounded-md py-3 px-4 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 transition duration-300 hover:border-green-500"
              placeholder="Your Email"
              required
            />

            {/* Subject Input */}
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-gray-700 border border-gray-600 rounded-md py-3 px-4 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 transition duration-300 hover:border-green-500"
              placeholder="Subject"
            />

            {/* Message Input */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full bg-gray-700 border border-gray-600 rounded-md py-3 px-4 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 transition duration-300 hover:border-green-500"
              placeholder="Your Message"
              required
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-md transition duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
