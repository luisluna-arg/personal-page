import Container from "react-bootstrap/Container";
import "./AboutMe.css";

function AboutMe() {
  return (
    <section className="about-me site-section">
      <div className="section-heading text-center">
        <h2>About Me</h2>
      </div>

      <Container>
        <p>
          I hold a Bachelor's degree in Computer Science from the Universidad
          Nacional de la Patagonia San Juan Bosco. My academic background has
          provided me with a solid foundation in computer science.
        </p>
        <p>
          My main area of expertise centers around backend development, with a
          specialization in .NET Core. Over the years, I've gained extensive
          experience working with various relational databases, including
          Oracle, SQL Server, and PostgreSQL. I'm also well-versed in .NET
          Framework 4.x.
        </p>
        <p>
          In addition to backend development, I've contributed to several web
          projects involving JavaScript, CSS, and jQuery. While my primary focus
          has been on backend work, I also have some experience with frontend
          technologies, having dabbled in React and Vue.
        </p>
        <p>
          My professional journey has taken me through different industries,
          including roles in oil and gas companies, a fruit trading company, and
          my current position in the fintech sector. These diverse experiences
          have helped me develop adaptability and problem-solving skills, making
          me a versatile developer
        </p>
      </Container>
    </section>
  );
}

export default AboutMe;
