import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <section id="contact">
      <div className="row section-head">
        <div className="two columns header-col">
          <h1>
            <span>Get In Touch.</span>
          </h1>
        </div>

        <div className="ten columns">
          <p className="lead">Contact Me</p>
        </div>
      </div>

      <div className="row">
        <div className="eight columns">
          <form id="contactForm" name="contactForm">
            <fieldset>
              <div>
                <label htmlFor="contactName">
                  Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  defaultValue=""
                  size={35}
                  id="contactName"
                  name="contactName"
                />
              </div>

              <div>
                <label htmlFor="contactEmail">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="text"
                  defaultValue=""
                  size={35}
                  id="contactEmail"
                  name="contactEmail"
                />
              </div>

              <div>
                <label htmlFor="contactSubject">Subject</label>
                <input
                  type="text"
                  defaultValue=""
                  size={35}
                  id="contactSubject"
                  name="contactSubject"
                />
              </div>

              <div>
                <label htmlFor="contactMessage">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  cols={50}
                  rows={15}
                  id="contactMessage"
                  name="contactMessage"
                ></textarea>
              </div>

              <div>
                <button type="submit" className="submit">
                  Submit
                </button>
                <span id="image-loader">
                  <img alt="" src="images/loader.gif" />
                </span>
              </div>
            </fieldset>
          </form>

          <div id="message-warning"> Error boy</div>
          <div id="message-success">
            <i className="fa fa-check"></i>Your message was sent, thank you!
            <br />
          </div>
        </div>

        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
            <h4>Address and Phone</h4>
            <p className="address">
              Parth Lawania
              <br />
              64,Chanakya Puri,Shahganj <br />
              Agra, U.P. 282010
              <br />
              <span>+916397847348</span>
            </p>
          </div>

          <div className="widget widget_tweets"></div>
        </aside>
      </div>
    </section>
  );
};
export default Contact;
