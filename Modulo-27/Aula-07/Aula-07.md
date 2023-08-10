## 📝 Aula 07: Deploy
Fazer o deploy de um projeto Vue.js pode ser feito de várias maneiras, dependendo de suas necessidades e preferências. Aqui estão algumas práticas comuns e dicas para fazer o deploy de projetos Vue.js:

- ``Use uma ferramenta de build``: Se você estiver usando uma ferramenta de build como Vue CLI ou Vite, certifique-se de criar um build de produção do seu aplicativo. Isso otimizará seu código para produção, removendo branches de código apenas para desenvolvimento, minificando seus assets e muito mais.

- ``Escolha o serviço de hospedagem certo``: Existem muitos serviços de hospedagem disponíveis que podem hospedar seu aplicativo Vue.js. Algumas opções populares incluem GitHub Pages, GitLab Pages, Bitbucket Pages, Firebase Hosting, Heroku, Digital Ocean, AWS solutions, CloudFront, Now e Surge. Considere fatores como escalabilidade, confiabilidade e custo ao escolher um serviço de hospedagem.

- ``Configure seu servidor``: Depois de escolher um serviço de hospedagem, você precisará configurar seu servidor para executar seu aplicativo Vue.js. Isso pode envolver a instalação de um servidor web como Apache ou Nginx, a configuração de um domínio ou subdomínio para o seu aplicativo e a instalação de dependências.

- ``Defina o caminho público correto``: Se você estiver fazendo o deploy do seu aplicativo em um subdiretório ou subdomínio, certifique-se de definir o caminho público correto em seu arquivo vue.config.js. Isso garantirá que seus assets sejam carregados corretamente.

- ``Lide com o roteamento``: Se você estiver usando o Vue Router no modo history, precisará configurar seu servidor para retornar ao index.html para qualquer solicitação que não corresponda a um arquivo estático. Isso garantirá que suas rotas funcionem corretamente.

- ``Configure o CORS``: Se sua interface estiver implantada em um domínio diferente da sua API backend, você precisará configurar corretamente o CORS (Cross-Origin Resource Sharing) para permitir a comunicação entre os dois.

Essas são apenas algumas das práticas comuns e dicas para fazer o deploy de projetos Vue.js. Existem muitos recursos disponíveis online que podem fornecer informações mais detalhadas e guias passo a passo para fazer o deploy de aplicativos Vue.js. Espero que essas informações ajudem!

<br>

## ✅ Questionário
Como podemos importar um componente no VueJS?

A- através da palavra use dentro da tag script

B- através da palavra require dentro da tag template

C- através da palavra import dentro da tag template

D- através da palavra import dentro da tag script

Resposta: Para importar um componente em Vue.js, você pode usar a palavra-chave import dentro da tag script. A resposta correta é a letra D.