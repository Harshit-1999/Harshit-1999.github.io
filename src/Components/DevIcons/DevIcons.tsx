import React from "react";
import { ReactComponent as JSIcon } from "../../Stack/javascript.svg";
import { ReactComponent as GoIcon } from "../../Stack/go.svg";
import { ReactComponent as CSSIcon } from "../../Stack/css3.svg";
import { ReactComponent as DockerIcon } from "../../Stack/docker.svg";
import { ReactComponent as HerokuIcon } from "../../Stack/heroku.svg";
import { ReactComponent as HtmlIcon } from "../../Stack/html5.svg";
import { ReactComponent as MongoIcon } from "../../Stack/mongodb.svg";
import { ReactComponent as NodejsIcon } from "../../Stack/node-dot-js.svg";
import { ReactComponent as PythonIcon } from "../../Stack/python.svg";
import { ReactComponent as ReactIcon } from "../../Stack/react.svg";
import { ReactComponent as SaasIcon } from "../../Stack/sass.svg";
import { ReactComponent as BabelIcon } from "../../Stack/babel.svg";
import { ReactComponent as GitIcon } from "../../Stack/git.svg";
import { ReactComponent as GitHubIcon } from "../../Stack/github.svg";
import { ReactComponent as GithubActionsIcon } from "../../Stack/githubactions.svg";
import { ReactComponent as GitlabIcon } from "../../Stack/gitlab.svg";
import { ReactComponent as LinuxIcon } from "../../Stack/linux.svg";
import { ReactComponent as NextJSIcon } from "../../Stack/next-dot-js.svg";
import { ReactComponent as PostgreSQLIcon } from "../../Stack/postgresql.svg";
import { ReactComponent as ReduxIcon } from "../../Stack/redux.svg";
import { ReactComponent as RustIcon } from "../../Stack/rust.svg";
import { ReactComponent as TypeScriptIcon } from "../../Stack/typescript.svg";
import { ReactComponent as UbuntuIcon } from "../../Stack/ubuntu.svg";
import { ReactComponent as VercelIcon } from "../../Stack/vercel.svg";
import { ReactComponent as WebAssemblyIcon } from "../../Stack/webassembly.svg";
import { ReactComponent as VueIcon } from "../../Stack/vue.svg";
import { ReactComponent as GsapIcon } from "../../Stack/gsap.svg";
import {ReactComponent as GraphQLIcon} from "../../Stack/graphql.svg"
import {ReactComponent as DjangoIcon} from "../../Stack/django.svg"
import {ReactComponent as RabbitMQIcon} from "../../Stack/rabbitmq.svg"
import { stackTypes } from "../../interfaces/Project";

export default ({
  stacks,
  className,
}: {
  stacks: Array<stackTypes>;
  className: string;
}) => {
  const rest = {
    className,
  };
  const iconList: Record<stackTypes, any> = {
    Go: <GoIcon fill="#00ADD8" {...rest} />,
    JavaScript: <JSIcon fill="#F7DF1E" {...rest} />,
    Python: <PythonIcon fill="#3776AB" {...rest} />,
    CSS: <CSSIcon fill="#1572B6" {...rest} />,
    HTML: <HtmlIcon fill="#E34F26" {...rest} />,
    Vue: <VueIcon fill="#41B883" {...rest} />,
    React: <ReactIcon fill="#61DAFB" {...rest} />,
    NodeJS: <NodejsIcon fill="#339933" {...rest} />,
    GraphQL:<GraphQLIcon fill="#e535ab" {...rest}/>,
    Django: <DjangoIcon fill="#609b11" {...rest} />,
    Docker: <DockerIcon fill="#2496ED" {...rest} />,
    Mongo: <MongoIcon fill="#47A248" {...rest} />,
    Gsap: <GsapIcon fill="#228B22" {...rest} />,
    Saas: <SaasIcon fill="#CC6699" {...rest} />,
    Heroku: <HerokuIcon fill="#430098" {...rest} />,
    RabbitMQ:< RabbitMQIcon fill="#E6600D" {...rest}/>,
    Babel: <BabelIcon fill="#F9DC3E" {...rest} />,

    Git: <GitIcon fill="#F05032" {...rest} />,
    Github: <GitHubIcon fill="#fefefe" {...rest} />,
    GithubActions: <GithubActionsIcon fill="#2088FF" {...rest} />,
    Gitlab: <GitlabIcon fill="#FCA121" {...rest} />,

    Linux: <LinuxIcon fill="#FCC624" {...rest} />,

    NextJS: <NextJSIcon fill="#fff" {...rest} />,
    PostgreSQL: <PostgreSQLIcon fill="#336791" {...rest} />,
    Redux: <ReduxIcon fill="#764ABC" {...rest} />,
    Rust: <RustIcon fill="#fefefe" {...rest} />,

    TypeScript: <TypeScriptIcon fill="#007ACC" {...rest} />,
    Ubuntu: <UbuntuIcon fill="#E95420" {...rest} />,
    Vercel: <VercelIcon fill="#fffe" {...rest} />,
    WebAssembly: <WebAssemblyIcon fill="#654FF0" {...rest} />,
  };

  const icons = stacks.map((s) => iconList[s as stackTypes]);
  return <div style={{ margin: "0 10px" }}>{icons}</div>;
};
