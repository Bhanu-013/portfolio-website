import "./Contact.css";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-header">
        <span className="section-tag">GET IN TOUCH</span>

        <h1>Contact Me</h1>

        <p>
          I'm always open to discussing new opportunities, projects,
          collaborations, and innovative ideas. Feel free to connect
          with me through email, GitHub, or LinkedIn.
        </p>
      </div>

      <div className="contact-container">
        {/* Contact Information */}

        <div className="contact-info">
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />

            <a href="mailto:gatthambhanu@gmail.com">
              gatthambhanu@gmail.com
            </a>
          </div>

          <div className="contact-item">
            <FaGithub className="contact-icon" />

            <a
              href="https://github.com/Bhanu-013"
              target="_blank"
              rel="noreferrer"
            >
              github.com/Bhanu-013
            </a>
          </div>

          <div className="contact-item">
            <FaLinkedin className="contact-icon" />

            <a
              href="https://www.linkedin.com/in/bhanu-gattham-438143383"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/bhanu-gattham-438143383
            </a>
          </div>
        </div>

        {/* Contact Form */}

        <form className="contact-form">
          <input
            type="text"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            required
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;