import React from "react";

function ContactSection() {
  return (
    <section id="contact" className="section-6 form">
      <div className="container smaller">
        <div className="row text-center intro">
          <div className="col-12">
            <h2>Let's Talk?</h2>
            <p className="text-max-800">
              Talk to one of our consultants today and learn how to start
              leveraging your business.
            </p>
          </div>
        </div>
        <form id="mailForm" className="leverage-simple-form">
          {/* Remove this field if you want to disable recaptcha */}
          <div className="row form-group-margin">
            <div className="col-12 col-md-6 m-0 p-2 input-group">
              <input
                type="text"
                name="client_name"
                className="form-control field-name"
                placeholder="Name"
              />
            </div>
            <div className="col-12 col-md-6 m-0 p-2 input-group">
              <input
                type="email"
                name="client_email"
                className="form-control field-email"
                placeholder="Email"
              />
            </div>
            <div className="col-12 col-md-6 m-0 p-2 input-group">
              <input
                type="text"
                name="client_phone"
                className="form-control field-phone"
                placeholder="Phone"
              />
            </div>
            <div className="col-12 col-md-6 m-0 p-2 input-group">
              <i className="icon-arrow-down mr-3" />
              <select
                name="client_budget"
                className="form-control field-budget"
              >
                <option value selected disabled>
                  What's your budget range?
                </option>
                <option value="$250 — $500">$250 — $500</option>
                <option value="$500 — $800">$500 — $800</option>
                <option value="$800 — $1000">$800 — $1000</option>
                <option value="$2.000 — $5.000">$2.000 — $5.000</option>
                <option value="$5.000 — $10.000">$5.000 — $10.000</option>
                <option value="$10,000+">$10,000+</option>
              </select>
            </div>
            <div className="col-12 m-0 p-2 input-group">
              <textarea
                name="client_message"
                className="form-control field-message"
                placeholder="Message"
                defaultValue={""}
              />
            </div>
            <div className="col-12 col-12 m-0 pl-md-2">
              <span className="form-alert" />
            </div>
            <div className="col-12 input-group m-0 p-2">
              <button
                type="submit"
                onclick="mailSender()"
                id="mailSendButton"
                className="btn primary-button"
              >
                SEND
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
