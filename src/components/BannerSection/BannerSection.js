import React from "react";
import bannerVideo from "../../videos/banner-video.mp4";
function BannerSection() {
  return (
    <section id="slider" className="hero p-0">
      <div className="swiper-container no-slider animation slider-h-100">
        <div className="swiper-wrapper">
          {/* Item 1 */}
          <div className="swiper-slide slide-center">
            <video
              type="video/mp4"
              className="full-image"
              data-mask={70}
              src={bannerVideo}
              autoPlay
              muted
              loop
            />

            <div className="slide-content row">
              <div className="col-12 d-flex inner">
                <div className="center align-self-center text-center">
                  <h1
                    data-aos="zoom-out-up"
                    data-aos-delay={400}
                    className="title effect-static-text"
                  >
                    WE DEVELOP <br />
                    WEB &amp; MOBILE APPS
                  </h1>
                  <a
                    href="#contact"
                    data-aos="zoom-out-up"
                    data-aos-delay={1200}
                    className="smooth-anchor ml-auto mr-auto mt-5 btn primary-button"
                  >
                    <i className="icon-cup" />
                    GET STARTED
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-pagination" />
      </div>
    </section>
  );
}

export default BannerSection;
