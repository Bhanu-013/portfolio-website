import "./About.css";
import myphoto from "../assets/myphoto.jpeg";
import resume from "../assets/resume.pdf";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="about-image">
          <img src={myphoto} alt="Bhanu Gattham" />
        </div>

        <div className="about-content">
          <span className="section-tag">ABOUT ME</span>

          <h1>Full Stack Developer</h1>

          <p>
            I am Bhanu Gattham, a passionate Full Stack Developer focused on
            building modern, responsive, and user-friendly web applications.
            Skilled in React.js, Node.js, Express.js, MongoDB, and MySQL, I
            enjoy creating efficient digital solutions and continuously
            enhancing my expertise through real-world projects and emerging
            technologies.
          </p>

         <a href={resume} download="Bhanu_Gattham_Resume.pdf">
  <button className="about-btn">
    Download Resume
  </button>
</a>
        </div>

      </div>
    </section>
  );
}

export default About;