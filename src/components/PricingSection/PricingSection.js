import React from "react";

function PricingSection() {
  return (
    <section id="pricing" className="section-3 odd plans featured">
      <div className="container">
        <div className="row text-center intro">
          <div className="col-12">
            <h2>Plans and Pricing</h2>
            <p className="text-max-800">
              Choose the ideal plan for what you need. We work with affordable
              prices for all types of pocket.
            </p>
          </div>
        </div>
        <div className="row justify-content-center text-center items">
          <div className="col-12 col-md-6 col-lg-4 align-self-center text-center item">
            <div className="card">
              <i className="icon icon-handbag" />
              <h4>Essential</h4>
              <span className="price">
                <i>$</i>100
              </span>
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center text-left">
                  <span>Update your design once</span>
                  <i className="icon-min m-0 icon-check text-right" />
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center text-left">
                  <span>Brand Identity</span>
                  <i className="icon-min m-0 icon-check text-right" />
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center text-left">
                  <span>social media marketing</span>
                  <i className="icon-min m-0 icon-close text-right" />
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center text-left">
                  <span>Video Editing</span>
                  <i className="icon-min m-0 icon-close text-right" />
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center text-left">
                  <span>Motion Graphics</span>
                  <i className="icon-min m-0 icon-close text-right" />
                </li>
              </ul>
              <a
                href="#contact"
                className="smooth-anchor btn mx-auto primary-button"
              >
                <i className="icon-arrow-right-circle" />
                CHOSE PLAN
              </a>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 align-self-center text-center item">
            <div className="card">
              <i className="icon icon-fire" />
              <h4>Standard</h4>
              <span className="price">
                <i>$</i>300
              </span>
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center text-left">
                  <span>Update your design up-to 3 changes</span>
                  <i className="icon-min m-0 icon-check text-right" />
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center text-left">
                  <span>Brand Identity</span>
                  <i className="icon-min m-0 icon-check text-right" />
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center text-left">
                  <span>social media marketing</span>
                  <i className="icon-min m-0 icon-check text-right" />
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center text-left">
                  <span>Video Editing</span>
                  <i className="icon-min m-0 icon-close text-right" />
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center text-left">
                  <span>Motion Graphics</span>
                  <i className="icon-min m-0 icon-close text-right" />
                </li>
              </ul>
              <a
                href="#contact"
                className="smooth-anchor btn mx-auto primary-button"
              >
                <i className="icon-arrow-right-circle" />
                CHOSE PLAN
              </a>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 align-self-center text-center item">
            <div className="card">
              <i className="icon icon-diamond" />
              <h4>Premium</h4>
              <span className="price">
                <i>$</i>450
              </span>
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center text-left">
                  <span>Update your design up-to 10 changes</span>
                  <i className="icon-min m-0 icon-check text-right" />
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center text-left">
                  <span>Brand Identity</span>
                  <i className="icon-min m-0 icon-check text-right" />
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center text-left">
                  <span>social media marketing</span>
                  <i className="icon-min m-0 icon-check text-right" />
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center text-left">
                  <span>Video Editing</span>
                  <i className="icon-min m-0 icon-check text-right" />
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center text-left">
                  <span>Motion Graphics</span>
                  <i className="icon-min m-0 icon-check text-right" />
                </li>
              </ul>
              <a
                href="#contact"
                className="smooth-anchor btn mx-auto primary-button"
              >
                <i className="icon-arrow-right-circle" />
                CHOSE PLAN
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
