import { useEffect, useState } from "react";

const Formulario = () => {
    const [ materiaA, setMateriaA ] = useState(0);
    const [ materiaB, setMateriaB ] = useState(0);
    const [ materiaC, setMateriaC ] = useState(0);
    const [ nome, setNome ] = useState('');

    useEffect(() => {
        console.log("O componente iniciou")

        return() => {
            console.log("O componente finalizou")
        }
    }, []);

    const alterarNome = (event) => {
        setNome(event.target.value)
    }

    const resultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if(media >= 7) {
            return(
                <p>Olá {nome} você foi aprovado!</p>
            )
        } else {
            return(
                <p>Desculpe {nome} mais você foi reprovado!</p>
            )
        }
    }

    return (
        <>
            <input 
                type="text" 
                onChange={alterarNome}
            />
            <input 
                type="number" 
                placeholder="Nota matéria A" 
                onChange={event => setMateriaA(parseInt(event.target.value))}
            />
            <input 
                type="number" 
                placeholder="Nota matéria B" 
                onChange={event => setMateriaB(parseInt(event.target.value))}
            />
            <input 
                type="number" 
                placeholder="Nota matéria C" 
                onChange={event => setMateriaC(parseInt(event.target.value))}
            />
            {resultado()}
        </>
    );
};

export default Formulario;