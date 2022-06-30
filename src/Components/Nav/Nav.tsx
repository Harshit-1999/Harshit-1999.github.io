import React, { useEffect, useState } from "react";
function useTypeWord(words: string) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < words.length) {
      setTimeout(() => {
        setIndex((state) => state + 1);
      }, 30);
    }
  }, [index, words.length]);

  return words.substring(0, index);
}

const Nav = () => {
  const intro = useTypeWord(`I'm Parth Lawania`);
  return (
    <header id="home">
      <nav id="nav-wrap" style={{ backgroundColor: "#696969", opacity: "0.5" }}>
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              Resume
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              Works
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">{intro}</h1>
          <h3>
            I'm a<span> Web Developer and Cloud Engineer</span>
          </h3>
          <hr />
          <ul className="social">
            <li key="facebook">
              <a href="https://facebook.com/parthlaw">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li key="instagram">
              <a href="https://www.instagram.com/the_killer_hulk">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
            <li key="linkedin">
              <a href="https://www.linkedin.com/in/parthlaw">
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
            <li key="github">
              <a href="https://github.com/parthlaw">
                <i className="fa fa-github"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};
export default Nav;
