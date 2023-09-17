import "./Footer.css";

function Footer({ email }) {
  return (
    <footer className="App-section App-footer">
      <a href="mailto:email">{email}</a>
    </footer>
  );
}

export default Footer;
