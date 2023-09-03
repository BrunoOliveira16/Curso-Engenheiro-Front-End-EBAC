## 📝 Aula 01: O problema de prop drilling
O problema de prop drilling ocorre quando um componente precisa passar dados para outro componente que está muito abaixo na hierarquia de componentes. Isso pode levar a uma situação em que os dados são passados através de vários componentes intermediários que não precisam desses dados, apenas para chegar ao componente que realmente precisa deles. Isso pode tornar o código confuso e difícil de manter, já que os componentes intermediários precisam lidar com props que não são relevantes para eles. Uma solução comum para o problema de prop drilling é usar um gerenciador de estado global, como o Redux, para armazenar os dados e torná-los acessíveis a todos os componentes que precisam deles. Isso evita a necessidade de passar os dados através de vários componentes intermediários e torna o código mais limpo e fácil de manter.

<br>

## ✅ Questionário
Como utilizamos props no React?

A- Utilizando o prefixo r- antes do nome do atributo

B- Utilizando os dois pontos : antes do nome do atributo

C- Utilizando o prefixo v- antes do nome do atributo

D- Através de atributos nas tags

Resposta: No React, utilizamos props para passar dados de um componente pai para um componente filho. Isso é feito através de atributos nas tags (opção D). Por exemplo, se quisermos passar uma propriedade chamada nome de um componente Pai para um componente Filho.