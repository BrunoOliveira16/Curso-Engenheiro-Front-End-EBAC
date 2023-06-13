## 📝 Aula 04: Módulos
No SASS podemos escrever os estilos da página em vários arquivos, modularizando o projeto.

Para isso utilizamos a palavra reservada @use e importamos o arquivo com uma porção de código SASS num arquivo principal.

Exemplo:
```
// reset.scss 
* { 
    margin: 0; 
    padding: 0; 
    box-sizing: border-box;
}

// main.scss
@use "reset" // sem a extensão .scss
@use "secoes/produtos" // para acessar uma pasta
```

<br>

### ✅ Questionário
Como podemos importar arquivos no SASS?

A- require 'arquivo.sass'

B- @use 'arquivo'

C- import 'arquivo.sass'

D- _ @require 'arquivo' 

Resposta: Letra B