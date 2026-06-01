import "./Hero.css";
import { motion } from "framer-motion";
import resume from "../assets/resume.pdf";

function Hero() {
  return (
    <section className="hero" id="home">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>
          Hi, I'm <span>Bhanu Gattham</span>
        </h1>

        <h2>Full Stack Developer</h2>

        <p>
          Passionate Full Stack Developer specializing in React.js, Node.js,
          Express.js, MongoDB, and MySQL. I build modern, responsive, and
          user-friendly web applications with clean UI and scalable backend
          solutions.
        </p>

        <div className="hero-buttons">
          <a href="#projects">
            <button>View Projects</button>
          </a>

 <a href="/resume.pdf" download>
  <button className="resume-btn">
    Download Resume
  </button>
</a>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;