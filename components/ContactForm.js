"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await res.json();

    if (res.status === 200) {
      setStatus("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white"
        />
      </div>
      <div>
        <label htmlFor="email" className="block mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white"
        />
      </div>
      <div>
        <label htmlFor="message" className="block mb-2">
          Message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white"
          rows="4"
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-light-purple hover:bg-neon-purple text-white font-bold py-2 px-4 rounded transition duration-300"
      >
        Send Message
      </button>
      {status && <p className="mt-4 text-light-purple">{status}</p>}
    </form>
  );
}
