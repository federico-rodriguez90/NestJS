// import { age, isValid, name } from "./bases/01-types";
// import { pikachu } from "./bases/02-objetcts";
// import { charmander } from "./bases/03-classes";
// import { charmander } from "./bases/04-injection";
// import { charmander } from "./bases/05-decorators";
import { charmander } from "./bases/06-decorators2";
import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <h1>Vite + TypeScript</h1>
  <h1>Hello ${charmander.name}</h1>
    <a href="https://vitejs.dev/features.html" target="_blank">
      Documentation
    </a>   
`;
