## 📝 Aula 01: Introdução
### ✅ Sobre o HTML
O HTML (HyperText Markup Language / Linguagem de marcação de hipertexto) é a linguagem que utilizamos para construir a estrutura das páginas Web, através dessa linguagem inserimos imagens, vídeos, títulos, parágrafos e campos de formulário. O HTML foi criado em meados dos anos 90 por Tim Berners- Lee, juntamente com a World Wide Web.

### ✅ Sintaxe do HTML
O HTML trabalha com algumas palavras-chave que damos o nome de tag, uma tag segue a estrutura:
```
<h1>Olá mundo</h1>
```
- Abertura da tag
- Conteúdo da tag
- Fechamento da tag

### ✅ Estrutura básica do HTML
Um arquivo HTML, também chamado de documento, possui a seguinte estrutura:
```
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Título do documento</title>
</head>
<body>
    ...
</body>
</html>
```

### ``<!DOCTYPE html>``
Nesta primeira tag informamos ao navegador que tipo de arquivo ele está recebendo.


### ``<html lang="pt-BR">``
Aqui estamos abrindo a tag HTML, em lang informamos o idioma que o conteúdo do documento HTML está escrito, esse conteúdo
que está junto com a abertura da tag chamamos de atributo.


### ``<head>``
Dentro da tag head iremos inserir informações que serão interpretadas pelo navegador, mas não será exibidas na tela.


### ``<meta charset="UTF-8">``
Inserimos essa tag dentro de <head>, ela tem a função de informar o navegador como ele deve exibir os caracteres.

### ``<title>``
Na tag title inserimos o título da página, é o nome que será exibido na aba do navegador.

### ``<body>``
A tag body é nosso principal container, dentro dele será escrito todo o conteúdo que poderá ser visível para o usuário, como textos, imagens, vídeos, formulários e outros elementos.

### ✅ Metatags
As metatags são tags, localizadas dentro da tag ``<head>``, utilizadas para passar alguma informação para a tecnologia que irá consumir o conteúdo, por exemplo: a meta tag ``<metacharset=“UTF-8” />`` informa o navegador (tecnologia) qual é o tipo de caracteres que ele deve exibir.

Existem outras tecnologias além do navegador que consegue entender documentos HTML, é o caso dos robôs (crawlers), a ferramenta de busca do Google é um crawler, que sabe lê o HTML de um site e a partir disso categorizar o conteúdo para quando uma pesquisa for feita poder exibir o site no resultado das buscas.

Quando copiamos o link de um site e compartilhamos no Facebook, ali também temos um crawler, alias, o título exibido no Facebook pode ser diferente do título atribuído na tag ``<title>``, para isso utilizamos a metatag:
```
<meta property="og:title“ content=“Título para o Facebook" />
```

<br>

### ✅ Questionário
1- Em qual tag inserimos o conteúdo HTML que será visível ao usuário? 

a- visible

b- main

c- content

d- body 

<br>

Resposta: letra d.