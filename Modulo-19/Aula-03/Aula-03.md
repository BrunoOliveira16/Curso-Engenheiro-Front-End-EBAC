## 📝 Aula 03: Introdução ao BEM 
### BEM
BEM –Block Element Modifier– é uma metodologia para escrita de código de estilos.

O BEM propõe separarmos os estilos entre:

- Blocos: são containers, grandes ou pequenos, por exemplo: .form, .profile;

- Elementos: elementos dentro dos containers, como: .form__input, .profile__avatar;

- Modificadores: são estados, que alteram um elemento, por exemplo: .form__input—invalid, .profile__avatar_online.

O BEM nos sugere separar um bloco de um elemento utilizando o underline duas vezes:
```
BLOCO__ELEMENTO
```

Já para os modificadores usamos o traço duas vezes:
```
BLOCO__ELEMENTO—MODIFICADOR
```

Além disso temos algumas recomendações como:

- Não utilizar o nome das tags para estilização, por exemplo: div.input;

- Não utilizar Ids para estilizar um elemento, por exemplo: #form__input

<br>

### Link

- https://getbem.com/introduction/


<br>

## ✅ Questionário
Sobre o BEM é incorreto afirma que

A- nos auxilia a criar código CSS escalável e com melhor manutenibilidade

B- é uma metodologia para escrita de código de estilos

C- signfica Block Element Modifier

D- é um framework css 

Resposta: A afirmação incorreta é D- é um framework css. BEM (Block Element Modifier) é uma metodologia para escrita de código de estilos, não um framework CSS. Ela nos auxilia a criar código CSS escalável e com melhor manutenibilidade.