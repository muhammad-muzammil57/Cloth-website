"use client";

import { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Message sent successfully");
  };

  return (
    <section id="contact" className="w-full px-6 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>

      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-dark shadow-md p-8 rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-md outline-none"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-md outline-none"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
        </div>

        <textarea
          placeholder="Your Message"
          rows="5"
          className="w-full p-3 border rounded-md outline-none mt-6"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
        />

        <button
          type="submit"
          className="mt-6 px-6 py-3 bg-black text-white rounded-md w-full md:w-auto hover:bg-gray-800 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
