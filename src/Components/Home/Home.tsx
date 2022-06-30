import React from "react";
import logo from "../../images/logo.png";
import resume from "./ParthResume.pdf"
const Home = () => {
  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={logo}
            alt="Parth Lawania Profile Pic"
          />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>

          <p>
            My name Parth Lawania, I am a Full Stack React developer and Cloud Engineer.Currently I am a second year student at IIIT Gwalior.
          </p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>Parth Lawania</span>
                <br />
                <span>
                  Chanakya Puri
                  <br />
                  Agra U.P., 282010
                </span>
                <br />
                <span>+916397847348</span>
                <br />
                <span>parthlaw24@gmail.com</span>
              </p>
            </div>
            <div className="columns download">
              <p>
                <a href='/resume.pdf' className="button" target="_blank">
                  <i className="fa fa-download"></i>Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
