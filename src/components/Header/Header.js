import React from "react";
import logo from "../../images/logo.png";
function Header() {
  return (
    <header id="header">
      {/* Navbar */}
      <nav
        data-aos="zoom-out"
        data-aos-delay={800}
        className="navbar navbar-expand"
      >
        <div className="container header">
          {/* Navbar Brand*/}
          <a href="/" className="navbar-brand">
            <img
              style={{
                minWidth: "110px",
                maxWidth: "140px",
                maxHeight: "auto",
                minHeight: "110px",
              }}
              className="logo__image"
              src={logo}
              alt="code hustle logo"
            />
          </a>
          {/* Navbar Items */}
          <ul className="navbar-nav items ">
            <li
              className="nav-item"
              
            >
              <a href="#video" className="nav-link smooth-anchor">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#pricing" className="nav-link smooth-anchor">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a href="#portfolio" className="nav-link smooth-anchor">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a href="#partner" className="nav-link smooth-anchor">
                Technologies
              </a>
            </li>
          </ul>
          {/* Navbar Icons */}
          <ul className="navbar-nav icons">
            <li className="nav-item social">
              <a
                href="https://www.linkedin.com/company/justcode4it"
                className="nav-link"
              >
                <i className="icon-social-linkedin" />
              </a>
            </li>
            <li className="nav-item social">
              <a
                href="https://www.facebook.com/CodeHustle"
                className="nav-link"
              >
                <i className="icon-social-facebook" />
              </a>
            </li>
            <li className="nav-item social">
              <a
                href="https://github.com/3BDO-debug?tab=projects"
                className="nav-link"
              >
                <i className="icon-social-github" />
              </a>
            </li>
            <li className="nav-item social">
              <a href="https://www.behance.net/CODE-IT" className="nav-link">
                <i className="icon-social-behance" />
              </a>
            </li>
          </ul>
          {/* Navbar Toggle */}
          <ul className="navbar-nav toggle">
            <li className="nav-item">
              <a
                href="#!"
                className="nav-link"
                data-toggle="modal"
                data-target="#menu"
              >
                <i className="icon-menu m-0" />
              </a>
            </li>
          </ul>
          {/* Navbar Action */}
          <ul className="navbar-nav action">
            <li className="nav-item ml-3">
              <a
                href="#contact"
                className="btn ml-lg-auto primary-button smooth-anchor"
              >
                <i className="icon-speech" />
                CONTACT US
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
