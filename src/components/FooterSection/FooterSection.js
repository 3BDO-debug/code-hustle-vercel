import React from "react";

function FooterSection() {
  return (
    <footer className="odd">
      {/* Footer [links] */}
      <section id="footer" className="footer">
        <div className="container">
          <div className="row items footer-widget">
            <div className="col-12 col-lg-3 p-0">
              <div className="row">
                <div className="branding col-12 p-3 text-center text-lg-left item">
                  <div className="brand">
                    <a href="/" className="logo">
                      Code Hustle.
                    </a>
                  </div>
                  <p>
                    Authentic and innovative.
                    <br />
                    Built to the smallest detail
                    <br />
                    with a focus on usability
                    <br />
                    and performance.
                  </p>
                  <ul className="navbar-nav social share-list mt-0 ml-auto">
                    <li className="nav-item">
                      <a
                        href="https://www.linkedin.com/company/justcode4it"
                        className="nav-link"
                      >
                        <i className="icon-social-linkedin ml-0" />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="https://www.facebook.com/CodeHustle"
                        className="nav-link"
                      >
                        <i className="icon-social-facebook ml-0" />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="https://github.com/3BDO-debug?tab=projects"
                        className="nav-link"
                      >
                        <i className="icon-social-github ml-0" />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="https://www.behance.net/CODE-IT"
                        className="nav-link"
                      >
                        <i className="icon-social-behance" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-9 p-0">
              <div className="row">
                <div className="col-12 col-lg-4 p-3 text-center text-lg-left item">
                  <h4 className="title">Get in Touch</h4>
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a
                        href="https://wa.me/+201017003476"
                        className="nav-link"
                      >
                        <i className="icon-phone mr-2" />
                        +20 101 700 347 6
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="mailto:rooted39@gmail.com" className="nav-link">
                        <i className="icon-envelope mr-2" />
                        rooted39@gmail.com
                      </a>
                    </li>
                    {/* hide till we grow
                                            
                                             <li class="nav-item">
                                                <a href="#" class="nav-link">
                                                    <i class="icon-location-pin mr-2"></i>
                                                    Office Street, 123
                                                </a>
                                             </li>
                                        
                                        */}
                    <li className="nav-item">
                      <a
                        href="#contact"
                        className="mt-4 mr-auto ml-auto ml-lg-0 btn dark-button smooth-anchor"
                      >
                        <i className="icon-speech" />
                        SEND A MESSAGE
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-lg-4 p-3 text-center text-lg-left item">
                  <h4 className="title">Our Services</h4>
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a href="!?#" className="nav-link">
                        Website Development
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="!?#" className="nav-link">
                        Building Applications
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="!?#" className="nav-link">
                        SEO &amp; Digital Marketing
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="!?#" className="nav-link">
                        Branding and Identity
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="!?#" className="nav-link">
                        Digital Images &amp; Videos
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-lg-4 p-3 text-center text-lg-left item">
                  <h4 className="title">Popular Tags</h4>
                  <a href="!?#" className="badge tag">
                    Mobile
                  </a>
                  <a href="!?#" className="badge tag">
                    Development
                  </a>
                  <a href="!?#" className="badge tag">
                    Technology
                  </a>
                  <a href="!?#" className="badge tag">
                    App
                  </a>
                  <a href="!?#" className="badge tag">
                    Design
                  </a>
                  <a href="!?#" className="badge tag">
                    Marketing
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Copyright */}
      <section id="copyright" className="p-3 copyright">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 p-3 text-center text-lg-left">
              <p>
                Enjoy the low price. We are tracking any intention of piracy.
              </p>
              {/*
                                Suggestion: Replace the text above with a description of your website.
                             */}
            </div>
            <div className="col-12 col-md-6 p-3 text-center text-lg-right">
              <p>
                © 2020 All rights reserved{" "}
                <a href="/" target="_blank">
                  Code Hustle.
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default FooterSection;
