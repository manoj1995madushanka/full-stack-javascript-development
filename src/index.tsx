import {createRoot} from "react-dom/client";
import App from "./components/app";

const TODOS = ["Learn React", "Build Something"]

const container = document.getElementById("app");
const root = createRoot(container);

root.render(<App/>);