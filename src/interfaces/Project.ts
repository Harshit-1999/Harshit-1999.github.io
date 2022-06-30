export interface projectType {
  title: string;
  content: string;
  link: string;
  image: string;
  stack: Array<stackTypes>;
  direction?: "row" | "row-reverse";
}

export type stackTypes =
  | "Go"
  | "JavaScript"
  | "Python"
  | "CSS"
  | "HTML"
  | "React"
  | "NodeJS"
  | "Docker"
  | "Mongo"
  | "Saas"
  | "Heroku"
  | "Babel"
  | "Git"
  | "Github"
  | "Gitlab"
  | "Linux"
  | "NextJS"
  | "PostgreSQL"
  | "Python"
  | "Redux"
  | "Rust"
  | "TypeScript"
  | "Ubuntu"
  | "Vercel"
  | "WebAssembly"
  | "Gsap"
  | "Vue"
  | "GithubActions"
  | "GraphQL"
  | "Django"
  |"RabbitMQ";
