## 📝 Aula 02: Unidades Flexiveis de medidas
### ✅ Unidades de medida
No CSS temos dois tipos de unidades de medida, as fixas e flexíveis.

As unidades fixas são os pixels (px) e os pontos (pt), um ponto = 1/72 polegadas.

As unidades flexíveis são VW, VH, em, rem e porcentagem.

``VW``: unidade referente à largura do viewport (viewport width), exemplo:
```
{
    width: 50vw;
    height: 50vw;
}
```

No exemplo acima teremos um elemento que terá a largura e altura igual à metade da largura do viewport (50%).

``VH``: praticamente igual ao VW, porém se refere à altura do viewport (viewport height), caso queira que um elemento ocupe 100% da altura da tela, basta usar 100vh como valor para o height.

``EM``: a unidade em faz referência ao font-size do elemento-pai, existe uma convenção que o font-size padrão é de 16px, logo se o elemento estilizado conter a regra: font-size: 1em, e for filho direto da tag body, o valor 1em será igual à 16px. Portanto, 2em = 16 x 2 = 32px.

Caso o elemento esteja dentro de um div que possui a regra font-size: 32px, 2em seria igual à 64px, 32 * x = 64px;

``REM``: muito parecido com a unidade EM, porém se refere ao
elemento raiz (root-em), que é a tagHTML;

``Porcentagem``: quando utilizada no font-size irá se referenciar ao font-size do elemento-pai, quando utilizada no width ou height, será referenciado ao width ou height do elemento-pai.
```
div{
    font-size: 64px;
}

div p {
    font-size: 200%; // 200% de 64px = 128px
    width: 100%; // ocupará a largura total da div
}
```

<br>

### ✅ Questionário
A respeito da unidade de media EM é correto afirmar que

A- 1em sempre vai ser igual à 16px

B- o valor do EM está relacionado à largura do elemento-pai

C- o valor do EM está relacionado ao font-size do elemento-pai

D- o valor do EM está relacionado ao font-size do elemento HTML 

Resposta; letra C