## 📝 Aula 01: Viewport
### ✅ A metatag viewport
No HTML temos a metatag viewport, localizada dentro da tag head:
```
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
**Podemos entender o viewport como toda a área visível do navegador que é ocupada pela aplicação front-end**, ou seja, todo o espaço de conteúdo, sem a barra de endereço, favoritos ou qualquer outro elemento do sistema.

<br>

### Valores para metatag viewport
No atributo contente podemos inserir as regras:
- ``Width``: para definir a largura do viewport;
- ``Height``: para definir a altura do viewport;
- ``Initial-scale``: para definir a escala inicial do viewport;
- ``User-scalable``: para definir se será possível ou não aplicar zoom a página;
- ``Minimum|maximum-scale``: para definir a escala máxima e mínima da página.

<br>

Os valores para width e height são especificados em valores numéricos ou utilizando a palavra device-width/device-height, que será referente a dimensão do dispositivo.
```
<metaname=“viewport”content=“width=device-width” />
<meta name=“viewport” content=“width=device-320” />
```
No último exemplo a largura do viewport foi limitada em 320 pixels, mesmo que a resolução do dispositivo seja maior, o recomendado é utilizar o valor device-width para aproveitar toda a resolução do dispositivo.

User-scalable: utilizamos os valores 0 e 1, ou no e yes
```
<meta name=“viewport” content=“user-scalable=yes” />
```

Initial-scale, maximum-scalee minimum-scale: utilizamos os valores entre 0 e 1, podendo utilizar valores fracionados:
```
<meta name=“viewport” content=“initial-scale=1” />
```

Também é possível combinar as propriedade dentro da metatagviewport:
```
<meta name=“viewport” content=“initial-scale=1, user-scalable=no” />
```

<br>

### ✅ Questionário
Qual propriedade utilizamos na metatag viewport para limitar o zoom do usuário?

A- max-scale=0.7

B- maximum-scale=0.7

C- max-zoom=0.7;

D- maximum-zoom=0.7 

Resposta: Letra B