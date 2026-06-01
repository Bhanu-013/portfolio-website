import "./Skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGithub,
  FaNodeJs,
  FaJava,
} from "react-icons/fa";

import {
  SiMongodb,
  SiMysql,
  SiSpringboot,
} from "react-icons/si";

function Skills() {
  const skills = [
    {
      icon: <FaHtml5 />,
      title: "HTML5",
      description: "Building semantic and accessible web structures.",
    },

    {
      icon: <FaCss3Alt />,
      title: "CSS3",
      description: "Responsive layouts and modern UI design.",
    },

    {
      icon: <FaJs />,
      title: "JavaScript",
      description: "Creating dynamic and interactive web applications.",
    },

    {
      icon: <FaReact />,
      title: "React.js",
      description: "Developing reusable components and SPAs.",
    },

    {
      icon: <FaBootstrap />,
      title: "Bootstrap",
      description: "Fast and responsive frontend development.",
    },

    {
      icon: <FaNodeJs />,
      title: "Node.js",
      description: "Server-side application development.",
    },

    {
      icon: <FaJava />,
      title: "Java",
      description: "Object-oriented programming and backend development.",
    },

    {
      icon: <SiSpringboot />,
      title: "Spring Boot",
      description: "Building scalable enterprise applications.",
    },

    {
      icon: <SiMysql />,
      title: "MySQL",
      description: "Relational database design and management.",
    },

    {
      icon: <SiMongodb />,
      title: "MongoDB",
      description: "NoSQL database for modern applications.",
    },

    {
      icon: <FaGithub />,
      title: "Git & GitHub",
      description: "Version control and collaborative development.",
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-header">
        <span className="section-tag">MY SKILLS</span>

        <h1>Technical Skills</h1>

        <p>
          A combination of frontend, backend, database, and development
          tools that I use to build modern, scalable, and user-friendly
          web applications.
        </p>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>

            <h3>{skill.title}</h3>

            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;