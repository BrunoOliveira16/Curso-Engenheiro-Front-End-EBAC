## 📝 Aula 03: Estado e eventos
Estado e eventos são conceitos importantes no React. O estado é uma maneira de armazenar e gerenciar dados que podem mudar ao longo do tempo. Os eventos são ações que o usuário pode realizar, como clicar em um botão ou digitar em um campo de texto, que podem alterar o estado do componente.

Um exemplo comum de uso do estado é um contador. Podemos criar um componente ``Contador`` que armazena o valor atual do contador em seu estado e atualiza esse valor quando o usuário clica em um botão. Aqui está um exemplo de como isso pode ser feito usando o hook ``useState`` e ``props``:

```
import React, { useState } from 'react';

function Contador(props) {
  const [count, setCount] = useState(props.initialCount);

  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>
        Clique aqui
      </button>
    </div>
  );
}
```

Neste exemplo, estamos usando o hook ``useState`` para criar uma variável de estado count e uma função ``setCount`` para atualizá-la. O valor inicial do contador é passado como propriedade ``initialCount`` para o componente ``Contador``. Quando o usuário clica no botão, a função ``setCount`` é chamada com o novo valor do contador, atualizando o estado do componente e fazendo com que ele seja renderizado novamente com o novo valor.

<br>

## ✅ Questionário
Como adicionamos um evento a um elemento com React?

A- Com props passamos dados de um componente para outro e com state criamos dados mutáveis dentro do componente

B- Props estão disponíveis no React e só temos o state no VueJS

C- Props podem ser mudadas pelo componente que a recebe e o state não pode ser alterado

D- Não há

Resposta: Alternativa A