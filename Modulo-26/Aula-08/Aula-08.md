## 📝 Aula 08: TypeScript e o DOM
TypeScript é um superconjunto do JavaScript que adiciona recursos como tipagem estática e orientação a objetos ao JavaScript. Ele também inclui definições de tipo para a API DOM, o que torna mais fácil trabalhar com o DOM em TypeScript.

Aqui está um exemplo básico de como você pode usar TypeScript para manipular o DOM:

```
// 1. Selecionar o elemento div usando a propriedade id
const app = document.getElementById("app");

// 2. Criar um novo elemento <p></p> programaticamente
const p = document.createElement("p");

// 3. Adicionar o conteúdo de texto
p.textContent = "Olá, Mundo!";

// 4. Anexar o elemento p ao elemento div
app?.appendChild(p);
```

Neste exemplo, primeiro selecionamos o elemento ``div`` com ``id`` igual a "app" usando o método ``getElementById`` da interface ``Document``. Em seguida, criamos um novo elemento p usando o método createElement da interface ``Document``. Adicionamos o conteúdo de texto ao elemento p usando a propriedade textContent. Finalmente, anexamos o elemento p ao elemento ``div`` usando o método appendChild da interface Node.

Depois de compilar e executar este código em uma página HTML, o resultado será um novo elemento p contendo o texto ``"Olá, Mundo!"`` anexado ao elemento ``div`` com ``id`` igual a "app".

Em resumo, TypeScript torna mais fácil trabalhar com o DOM, fornecendo definições de tipo para a API DOM e permitindo que você use recursos como tipagem estática e orientação a objetos ao manipular elementos do DOM.

<br>

## ✅ Questionário
Qual é o tipo de evento que temos ao fazer um clique com o mouse?

A- PointerClick

B- MouseEvent

C- MouseClick

D- Click

Resposta: A resposta correta é a letra B, MouseEvent. Quando um usuário clica em um elemento com o mouse, um evento do tipo MouseEvent é disparado. O objeto MouseEvent contém informações sobre o evento, como as coordenadas do clique e qual botão do mouse foi pressionado. Você pode usar essas informações para responder ao evento de clique de maneiras diferentes, dependendo das necessidades do seu aplicativo. 