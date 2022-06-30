import React from "react";
import DevIcons from "../DevIcons/DevIcons";
import { stackTypes } from "../../interfaces/Project";
const stacks: Array<stackTypes> = [
  "JavaScript",
  "TypeScript",
  "React",
  "NextJS",
  "Redux",
  "Mongo",
  "GithubActions",
  "Babel",
  "CSS",
  "Docker",
  "Git",
  "Github",
  "Gitlab",
  "Go",
  "Heroku",
  "Linux",
  "NextJS",
  "NodeJS",
  "PostgreSQL",
  "Python",
  "Rust",
  "Saas",
  "Ubuntu",
  "Vercel",
  "WebAssembly",
  "Vue",
  "GraphQL",
  "Django"
];

const Resume = () => {
  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              <b>IIIT Gwalior</b>
              <br />
              <span>Bachelor of Technology in IT (Second Year Student) </span>
            </div>
          </div>
        </div>
      </div>
      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p>
            <b>Web development:</b>HTML,CSS,Javascript,React Js,Vue Js,Next
            Js,Node Js,Express Js,GraphQl,Golang
            <br />
            <b>Cloud Platforms:</b>Amazon Web Services
          </p>

          <div className="bars">
            <ul className="skills">
              <strong style={{ fontSize: "30px" }}>
                Technologies I am Aware Of
              </strong>
            </ul>
          </div>
        </div>
      </div>
      <DevIcons className="devicon-large" stacks={stacks} />
    </section>
  );
};
export default Resume;
