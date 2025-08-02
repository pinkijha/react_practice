import { message } from "antd";
import React from "react";

const ContactForm = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    userMessage: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const thankYouMessage = () => {
    message.success(`Thank you, ${formData.name}, for your message!`);
  };
  const handleOnSubmit = (e) =>{    
          e.preventDefault();
          const { name, email, userMessage } = formData;
          if (!name || !email || !userMessage) {
            message.error("Please fill all the fields");
            return;
          }
          console.log( formData );
  }

  return (
    <div className="">
      <form
        onSubmit={handleOnSubmit}
        className="flex flex-col gap-2 shadow-2xl shadow-gray-500/50 p-4"
      >
        <label className="font-bold">Name</label>
        <input
          value={formData.name}
          onChange={handleChange}
          name="name"
          type="text"
          placeholder="Name"
          className="border border-gray-500 p-1"
        />
        <label className="font-bold">Email</label>
        <input
          value={formData.email}
          onChange={handleChange}
          name="email"
          type="email"
          placeholder="Email"
          className="border border-gray-500 p-1"
        />
        <label className="font-bold">Message</label>
        <textarea
          value={formData.userMessage}
          onChange={handleChange}
          name="userMessage"
          placeholder="Message"
          className="border border-gray-500 p-1"
        ></textarea>
        <button  type="submit" className="bg-blue-600 text-white cursor-pointer">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

