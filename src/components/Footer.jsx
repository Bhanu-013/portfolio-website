import "./Footer.css";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <h2>Bhanu Gattham</h2>

      <p>
        Full Stack Developer passionate about building modern web
        applications and continuously learning new technologies.
      </p>

      <div className="footer-icons">
        <a
          href="https://github.com/Bhanu-013"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/bhanu-gattham-438143383"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>

      <a href="#home" className="scroll-top">
        <FaArrowUp />
      </a>

      <p className="copyright">
        © 2026 Bhanu Gattham. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;