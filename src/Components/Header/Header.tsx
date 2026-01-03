import React from "react";
import "./Header.css";

interface HeaderProps {
  name: string;
}

const Header: React.FC<HeaderProps> = ({ name }) => {
  return (
    <section id="header-banner" className="header-banner site-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="header-text">
              <h2>{name}</h2>
              <p>Fullstack developer</p>
              {/* <a href="assets/download/browney.txt" download>
                download resume
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
