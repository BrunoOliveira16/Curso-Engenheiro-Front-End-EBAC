import Perfil from "./components/Perfil";
// import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";
import { useState } from "react";

function App() {
  const [ nomeUsuario, setNomeUsuario ] = useState("");
  // const [ formularioEstaVisivel, setFormularioEstaVisivel ] = useState(true);

  return (
    <>
      <input type='text' onBlur={e => setNomeUsuario(e.target.value)}/>
      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}
      {/* {formularioEstaVisivel && (
        <Formulario />
      )}
      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)}>Toggle form</button> */}
    </>
  )
}

export default App
