import Header from "./header";

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

export default App;