import "./Projects.css";

function Projects() {
const projects = [
  {
    title: "Event Management System",
    description:
      "A full-stack event management platform built using Spring Boot, Thymeleaf, MySQL, and Bootstrap. Features include event creation, registration, attendee management, QR code generation, and admin dashboard.",
    github: "https://github.com/Bhanu-013/event-management-system",
    demo: "",
  },

  {
    title: "Personal Portfolio Website",
    description:
      "A professional portfolio website developed using React.js to showcase technical skills, projects, resume, and contact information with a modern responsive design.",
    github: "https://github.com/Bhanu-013/portfolio-website",
    demo: "https://portfolio-website-two-phi-34.vercel.app",
  },
];

  return (
    <section className="projects" id="projects">
      <div className="projects-header">
        <span className="section-tag">MY WORK</span>

        <h1>Projects</h1>

        <p>
          Real-world applications developed using modern web technologies,
          showcasing my skills in full-stack development, database
          management, and responsive user interface design.
        </p>
      </div>

      <div className="project-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.title}</h2>

            <p>{project.description}</p>

            <div className="project-buttons">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                <button>GitHub</button>
              </a>

  {project.demo && (
  <a
    href={project.demo}
    target="_blank"
    rel="noreferrer"
  >
    <button className="demo-btn">
      Live Demo
    </button>
  </a>
)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;