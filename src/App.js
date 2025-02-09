
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import img1 from "./images/image1.jpg";
import img2 from "./images/image2.jpg";
import img3 from "./images/image3.jpg";


function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MissionSection />
      <ProgramsSection />
      <ContactSection />
      <QueriesSection />
      <Footer />
    </div>
  );
}

const Navbar = () => (
  <nav className="navbar">
    <h1>Army Goodwill School</h1>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#programs">Programs</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
);

const HeroSection = () => {
  const images = [
    img1, img2, img3
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <section className="hero">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`slide-${index}`} className="slide-image" />
          </div>
        ))}
      </Slider>
      <div className="hero-text">
        <h2>Welcome to Army Goodwill School</h2>
        <p>Empowering young minds with knowledge, discipline, and patriotism.</p>
        {/* <button>Discover More</button> */}
      </div>
    </section>
  );
};

const AboutSection = () => (
  <section id="about" className="about">
    <h2>About Us</h2>
    <p>
      Established with a mission to provide quality education, Army Goodwill School is dedicated to
      nurturing young minds with a strong foundation in academics, discipline, and leadership.
    </p>
    <p>
      Our school aims to empower students to become responsible citizens and future leaders,
      fostering a culture of excellence and moral values.
    </p>
  </section>
);

const MissionSection = () => (
  <section className="mission">
    <h2>Our Mission & Core Values</h2>
    <p>
      To provide high-quality education in a disciplined environment that fosters leadership, integrity, and patriotism.
    </p>
    <ul>
      <li>📚 **Academic Excellence** – Encouraging intellectual curiosity and lifelong learning.</li>
      <li>🛡️ **Discipline & Integrity** – Shaping individuals with strong moral character.</li>
      <li>🤝 **Respect & Responsibility** – Instilling a sense of duty towards society and the nation.</li>
      <li>🌍 **Diversity & Inclusion** – Embracing all backgrounds, ensuring equal opportunities for all.</li>
    </ul>
  </section>
);

const ProgramsSection = () => (
  <section id="programs" className="programs">
    <h2>Our Programs & Facilities</h2>
    <div className="program-list">
      <div className="program">
        <h3>📖 Academics</h3>
        <p>CBSE/State Board curriculum with a focus on conceptual learning.</p>
      </div>

      <div className="program">
        <h3>⚽ Sports & Fitness</h3>
        <p>Outdoor and indoor sports activities to ensure a healthy lifestyle.</p>
      </div>

      <div className="program">
        <h3>🎨 Arts & Culture</h3>
        <p>Music, drama, dance, and fine arts to develop creative skills.</p>
      </div>

      <div className="program">
        <h3>🖥️ Smart Classrooms</h3>
        <p>Technology-integrated learning with digital resources.</p>
      </div>

      <div className="program">
        <h3>📚 Library & Labs</h3>
        <p>State-of-the-art library and well-equipped science & computer labs.</p>
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section id="contact" className="contact">
    <h2>Contact Us</h2>
    <p>📍 <strong>Location:</strong> Army Goodwill School, [Handwara, J&K, India]</p>
    <p>📞 <strong>Phone:</strong> +91 98765 XXXXX</p>
    <p>📧 <strong>Email:</strong> contact@army-goodwill-school.com</p>

    <h3>Follow Us</h3>
    <p>
      🌍 <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> |
      🐦 <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> |
      📸 <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
    </p>
  </section>
);


// const QueriesSection = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Query submitted successfully!");
//     setFormData({ name: "", email: "", message: "" });
//   };

//   return (
//     <section id="queries" className="queries">
//       <h2>For Any Queries</h2>
//       <p>If you have any questions, feel free to contact us.</p>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Your Name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Your Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//         <textarea
//           name="message"
//           placeholder="Your Message"
//           value={formData.message}
//           onChange={handleChange}
//           required
//         ></textarea>
//         <button type="submit">Submit</button>
//       </form>
//     </section>
//   );
// };


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



const Footer = () => (
  <footer className="footer">
    <p>&copy; {new Date().getFullYear()} Army Goodwill School. All Rights Reserved.</p>
  </footer>
);

export default App;
