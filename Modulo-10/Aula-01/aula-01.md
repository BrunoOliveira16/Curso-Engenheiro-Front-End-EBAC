## 📝 Aula 01: Criando um menu hamburguer e um carousel de imagens
Todo conteúdo deste módulo e das aulas, serão feitas em cima da constução do projeto EBAC Motors, onde irá se implementar a cada aula um novo conteúdo ou feature do projeto.

<br>

### ✅ Plugins jQuery
Nesta primeira aula foi utilizado o plugin para criação de carousel ``slick``.
- Link de referência: https://kenwheeler.github.io/slick/

<br>

### ✅ Como usar o Slick
Primeiramente importe os arquivos do plugin.

Lembre-se de importar o arquivo do jQuery, antes do fechamento da tag body.

### Exemplo com uso da CDN:

Dentro da tag head:
```
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"/>
```

Depois da importação do jQuery:
```
<script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
<script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
<script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
```

Para criar carrossel de slides com o Slick devemos escrever um container e dentro dele inserir as imagens, que serão os slides do carrossel:
```
<!-- Carousel de imagens -->
<div id="carousel-images">
    <img src="./assets/images/slide1.png" alt="imagem do slide do carro da porsche">
    <img src="./assets/images/slide2.png" alt="imagem do slide do carro da BMW">
    <img src="./assets/images/slide3.png" alt="imagem do slide do carro da Ford">
</div>
```

Depois da importação do jQuery, dentro de $(document).ready:
```
$(document).ready(function() {
    $('#carousel-images').slick({
        autoplay: true,
    });
});
```
> A propriedade autoplay com valor de true, faz com que as imagens sejam alternadas de forma automática

<br>

### ✅ Questionário
Qual função utilizamos para inicializar o carousel com o Slick?

A- $("#carousel").slickStart()

B- $("#carousel").slick()

C- $("#carousel").start()

D- $("#carousel").init() 

Resposta: letra B