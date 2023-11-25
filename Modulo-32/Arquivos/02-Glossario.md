# 📌 Glossário
> Módulo 32: Projeto 5 - Parte 2

<br>

## Remova uma tarefa
### ✔ Dispatch (Despacho)
Refere-se ao processo de encaminhar uma tarefa, operação ou chamada de função para a parte relevante do código que irá processá-la. Geralmente, é utilizado em linguagens de programação orientadas a objetos, onde a decisão sobre qual método ou função chamar é tomada em tempo de execução com base no tipo ou características dos objetos envolvidos.

<br>

## Edite uma tarefa
### ✔ Componente controlável
O estado do componente é gerenciado e atualizado pelo React e não é mantido internamente pelo próprio componente. Ele recebe seus valores e alterações de estado por meio de props e invoca funções (callbacks) específicas para atualizar o estado. Dessa forma, o React tem controle total sobre a manipulação dos dados do componente. 

### ✔ onChange
Função frequentemente usada para lidar com eventos de mudança de valor em elementos de formulário, como inputs de texto, selects e checkboxes. Ela garante que os componentes controláveis reajam adequadamente às interações do usuário e mantenham seu estado sempre atualizado conforme as mudanças ocorrem nos elementos de formulário. Isso torna a interação com formulários mais previsível e facilita a sincronização dos dados entre o estado do componente e a interface do usuário.

<br>

## Conheça React Router DOM
### ✔ createBrowserRouter
Função que cria um BrowserRouter. Usada para criar um roteador para aplicações React que são renderizadas no navegador. O BrowserRouter usa a história do navegador para manter o estado das rotas do seu aplicativo. Ele também fornece uma API para navegar entre as rotas do seu aplicativo.

### ✔ RouterProvider
Componente React que fornece um roteador ao seu aplicativo. Deve ser usado no topo da árvore de componentes do seu aplicativo. Ele aceita um objeto de configuração como parâmetro. Este objeto de configuração pode ser usado para configurar o roteador, como definir as rotas, as rotas iniciais e o manipulador de erro.

<br>

## Navegue entre rotas
### ✔ Componente Link
Usado para criar links de navegação em aplicações React com roteamento. Permite a navegação entre diferentes rotas em uma Single Page Application (SPA) sem recarregar a página inteira.

<br>

## Crie uma tarefa 
### ✔ HTMLfor
Atributo HTML usado em elementos ``<label>`` para associá-los a elementos de formulário específicos. Ele é usado principalmente para melhorar a acessibilidade e usabilidade dos formulários em páginas da web.

### ✔ useNavigate
É um gancho do React que permite navegar entre as rotas do seu aplicativo. Ela retorna uma função que pode ser usada para navegar para uma nova rota. Ela aceita um parâmetro, que é a rota para a qual você deseja navegar.