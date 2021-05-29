import React from "react";
import adobeillustrator from "../..//images/technologies/adobe-illustrator.svg";
import adobepremierecc from "../..//images/technologies/adobe-premiere-cc.svg";
import adobexd from "../..//images/technologies/adobe-xd.svg";
import adobe from "../..//images/technologies/adobe.svg";
import django from "../..//images/technologies/django(1).svg";
import firebase from "../..//images/technologies/firebase.svg";
import flutter from "../..//images/technologies/flutter.svg";
import mongodb from "../..//images/technologies/mongodb.svg";
import nodejs from "../..//images/technologies/nodejs.svg";
import react from "../../images/technologies/react.svg";
import redux from "../..//images/technologies/redux.svg";
import aws from "../../images/technologies/aws.svg";
import angular from "../../images/technologies/angular.svg";
function TechnologiesSection() {
  return (
    <section id="partner" className="section-5 odd logos featured">
      <div className="overflow-holder">
        <div className="container">
          <div className="swiper-container min-slider">
            <div
              className="swiper-wrapper"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div className="swiper-slide slide-center item">
                <img
                  src={django}
                  style={{ width: "140px" }}
                  className="fit-image "
                  alt="django "
                />
              </div>
              <div className="swiper-slide slide-center item">
                <img
                  style={{ width: "140px" }}
                  src={react}
                  className="fit-image "
                  alt="react"
                />
              </div>
              <div className="swiper-slide slide-center item">
                <img src={redux} className="fit-image w-85" alt="redux" />
              </div>
              <div className="swiper-slide slide-center item">
                <img src={nodejs} className="fit-image w-85" alt="nodejs" />
              </div>
              <div className="swiper-slide slide-center item">
                <img
                  src="https://image.flaticon.com/icons/png/512/603/603197.png"
                  className="fit-image w-85"
                  alt="api"
                />
              </div>
              <div className="swiper-slide slide-center item">
                <img src={aws} className="fit-image w-85" alt="aws" />
              </div>
              <div className="swiper-slide slide-center item">
                <img src={firebase} className="fit-image w-85" alt="firebase" />
              </div>
              <div className="swiper-slide slide-center item">
                <img src={angular} className="fit-image w-85" alt="angular" />
              </div>
              <div className="swiper-slide slide-center item">
                <img
                  style={{ width: "55px" }}
                  src={flutter}
                  className="fit-image w-85"
                  alt="flutter"
                />
              </div>
              <div className="swiper-slide slide-center item">
                <img src={mongodb} className="fit-image w-85" alt="mongodb" />
              </div>
              <div className="swiper-slide slide-center item">
                <img
                  style={{ width: "55px" }}
                  src={adobexd}
                  className="fit-image w-85"
                  alt="adobexd"
                />
              </div>
              <div className="swiper-slide slide-center item">
                <img
                  style={{ width: "55px" }}
                  src={adobeillustrator}
                  className="fit-image w-85"
                  alt="adobeillustrator"
                />
              </div>
              <div className="swiper-slide slide-center item">
                <img
                  style={{ width: "55px" }}
                  src={adobepremierecc}
                  className="fit-image w-85"
                  alt="adobepremiere"
                />
              </div>
              <div className="swiper-slide slide-center item">
                <img
                  style={{ width: "55px" }}
                  src={adobe}
                  className="fit-image w-85"
                  alt="adobe"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechnologiesSection;
