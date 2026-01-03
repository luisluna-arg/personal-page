import "./ConnectWithMe.css";

function ConnectWithMe({ linkedinURL, githubURL }) {
  return (
    <section className="site-section site-social">
      <h2>Connect with Me</h2>
      <ul>
        <li>
          <div className="icon-text-link">
            <a href={linkedinURL} target="_blank" rel="noreferrer">
              <span className="icon linkedin"></span>
              LinkedIn
            </a>
          </div>
        </li>
        <li>
          <div className="icon-text-link">
            <a href={githubURL} target="_blank" rel="noreferrer">
              <span className="icon github"></span>
              GitHub
            </a>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default ConnectWithMe;
