## 📝 Aula 03: Breakpoints
### ✅ Media Queries e Breakpoints
Com as media queries podemos escrever regras CSS que serão aplicáveis a partir de determinada resolução de tela.

Para esta determinada resolução damos o nome de breakpoint (ponto de quebra).

Escrevemos uma media query no CSS da seguinte forma:
```
@media screenand(max-width: 640px) {
    body { background-color: red; }
}
```

O código CSS dentro do bloco @media será válido até uma resolução com largura de 640px, até esse ponto o elemento body terá a cor de fundo vermelha.

Podemos adicionar outras condicionais à uma media query:
```
@media screenand(max-width: 640px) and(orientation: landspace) {
    body { background-color: red; }
}
```

No exemplo acima adicionamos mais uma condição, a orientação do dispositivo, que deverá estar na horizontal (landscape), para que a media query seja válida.

A condição de orientação pode receber os valores: landscape (horizontal) e Portrait (retrato).

Além do max-width podemos utilizar o min-width, max-height ou min-height:
```
@media screenand(min-width: 768px) and(max-height: 800px) {
    ...
}
```

<br>

### ✅ Questionário
Qual propriedade não é válida para utilizarmos como condição para uma media query?

A- min-width

B- max-width

C- localization

D- orientation 

Resposta: letra C