import { useState } from "react"

function App(){

  const [nome, setNome] = useState('Camily')

    return (
      <div>
        <h3>Pizzaria 2C</h3>
        <input
        className="nome"
        onChange={(e)=>{setNome(e.target.value)}}
        nome="nome"
        type="text" />
        <button
        onClick={()=>{alert(nome)}}
        classname="botao">
          CLIQUE AQUI
        </button>
      </div>
    )
}

export default App