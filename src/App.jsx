import { useState } from "react"

function App(){

  const [nome, setNome] = useState('Camily')

    const Formulario = () => {
        return (
        <div>
          <div>
        <h3>Pizzaria 2C</h3>
        <input
        className="nome"
        onChange={(e)=>{setNome(e.target.value)}}
        nome="nome"
        type="text" />
        <button
        onClick={()=>{alert(nome);}}
        classname="botao">
          CLIQUE AQUI
        </button>
        </div>
  );
  };
    

    
    return (
      <div>
        <h3>Pizzaria 2C</h3>
        <Formulario />
      </div>
    )
}

export default App