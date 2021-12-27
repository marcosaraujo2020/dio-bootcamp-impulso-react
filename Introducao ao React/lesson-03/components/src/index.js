import React from "react"
import ReactDOM from "react-dom"
import Button from './Button'
import ComponenteA from "./ComponenteA"
import ComponenteB from "./ComponenteB"
import "./styles.css"


function soma(a, b){
    alert(a + b)
}

function App() {
    return (
        <div className="App">
            Hello world
            <Button onClick ={() => soma(10, 35)} name='Marcos' />
            <ComponenteA>
                <ComponenteB>
                    <Button onClick ={() => soma(25, 75)} name='Christiany' />
                </ComponenteB>
            </ComponenteA>
        </div>
    )
}

const rootElement =document.getElementById("root")
ReactDOM.render(<App />, rootElement)