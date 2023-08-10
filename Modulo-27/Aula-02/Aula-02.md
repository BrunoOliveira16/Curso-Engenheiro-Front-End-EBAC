## 📝 Aula 02: Setup do projeto
Para configurar um projeto Vue.js, você pode usar a ferramenta de linha de comando Vue CLI ou Vite. Ambas as ferramentas fornecem uma maneira fácil de criar um novo projeto Vue.js com uma configuração de build pronta para uso.

Antes de começar, certifique-se de ter o Node.js instalado em sua máquina. Você pode verificar se o Node.js está instalado executando o comando ``node -v`` em um terminal. Se você não tiver o Node.js instalado, pode baixá-lo no site oficial do Node.js1.

Para criar um novo projeto Vue.js usando o Vue CLI, primeiro instale o Vue CLI globalmente em sua máquina executando o comando ``npm install -g @vue/cli`` em um terminal. Depois que o Vue CLI estiver instalado, você pode criar um novo projeto executando o comando ``vue create nome-do-projeto``, onde ``nome-do-projeto`` é o nome do seu projeto. Isso iniciará um assistente interativo que o guiará pelo processo de criação do projeto2.

Para criar um novo projeto Vue.js usando o Vite, primeiro instale o Vite globalmente em sua máquina executando o comando ``npm install -g create-vite`` em um terminal. Depois que o Vite estiver instalado, você pode criar um novo projeto executando o comando ``create-vite nome-do-projeto --template vue``, onde ``nome-do-projeto`` é o nome do seu projeto. Isso criará um novo projeto Vue.js com uma configuração de build baseada no Vite.

Depois de criar seu projeto, você pode navegar até a pasta do projeto e iniciar o servidor de desenvolvimento executando os comandos ``cd nome-do-projeto`` e ``npm run dev``. Isso iniciará um servidor local e abrirá seu aplicativo no navegador padrão.

Em resumo, para configurar um projeto Vue.js, você pode usar a ferramenta de linha de comando Vue CLI ou Vite para criar um novo projeto com uma configuração de build pronta para uso. Certifique-se de ter o Node.js instalado antes de começar e siga as instruções fornecidas pelas ferramentas para criar e iniciar seu projeto.

<br>

## ✅ Questionário
Como podemos adicionar uma expressão JS dentro do HTML com VueJS?

A- através da função innerHTML

B- através da função innerText

C- através do uso de {{ }} na expressão que contém o código JS

D- através da função write

Resposta: A resposta correta é a letra C. No Vue.js, você pode usar a sintaxe {{ }} para incluir uma expressão JavaScript dentro do HTML. Essa sintaxe é chamada de interpolação de texto e permite que você avalie uma expressão JavaScript e exiba o resultado como texto dentro do elemento HTML.