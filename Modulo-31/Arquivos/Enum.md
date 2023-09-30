## Enum
Os Enums são uma das poucas funcionalidades do TypeScript que não são uma extensão de tipo do JavaScript. Eles permitem que um desenvolvedor defina um conjunto de constantes nomeadas. Usar enums pode facilitar a documentação da intenção ou criar um conjunto de casos distintos.

O TypeScript fornece enums numéricos e baseados em strings.

- ``Enums Numéricos``: Podemos começar com enums numéricos, que são provavelmente mais familiares se você estiver vindo de outras linguagens. Um enum pode ser definido usando a palavra-chave enum. Aqui, Up teria o valor 0, Down teria 1, etc. Esse comportamento de autoincremento é útil para casos em que podemos não nos importar com os valores dos membros em si, mas nos importamos que cada valor seja distinto dos outros valores no mesmo enum.
```
enum Direction {
  Up,
  Down,
  Left,
  Right,
}
```

- ``Enums de String``: Os enums de string são um conceito semelhante, mas têm algumas diferenças sutis de tempo de execução conforme documentado abaixo. Em um enum de string, cada membro tem que ser inicializado constantemente com um literal de string ou com outro membro do enum de string.
```
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
```

Embora os enums de string não tenham comportamento de autoincremento, eles têm o benefício de que eles “serializam” bem. Em outras palavras, se você estivesse depurando e tivesse que ler o valor de tempo de execução de um enum numérico, o valor é frequentemente opaco - ele não transmite nenhum significado útil por si só (embora o mapeamento reverso possa frequentemente ajudar). Os enums de string permitem que você dê um valor significativo e legível quando seu código é executado, independentemente do nome do membro do enum em si.