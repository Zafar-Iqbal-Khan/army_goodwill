import React, { useState } from "react";
const QueriesSection = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      alert("Query submitted successfully!");
      setFormData({ name: "", email: "", message: "" });
    };
  
    return (
      <section id="queries" className="queries">
        <div className="queries-container">
          <h2>For Any Queries</h2>
          <p>If you have any questions, feel free to reach out to us.</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    );
  };

  export default QueriesSection;