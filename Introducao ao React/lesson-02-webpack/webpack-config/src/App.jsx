import React from "react";

const buttonA = <button>Histórico dos Clientes</button>
const buttonB = <button>Segundo Botão</button>



const App = () => {
    return (
        <div>
            <p>Digital Innovation One</p>
            <p>Bem vido a nossa aula</p>
            <p>Marcos Araújo Silva</p>
            {buttonA}
            {buttonB}
        </div>
    );
};

export default App;