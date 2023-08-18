## 📝 Aula 06: CSS Modules
CSS Modules é uma técnica para escrever CSS que permite encapsular estilos em componentes específicos, evitando conflitos de nomes de classes e vazamento de estilos para outros componentes. Com CSS Modules, cada arquivo CSS é tratado como um módulo e os nomes das classes são transformados em identificadores únicos durante a compilação.

Aqui está um exemplo de como podemos usar CSS Modules em um componente ``Botao``:
```
import React from 'react';
import styles from './Botao.module.css';

function Botao(props) {
  return (
    <button className={styles.botao}>
      {props.children}
    </button>
  );
}
```

Neste exemplo, estamos criando um componente ``Botao`` que renderiza um elemento ``<button>`` com uma classe ``botao``. Em vez de usar uma string literal para o nome da classe, estamos importando um objeto ``styles`` do arquivo ``Botao.module.css`` e acessando a classe ``botao`` como uma propriedade desse objeto. Isso garante que o nome da classe seja transformado em um identificador único durante a compilação, evitando conflitos com outras classes com o mesmo nome.

O arquivo ``Botao.module.css`` pode conter estilos normais de CSS, como mostrado abaixo:
```
.botao {
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
}
```

Quando o componente ``Botao`` é renderizado, ele aplica esses estilos ao elemento ``<button>``, mas os estilos são encapsulados no componente e não afetam outros elementos na página.

<br>

## ✅ Questionário
Como criamos um arquivo de estilos CSS modules?

A- nomeando o arquivo com o sufixo com module.css

B- nomeando o arquivo normalmente, com o sufixo .css

C- nomeando o arquivo com o sufixo modulecss

D- nomeando o arquivo com o sufixo m.css

Resposta:  Para criar um arquivo de estilos CSS Modules, devemos nomear o arquivo com o sufixo .module.css. Isso significa que a resposta correta é a letra A: “nomeando o arquivo com o sufixo com module.css”.