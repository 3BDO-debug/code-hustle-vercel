import React from "react";
import aboutImage from "../../images/about.jpg";
function AboutSection() {
  return (
    <section id="video" className="section-2 highlights image-center">
      <div className="container smaller">
        <div className="row text-center intro">
          <div className="col-12">
            <h2>Institutional</h2>
            <p className="text-max-800">
              Get to know a little of our history and the road we traveled that
              took us to the level we are today.
            </p>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-12 gallery">
            <a
              href="https://www.youtube.com/watch?v=7e90gBu4pas"
              className="square-image d-flex justify-content-center align-items-center"
            >
              <i className="icon bigger icon-control-play" />
              <img src={aboutImage} className="fit-image" alt="about" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
