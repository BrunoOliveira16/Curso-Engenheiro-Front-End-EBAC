# 📌 Glossário
> Módulo 30: Introdução ao Redux com React

<br>

## Conheça o problema de prop drilling
### ✔ prop drilling
Padrão ou problema comum que ocorre em aplicações React quando os dados precisam ser passados por múltiplos níveis de componentes, mesmo que os componentes intermediários não precisem desses dados diretamente. Isso pode tornar o código mais complexo e dificultar a manutenção, especialmente em aplicações grandes e complexas.

### ✔ Redux
Biblioteca de gerenciamento de estado para aplicações JavaScript com arquitetura baseada em fluxo de dados unidirecional. Oferece uma abordagem previsível para gerenciar o estado da aplicação, tornando-o mais fácil de entender e depurar. Ele segue os princípios do padrão de design Flux e é baseado no conceito de imutabilidade de dados.

<br>

## Explore o Redux Toolkit
### ✔ Payload
Termo usado para se referir aos dados ou informações que são transportados por uma ação (action). Uma ação é um objeto JavaScript que descreve uma mudança de estado. Ela possui um campo obrigatório chamado "type", que é uma string que identifica o tipo da ação. Além disso, uma ação pode ter outros campos opcionais, como "payload", que é onde os dados associados à ação são armazenados. O "payload" é usado para carregar os dados relevantes que uma action precisa para atualizar o estado da aplicação.

### ✔ Redux Toolkit
Biblioteca oficial recomendada pelo time do Redux para facilitar o uso e a configuração do Redux em aplicações React. Foi projetado para simplificar a configuração do Redux, tornando mais fácil a criação de stores, reducers e actions. 

### ✔ Slices (Fatias)
Projetada para facilitar a criação de reducers e actions relacionadas, além de organizar o código de gerenciamento de estado em sua aplicação. Em vez de criar manualmente os reducers e actions, você pode usar a função createSlice do Redux Toolkit para gerar automaticamente reducers e actions com base em uma definição simples. O "slice" combina o reducer e as actions em um único objeto, tornando a configuração do Redux mais concisa e legível.

### ✔ eslint-plugin-react-hooks
Extensão do ESLint específica para projetos React que utiliza hooks. Ele foi projetado para ajudar a garantir o uso correto e consistente dos hooks do React, evitando erros comuns e garantindo aadesão às regras e boas práticas recomendadas.

<br>

## Use seletores
### ✔ Provider
Componente usado para fornecer a store Redux a todos os componentes da aplicação. Ele permite que você conecte seus componentes ao estado gerenciado pelo Redux sem a necessidade de passar explicitamente a store através de props (prop drilling).

### ✔ Selectors (Seletores)
Funções que são usadas para extrair informações específicas do estado global armazenado na store Redux. Eles permitem que você abstraia o acesso ao estado e forneçam uma maneira eficiente de acessar apenas as partes relevantes do estado de que seus componentes precisam. São úteis quando o estado global é grande e complexo, pois ajudam a evitar a propagação excessiva de dados para componentes filhos que não precisam de todas as informações contidas no estado.

<br>

## Conheça o Redux Toolkit Query
### ✔ Base Query 
Estrutura que define uma solicitação HTTP genérica para um determinado recurso de API. Ela encapsula as informações comuns e a lógica relacionada a uma solicitação específica, permitindo que você reutilize configurações e comportamentos em vários endpoints de consulta.

### ✔ Immer
Biblioteca JavaScript que facilita a criação de cópias imutáveis de objetos e arrays. Ela permite que você trabalhe com estruturas de dados mutáveis como se estivessem sendo modificadas diretamente, mas, por trás dos panos, cria uma cópia imutável com as alterações aplicadas.

### ✔ Middlewares
Funções que interceptam e modificam o fluxo de solicitações HTTP e respostas antes que eles alcancem os reducers. Eles permitem que você adicione lógica personalizada, realize transformações nos dados, adicione cabeçalhos personalizados, trate erros, entre outras tarefas, de forma fácil e configurável.

### ✔ Redux Toolkit Query (RTK Query)
Extensão do Redux Toolkit que oferece uma abordagem simplificada e altamente configurável para gerenciar o estado de solicitações HTTP (por exemplo, chamadas de API) na sua aplicação Redux. Ele foi projetado para simplificar a implementação do gerenciamento de estado de dados assíncronos e tornar mais fácil lidar com as complexidades envolvidas nesse processo. 
