import React from "react";

function FeaturesSection() {
  return (
    <section id="features" className="section-1 offers featured">
      <div className="container">
        <div className="row justify-content-center text-center items">
          <div className="col-12 col-md-6 col-lg-4 item">
            <div className="card no-hover">
              <i className="icon icon-globe" />
              <h4>Website Pro</h4>
              <p>
                We build professional responsive websites optimized for the most
                popular search engines.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 item">
            <div className="card no-hover">
              <i className="icon icon-pencil" />
              <h4>Design</h4>
              <p>
                We are specialized in brand identity, website production, social
                media, graphic design, motion graphics, and video editing.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 item">
            <div className="card no-hover">
              <i className="icon icon-screen-smartphone" />
              <h4>Mobile Apps</h4>
              <p>
                Follow the global trend and create your revolutionary mobile app
                built with the best technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
