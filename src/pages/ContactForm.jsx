import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    userMessage: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Clear error as user types
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const { name, email, userMessage } = formData;
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(email.trim())) {
      newErrors.email = "Invalid email format";
    }

    if (!userMessage.trim()) {
      newErrors.userMessage = "Message is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSuccessMessage(`Thank you, ${name.trim()}, for your message!`);
      console.log("Form submitted:", {
        name: name.trim(),
        email: email.trim(),
        message: userMessage.trim(),
      });
      setFormData({ name: "", email: "", userMessage: "" });
    } else {
      setSuccessMessage(""); // Clear success if errors occur
    }
  };

  return (
    <div>
      {successMessage && (
        <p className="text-green-600 font-medium mb-2" role="alert">
          {successMessage}
        </p>
      )}

      <form
        onSubmit={handleOnSubmit}
        className="flex flex-col gap-2 shadow-2xl shadow-gray-500/50 p-4"
      >
        <label htmlFor="name" className="font-bold">Name :</label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="border border-gray-500 p-1"
        />
        {errors.name && (
          <p className="text-red-600 font-medium" role="alert">{errors.name}</p>
        )}

        <label htmlFor="email" className="font-bold">Email :</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="border border-gray-500 p-1"
        />
        {errors.email && (
          <p className="text-red-600 font-medium" role="alert">{errors.email}</p>
        )}

        <label htmlFor="userMessage" className="font-bold">Message :</label>
        <textarea
          id="userMessage"
          name="userMessage"
          value={formData.userMessage}
          onChange={handleChange}
          placeholder="Message"
          className="border border-gray-500 p-1"
        />
        {errors.userMessage && (
          <p className="text-red-600 font-medium" role="alert">{errors.userMessage}</p>
        )}

        <button
          type="submit"
          className="bg-blue-600 text-white cursor-pointer p-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
