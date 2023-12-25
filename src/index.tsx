import {createRoot} from "react-dom/client";

const TODOS = ["Learn React", "Build Something"]

const Header = (props) => {
    return <div className="header">{props.message}</div>
}

const App = () => {
    return (
        <div className="container">
            <Header message="Naming Contests"/>
        </div>

        /*<div>
            <div style={{color: "green"}} className="container" title="Hello React">
                <h1>Hello React</h1>
            </div>
            {Math.random() > 0.5 && <h2>With JSX</h2>}
            {TODOS.map((element) => {
                return <li>{element}</li>
            })}
        </div>*/
    )
};

const container = document.getElementById("app");
const root = createRoot(container);

root.render(<App/>);