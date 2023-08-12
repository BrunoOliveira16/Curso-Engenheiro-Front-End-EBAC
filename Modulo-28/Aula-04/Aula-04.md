## 📝 Aula 04: useEffect
O useEffect é um hook do React que permite executar efeitos colaterais em componentes funcionais. Ele recebe dois argumentos: uma função de efeito, que contém o código que deve ser executado, e um array de dependências, que especifica quando o efeito deve ser executado. Quando passamos um dado dentro do array de dependências, o efeito será executado sempre que esse dado mudar.

Aqui está um exemplo de como podemos criar um useEffect exclusivo para um dado:

```
import React, { useState, useEffect } from 'react';

function MeuComponente() {
  const [nome, setNome] = useState('');

  useEffect(() => {
    console.log('O nome mudou:', nome);
  }, [nome]);

  return (
    <input
      value={nome}
      onChange={event => setNome(event.target.value)}
    />
  );
}
```

Neste exemplo, estamos criando um componente MeuComponente que contém um input para o usuário digitar seu nome. O valor do input é armazenado na variável de estado nome. Quando o usuário digita no input, a função setNome é chamada para atualizar o valor de nome. Além disso, estamos usando o hook useEffect para criar um efeito que é executado sempre que o valor de nome muda. Passamos a variável nome dentro do array de dependências do useEffect, fazendo com que o efeito seja executado sempre que nome mudar. Quando o efeito é executado, ele exibe uma mensagem no console informando que o nome mudou.

<br>

## ✅ Questionário
Como podemos criar um useEffect exclusivo para um dado?

A- Passando o dado dentro do array de dependências que é passado como segundo argumento do useEffect.

B- Passando como argumento da função do useEffect: useEffect((nome) ⇒ { console.log(”o nome mudou”); })

C- Não é possível

D- Passando como segundo argumento do useEffect: useEffect(() ⇒ { console.log(”o nome mudou”); }, nome)

Resposta: Para criar um useEffect exclusivo para um dado, podemos passar o dado dentro do array de dependências que é passado como segundo argumento do useEffect. Isso significa que a resposta correta é a letra A: “Passando o dado dentro do array de dependências que é passado como segundo argumento do useEffect”.