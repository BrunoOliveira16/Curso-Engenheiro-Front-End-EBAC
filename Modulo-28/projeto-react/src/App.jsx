import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import { useState } from "react";

function App() {
  const [ formularioEstaVisivel, setFormularioEstaVisivel ] = useState(true);

  return (
    <>
      <h1>Módulo React</h1>
      <Perfil nome="Bruno" endereco="https://avatars.githubusercontent.com/u/103857382?v=4"/>
      {formularioEstaVisivel && (
        <Formulario />
      )}
      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)}>Toggle form</button>
    </>
  )
}

export default App
