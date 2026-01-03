import React from "react";
import "./Footer.css";

interface FooterProps {
  email: string;
}

const Footer: React.FC<FooterProps> = ({ email }) => {
  return (
    <footer className="site-section site-footer">
      <a href="mailto:email">{email}</a>
    </footer>
  );
}

export default Footer;
