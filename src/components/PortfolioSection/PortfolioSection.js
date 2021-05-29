import React from "react";
import airbnbImage from "../../images/portfolio/airbnb.png";
import alshorouk from "../../images/portfolio/al-shorouk.png";
import amazon from "../../images/portfolio/amazon.png";
import chatxpress from "../../images/portfolio/Chat-Xpress.png";
import covid19 from "../../images/portfolio/covid-19.png";
import facebook from "../../images/portfolio/facebook.png";
import mymanager from "../../images/portfolio/myManager.png";
import ecomaticcrm from "../../images/portfolio/Ecomatic-CRM.png";
import netflix from "../../images/portfolio/netflix.png";
import tkckitchens from "../../images/portfolio/TKC-Kitchens.png";
import topdental from "../../images/portfolio/top-dental.png";

function PortfolioSection() {
  return (
    <section id="portfolio" className="section-4 offers secondary">
      <div className="container">
        <div className="row text-center intro">
          <div className="col-12">
            <h2>Our Portfolio</h2>
            <p className="text-max-800">
              We have already built amazing things for our customers, in
              addition to cloning the best sites out there.
            </p>
          </div>
        </div>
        <div className="row justify-content-center text-center items">
          <div
            onClick={() => window.open("https://www.chat-xpress.com")}
            style={{ cursor: "pointer" }}
            className="col-12 col-md-6 col-lg-4 item"
          >
            <div className="card featured">
              <h4>Automation Tool</h4>
              <p>
                Chat Xpress is a facebook Full Automation tool for helping you
                manage your facebook pages and make it easy on you for
                interacting with your users
              </p>
              <div className="gallery">
                <a href={chatxpress}>
                  <img
                    style={{ height: "170px", width: "240px" }}
                    src={chatxpress}
                    alt="chat xpress"
                  />
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ cursor: "pointer" }}
            className="col-12 col-md-6 col-lg-4 item"
            onClick={() =>
              window.open("https://mymanagerapp.pythonanywhere.com")
            }
          >
            <div className="card featured">
              <h4>ERP</h4>
              <p>
                myManager is a High Performance Fully Loaded With Feature, ERP
                System. Built On django framework with fully responsive UI
                Components
              </p>
              <div className="gallery">
                <a href={mymanager}>
                  <img
                    style={{ height: "170px", width: "240px" }}
                    src={mymanager}
                    alt="myManager"
                  />
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ cursor: "pointer" }}
            className="col-12 col-md-6 col-lg-4 item"
            onClick={() =>
              window.open("https://ecomaticcrm.pythonanywhere.com")
            }
          >
            <div className="card featured">
              <h4>Custom Built CRM</h4>
              <p>
                Ecomatic-CRM is a High Performance Fully Loaded With Feature,
                CRM System. Built On django framework with fully responsive UI
                Components
              </p>
              <div className="gallery">
                <a href={ecomaticcrm}>
                  <img
                    style={{ height: "170px", width: "240px" }}
                    src={ecomaticcrm}
                    alt="ecomaticcrm"
                  />
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ cursor: "pointer" }}
            className="col-12 col-md-6 col-lg-4 item"
            onClick={() => window.open("https://tkckitchens.co.uk")}
          >
            <div className="card featured">
              <h4>E-commerce</h4>
              <p>
                Clean UI with backend built in django framework with react js
                and payment gateway integration for TKC Kitchens.
              </p>
              <div className="gallery">
                <a href={tkckitchens}>
                  <img src={tkckitchens} alt="E-Commerce" />
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ cursor: "pointer" }}
            className="col-12 col-md-6 col-lg-4 item"
            onClick={() =>
              window.open("https://top-dental-academy.herokuapp.com")
            }
          >
            <div className="card">
              <h4>Educational</h4>
              <p>
                A fully built Educational Platform for Top Dental Academy.
                Custom built authentication system with non downloadable
                content. Built in django and Angular.
              </p>
              <div className="gallery">
                <a href={topdental}>
                  <img src={topdental} alt="Educational" />
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ cursor: "pointer" }}
            className="col-12 col-md-6 col-lg-4 item"
            onClick={() =>
              window.open("https://covid-19-tracker-by-codeit.web.app/")
            }
          >
            <div className="card featured">
              <h4>Health &amp; Medicine</h4>
              <p>A real time Covid-19 tracker. </p>
              <div className="gallery">
                <a href={covid19}>
                  <img src={covid19} alt="Health Medicine" />
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ cursor: "pointer" }}
            className="col-12 col-md-6 col-lg-4 item"
            onClick={() => window.open("https://al-shrouk.com/")}
          >
            <div className="card featured">
              <h4>Landing Page</h4>
              <p>A SEO optimized website for al-shorouk company.</p>
              <div className="gallery">
                <a href={alshorouk}>
                  <img src={alshorouk} alt="Landing Page" />
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ cursor: "pointer" }}
            className="col-12 col-md-6 col-lg-4 item"
            onClick={() =>
              window.open("https://codeit-cloning-netflix.web.app/")
            }
          >
            <div className="card featured">
              <h4>Netflix Clone app</h4>
              <p>
                We love to challenge ourselves and try new ideas, heres a clone
                of the Netflix website using react and firebase.
              </p>
              <div className="gallery">
                <a href={netflix}>
                  <img src={netflix} alt="Netflix Clone app" />
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ cursor: "pointer" }}
            className="col-12 col-md-6 col-lg-4 item"
            onClick={() =>
              window.open("https://code-it-cloning-amazon.herokuapp.com/")
            }
          >
            <div className="card featured">
              <h4>Amazon Clone app</h4>
              <p>
                We love to challenge ourselves and try new ideas, heres a clone
                of the Amazon website with full E-commerce functionality using
                react and firebase.
              </p>
              <div className="gallery">
                <a href={amazon}>
                  <img src={amazon} alt="Amazon Clone app" />
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ cursor: "pointer" }}
            className="col-12 col-md-6 col-lg-4 item"
            onClick={() =>
              window.open("https://code-it-cloning-airbnb.web.app/")
            }
          >
            <div className="card featured">
              <h4>Airbnb Clone app</h4>
              <p>
                We love to challenge ourselves and try new ideas, heres a clone
                of the Airbnb website with booking functionality using react and
                firebase.
              </p>
              <div className="gallery">
                <a href={airbnbImage}>
                  <img src={airbnbImage} alt="Airbnb Clone app" />
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ cursor: "pointer" }}
            className="col-12 col-md-6 col-lg-4 item"
            onClick={() =>
              window.open("https://codeit-cloning-facebook.web.app/")
            }
          >
            <div className="card featured">
              <h4>Facebook Clone app</h4>
              <p>
                We love to challenge ourselves and try new ideas, heres a clone
                of the Facebook website with authentication system using react
                and firebase.
              </p>
              <div className="gallery">
                <a href={facebook}>
                  <img src={facebook} alt="Facebook Clone app" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
