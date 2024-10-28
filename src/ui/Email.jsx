import emailjs from "@emailjs/browser";

import { useState } from "react";

const SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
const USER_ID = import.meta.env.VITE_EMAIL_USER_ID;

function Email() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (name === "subject" && value) {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.subject) {
      setError("Please select a massage option.");
      return;
    }
    console.log(formData);
    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID).then(
      (result) => {
        console.log("Email sent successfully:", result.text);
        alert("Email sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      },
      (error) => {
        console.error("Error sending email:", error);
        alert("Failed to send email. Please try again later.");
      }
    );
  };

  return (
    <section>
      <div>
        <form onSubmit={handleSubmit} className="space-y-8 md:px-20">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Name
            </label>
            <input
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Email
            </label>
            <input
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="relative inline-block text-left">
            <select
              id="options"
              name="subject"
              className="block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={formData.subject}
              onChange={handleChange}
              required
            >
              <option value="" disabled hidden>
                Choose Massage Option
              </option>
              <option value="ayurveda">Ayurveda - 120 min</option>
              <option value="90 min">Deep Bliss - 90 min</option>
              <option value="75 min">Focused Serenity - 75 min</option>
              <option value="60 min">Essential Relaxation - 60 min</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Additional Notes
            </label>
            <textarea
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
            />
          </div>
          <div>
            <button
              type="submit"
              className={`px-4 py-2 bg-cPurple-600 text-white rounded-md focus:outline-none hover:bg-cPurple-300`}
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Email;
