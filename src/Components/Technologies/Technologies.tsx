import React from "react";
import { stackTypes } from "../../interfaces/Project";
import DevIcons from "../DevIcons/DevIcons";

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
  "GraphQL"
];

export default () => {
  return (
    <div style={{ position: "fixed", overflowX: "hidden" }}>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "66%",
            background: "rgba(0, 0, 0, 0)",
            padding: "40px 0",
          }}
        >
          <div
            style={{
              width: "75%",
              color: "white",
              textAlign: "center",
              margin: "auto",
            }}
          >
            <h1>Technologies I know of</h1>
            <DevIcons className="devicon-large" stacks={stacks} />
          </div>
        </div>
      </div>
    </div>
  );
};
