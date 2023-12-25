import {createRoot} from "react-dom/client";

const TODOS = ["Learn React", "Build Something"]

const App = () => {
    return (
        <div>
            <div style={{color: "green"}} className="container" title="Hello React">
                <h1>Hello React</h1>
            </div>
            {Math.random() > 0.5 && <h2>With JSX</h2>}
            {TODOS.map((element) => {
                return <li>{element}</li>
            })}
        </div>
    )
};

const container = document.getElementById("app");
const root = createRoot(container);

root.render(<App/>);