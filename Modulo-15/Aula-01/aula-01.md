## 📝 Aula 01: Introdução ao Node e NPM
Neste módulo conhecemos o SASS que é um pré-processador de CSS.

Com ele podemos utilizar recursos como variáveis, modularização e funções para escrever estilos para as páginas Web.

### Requisitos
Para utilizar o SASS precisamos ter o NodeJS e o pacote SASS instalados.

### Instalando o Node.js
- Acesse o site oficial do Node.js: https://nodejs.org/en

- Baixe o arquivo do Windows Installer (.msi) da versão mais recente do Node.js.

- Execute o arquivo .msi e siga as instruções na tela para concluir a instalação.

Depois de instalar o Node.js, você pode verificar se ele foi instalado corretamente abrindo o Prompt de Comando e digitando ``node -v`` ou ``node --version``. Isso deve mostrar a versão do Node.js que você acabou de instalar.

<br>

### Instalando o SASS
Para instalar o Sass globalmente em seu computador, você pode usar o npm (Node Package Manager), que vem junto com a instalação do Node.js. Basta abrir o Prompt de Comando e executar o comando:
```
npm install -g sass
```

Depois de instalar o Sass, você pode verificar se ele foi instalado corretamente executando o comando ``sass --version`` no Prompt de Comando. Isso deve mostrar a versão do Sass que você acabou de instalar.

<br>

### Instalando como depêndencia de desenvolvimento
Para instalar o Sass como uma dependência de desenvolvimento em um projeto específico, você pode usar o npm. Abra o Prompt de Comando e navegue até a pasta do seu projeto. Em seguida, execute o comando:
```
npm install --save-dev sass
```

Isso irá instalar o Sass localmente no seu projeto e adicioná-lo como uma dependência de desenvolvimento no arquivo package.json do seu projeto.

<br>

### ✅ Questionário
Através de qual comando acessamos o NodeJS pelo terminal?

A- start nodejs

B- run node

C- node

D- nodejs 

Resposta: Letra C