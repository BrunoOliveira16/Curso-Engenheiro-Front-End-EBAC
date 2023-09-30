## Conheça React Router DOM
### Sobre o React Router 
O React Router é uma biblioteca utilizada para construção de um sistema de roteamento em aplicações React. Apesar do React ser uma tecnologia SPA (Single Page Application) o conceito de aplicação de página única está relacionada a existência de apenas um arquivo HTML, porém dentro de uma SPA podemos ter diversas páginas e a isso damos o nome de rotas.

<br>

### Aplicação 
Para utilizar o React Router instalamos o pacote react-router-dom e importamos a função createBrowserRouter e o componente RouterProvider: 
```
import {       
    createBrowserRouter,       
    RouterProvider, 
} from 'react-router-dom'

const rotas = createBrowserRouter([        
    {           
        path: '/',           
        elemento: <Home /> 
    }, 
    {           
        path: '/tarefas',           
        elemento: <Tarefas /> 
    }, 
])
```

<br>

### Função e elementos 
A função createBrowserRouter recebe um array de objetos que contém como propriedades path (caminho da rota) e elemento (componente que será renderizado). 

Já o componente RouterProvider é o container de todas as rotas, dentro dele os componentes serão renderizados. 
```
<RouterProvider router={rotas} />
```

O sistema de roteamento com o React Router utilizado por baixo dos panos, o sistema de histórico e navegação do navegador, window.history e window.location. Por isso, para navegar entre páginas não podemos utilizar a tag <a>, o React Router nos fornece um componente para navegação chamado link: 
```
<Link to="/tarefas">Minhas Tarefas</link> 
```

Para saber mais sobre o React Router acesse o link https://reactrouter.com/en/main.