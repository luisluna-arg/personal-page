import "./Footer.css";

function Footer({ email }) {
  return (
    <footer className="site-section site-footer">
      <a href="mailto:email">{email}</a>
    </footer>
  );
}

export default Footer;
