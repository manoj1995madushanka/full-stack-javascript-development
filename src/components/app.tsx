import Header from "./header";
import {useState} from "react";

const App = () => {
    const [counter,setCounter] = useState(0);

    return (
        <div className="container">
            <Header message="Naming Contests"/>
            <button onClick={()=>{setCounter(counter+1)}}>{counter}</button>
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