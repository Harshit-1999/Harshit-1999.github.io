import { projectType } from "../interfaces/Project";

export const projects = [
  {
    title: "GOCHAT",
    content: `A realtime private chat application`,
    link: "https://gochat.parthlaw.tech",
    image: "Bako.png",
    stack: ["JavaScript", "React", "Go", "Vercel","RabbitMQ"],
  } as projectType,
  {
    title: "Vocalo",
    content: `A collaborative dictionary application`,
    link: "https://vocalo.vercel.app",
    image: "Vocalo.png",
    stack: ["JavaScript", "React", "GraphQL", "NodeJS", "Vercel"],
  } as projectType,
  {
    title: "Managero",
    content: `A secure and encrypted password manager`,
    link: "https://managero.vercel.app",
    image: "Managero.png",
    stack: ["JavaScript", "React", "NodeJS", "Vercel"],
  } as projectType,
];
