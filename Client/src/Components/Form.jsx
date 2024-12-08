// import React from 'react';

import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 my-6 w-10/12  md:w-1/2 mx-auto"> 
      <div className="text-center font-bold text-3xl">
        <h1>Contact us</h1>
      </div>
      <input
        type="text"
        placeholder="Your Name"
        className="border w-full p-2 rounded"
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Your Email"
        className="border w-full p-2 rounded"
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <textarea
        placeholder="Your Message"
        className="border w-full p-2 rounded"
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      ></textarea>
      <button type="submit" className="bg-sky-400 text-white px-4 py-2 rounded">
        Send Message
      </button>
    </form>
  );
};

export default Form;
