## 📝 Aula 02: Produtividade com React
Nesta aula foi introduzido algumas ferramentas de produtividade para se trabalhar com React que são:

### create-react-app

**`create-react-app`** é uma ferramenta oficialmente suportada pelo React para criar rapidamente novos projetos React sem ter que lidar com a configuração do ambiente de desenvolvimento. Ele configura automaticamente o ambiente de desenvolvimento com recursos como o webpack, Babel e ESLint, e fornece um conjunto de scripts para iniciar, construir e testar o aplicativo. Isso permite que os desenvolvedores se concentrem em escrever código em vez de gastar tempo configurando ferramentas. Além disso, **`create-react-app`** é altamente personalizável e pode ser expandido para atender às necessidades específicas do projeto.

### Criando um projeto com CRA

Para criar um novo projeto React com o **`create-react-app`**, você precisa ter o Node.js instalado em seu computador. Depois de ter o Node.js instalado, abra um terminal e execute o seguinte comando para instalar globalmente o **`create-react-app`**:

```json
npm install -g create-react-app
```

Depois de instalado, você pode criar um novo projeto React executando o seguinte comando:

```json
create-react-app my-app
```

Substitua **`my-app`** pelo nome do seu projeto. Isso criará um novo diretório com o nome do seu projeto e configurará automaticamente o ambiente de desenvolvimento com tudo que você precisa para começar a escrever código React.

Depois de criar o projeto, navegue até o diretório do projeto e execute o comando **`npm start`** para iniciar o servidor de desenvolvimento e abrir o aplicativo no navegador. Agora você está pronto para começar a desenvolver seu aplicativo React!

### Opções disponíveis para personalizar um projeto CRA

Existem várias opções disponíveis para personalizar um projeto criado com o **`create-react-app`**. Algumas dessas opções incluem:

- **Adicionando suporte para CSS pré-processado**: Você pode adicionar suporte para pré-processadores CSS como SASS ou LESS ao seu projeto **`create-react-app`** instalando o pacote apropriado e renomeando seus arquivos CSS para usar a extensão de arquivo correta.
- **Adicionando rotas**: Você pode adicionar rotas ao seu aplicativo React usando uma biblioteca de roteamento como o **`react-router-dom`**. Isso permite que você crie um aplicativo de página única (SPA) com várias páginas e navegação.
- **Adicionando um proxy**: Se você estiver trabalhando com uma API em um servidor diferente, pode ser útil configurar um proxy para evitar problemas de CORS. Você pode fazer isso adicionando uma entrada **`proxy`** ao seu arquivo **`package.json`**.
- **Personalizando variáveis de ambiente**: Você pode personalizar as variáveis de ambiente do seu aplicativo criando um arquivo **`.env`** na raiz do seu projeto e definindo as variáveis de ambiente lá. Isso é útil para armazenar informações confidenciais, como chaves de API, que não devem ser armazenadas no código-fonte.

Essas são apenas algumas das muitas opções disponíveis para personalizar um projeto criado com o **`create-react-app`**.

### Criando projeto CRA com TypeScript

Para criar um novo projeto React com TypeScript usando o **`create-react-app`**, você pode usar o seguinte comando:

```json
npx create-react-app my-app --template typescript
```

Substitua **`my-app`** pelo nome do seu projeto. Isso criará um novo diretório com o nome do seu projeto e configurará automaticamente o ambiente de desenvolvimento com tudo que você precisa para começar a escrever código React com TypeScript.

Depois de criar o projeto, navegue até o diretório do projeto e execute o comando **`npm start`** para iniciar o servidor de desenvolvimento e abrir o aplicativo no navegador. Agora você está pronto para começar a desenvolver seu aplicativo React com TypeScript!

### Adicionando suporte TypeScript no CRA

Para adicionar suporte para TypeScript ao seu projeto React criado com o **`create-react-app`**, você pode seguir os seguintes passos:

1. Instale o pacote TypeScript e os tipos React e ReactDOM executando o seguinte comando no diretório do seu projeto:

```json
npm install --save typescript @types/node @types/react @types/react-dom
```

1. Renomeie qualquer arquivo JavaScript (**`.js`**) para TypeScript (**`.ts`**) ou TypeScript JSX (**`.tsx`**) se o arquivo contiver JSX.
2. Crie um arquivo **`tsconfig.json`** na raiz do seu projeto com a configuração desejada para o TypeScript. O **`create-react-app`** fornecerá automaticamente uma configuração padrão, mas você pode personalizá-la de acordo com suas necessidades.
3. Execute o comando **`npm start`** para iniciar o servidor de desenvolvimento e verificar se há erros de tipo. Você pode precisar atualizar seu código para corrigir quaisquer erros de tipo encontrados pelo TypeScript.

Depois de seguir esses passos, seu projeto **`create-react-app`** deve ter suporte para TypeScript e você poderá usar todos os recursos do TypeScript ao escrever seu código.

<br>

### EditorConfig

Ele é um formato de arquivo para definir estilos de codificação consistentes para vários desenvolvedores trabalharem em um mesmo projeto em vários editores e IDEs.

O arquivo é criado no root do projeto com o seguinte padrão: ***`.editorconfig`***

É necessário também instalar o plugin do EditorConfig no VSCode (**EditorConfig for VS Code**)

Exemplo de configuração:

```json
root = true

[*]
indent_style = space
ident_size = 4
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

• **`root`**: propriedade especial que deve ser especificada na parte superior do arquivo, fora de qualquer seção. Defina como verdadeiro para interromper `.editorconfig`a pesquisa de arquivos no arquivo atual.

• **`indent_style`**: defina como tabulação ou espaço para usar tabulações rígidas ou soft tabs, respectivamente.

• **`indent_size`**: um número inteiro que define o número de colunas usadas para cada nível de recuo e a largura das tabulações virtuais (quando suportadas). Quando definido como tab , o valor de **`tab_width`**(se especificado) será usado.

• **`end_of_line`**: defina como lf , cr ou crlf para controlar como as quebras de linha são representadas.

• **`charset`**: defina como latin1 , utf-8 , utf-8-bom , utf-16be ou utf-16le para controlar o conjunto de caracteres.

• **`trim_trailing_whitespace`**: defina como true para remover quaisquer caracteres de espaço em branco anteriores aos caracteres de nova linha e false para garantir que isso não aconteça.

• **`insert_final_newline`**: definido como true para garantir que o arquivo termine com uma nova linha ao salvar e false para garantir que isso não aconteça.

<br>

### ESLint

ESLint é uma ferramenta para identificar e relatar padrões encontrados em código ECMAScript/JavaScript, com o objetivo de tornar o código mais consistente e evitar bugs.

Para instalar os ESLint, execute o comando:

```java
npx eslint --init
```

Após a execução do comando você terá três opções de como usara o ESLint

- To check syntax only
- **To check syntax and find problems**
- To check syntax, find problems, and enforce code style

Após selecionar a opção anterior, selecione o tipo de módulo para seu projeto

- **JavaScript modules (import / export)**
- CommonJS (require / exports)
- None of these

Depois você deverá informar se está utilizando algum framework

- **React**
- Vue.js
- None of these

Depois deverá ser informado se utilizara o TypeScript

- No
- **Yes**

Depois onde irá rodar o código

- **Browser**
- Node

Depois qual o tipo de código de formatação será utilizado no arquivo

- JavaScript
- YAML
- **JSON**

Após está configuração ele será instalado com suas dependências, gerando o arquivo `.eslintrc.json`

**Opcional:** Instale o plugin do eslint para que ele entenda o uso dos hooks do React

```java
npm install --save-dev eslint-plugin-react-hooks
```

Exemplo de configuração do arquivo:

```json
{
	"env": {
		"browser": true,
		"es2021": true,
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended"
	],
	"overrides": [],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins": [
		"react",
		"@typescript-eslint",
		"react-hooks",
	],
	"rules": {
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn",
		"react/prop-types": "off",
		"react/react-in-jsx-scope": "off",
		"@typescript-eslint/explicit-module-boundary-types": "off",
	},
	"settings": {
		"react": {
			"version": "detect"
		}
	}
}
```

<aside>
💡 Para executar o ESLint no terminal pode se utilizar o comando: `npx eslint .` Porém caso tenha o plugin do ESLint instalado na sua IDE, ele já faz isso de forma automática, identificando problemas e bugs em seu código.

</aside>

- Aqui está uma explicação de cada uma dessas regras configuradas no ESLint:
    - **`"react-hooks/rules-of-hooks": "error"`**: Esta regra garante que os Hooks do React sejam chamados de maneira consistente e de acordo com as [Regras dos Hooks](https://reactjs.org/docs/hooks-rules.html) estabelecidas pela equipe do React. [Isso inclui garantir que os Hooks sejam chamados apenas no nível superior de um componente ou função personalizada do Hook e não dentro de loops, condições ou funções aninhadas](https://reactjs.org/docs/hooks-rules.html).
    - **`"react-hooks/exhaustive-deps": "warn"`**: Esta regra verifica as dependências de efeitos e outras funções do Hook, como **`useEffect`**, **`useCallback`** e **`useMemo`**. [Ele garante que todas as dependências necessárias estejam especificadas na matriz de dependências para garantir que o Hook seja atualizado corretamente quando qualquer uma das dependências mudar](https://stackoverflow.com/questions/58866796/understanding-the-react-hooks-exhaustive-deps-lint-rule).
    - **`"react/prop-types": "off"`**: Esta regra verifica se os componentes do React têm validação de tipos para suas props usando a biblioteca **`prop-types`**. [No entanto, esta regra está desativada em sua configuração, o que significa que a validação de tipos de prop não é aplicada](https://www.npmjs.com/package/prop-types).
    - **`"react/react-in-jsx-scope": "off"`**: Esta regra garante que a variável **`React`** esteja no escopo ao usar JSX. No entanto, esta regra está desativada em sua configuração. [Isso pode ser porque você está usando uma versão do React (v17 ou posterior) que introduziu um novo transformador JSX que não requer mais a importação do React em todos os arquivos JSX](https://stackoverflow.com/questions/42640636/react-must-be-in-scope-when-using-jsx-react-react-in-jsx-scope).
    - **`"@typescript-eslint/explicit-module-boundary-types": "off"`**: Esta regra garante que os tipos de retorno e argumento explícitos sejam especificados para funções e métodos de classe públicos exportados. Isso ajuda a tornar claro para qualquer código chamador qual é a entrada e saída do limite do módulo. [No entanto, esta regra está desativada em sua configuração, o que significa que os tipos explícitos não são aplicados](https://typescript-eslint.io/rules/explicit-module-boundary-types/).

<br>

### Prettier

Prettier é uma ferramenta de formatação de código que garante que o código seja formatado de maneira consistente, independentemente de quem o escreveu. Ele suporta muitas linguagens, incluindo JavaScript, TypeScript, CSS, HTML, JSON, Markdown e muitas outras. Prettier remove toda a formatação original e reimprime o código inteiro do zero para garantir a consistência. Ele pode ser integrado à maioria dos editores de código e pode ser executado como parte de seu pipeline de integração contínua para garantir que todo o código esteja formatado corretamente antes de ser mesclado.

Para utilizar o Prettier com o ESLint, utilize o comando abaixo para instalar o plugin

```json
npm install --save-dev eslint-plugin-prettier eslint-config-prettier
```

Também é necessário executar o comando

```json
npm install --save-dev --save-exact prettier
```

Após a instalação, devemos criar um arquivo chamado `.prettierrc`

Configuração base do arquivo:

```json
{
	"trailingComma": "none",
	"semi": false,
	"singleQuote": true
}
```

Após essa configuração deve ser informado em extends do ESLint a configuração: `"plugin:prettier/recommended"`

<aside>
💡 É importante desligar a formatação padrão do VSCode para utilizar o Prettier e para isso deve se criar uma pasta no root do projeto chamada `.vscode` e um arquivo de `settings.json`

</aside>

Dentro do arquivo colocamos a seguinte configuração:

```json
{
	"editor.formatOnSave": false,
	"editor.codeActionsOnSave": {
		"source.fixAll.eslint": true
	}
}
```

Para executar o Prettier no nosso projeto e efetuar todas as modificações de forma instantânea execute no terminal o comando:

```json
npx prettier --write ./src/
```

---


<br>

## ✅ Questionário
Qual é o papel do EditorConfig?

A- procurar bugs no código

B- aplicar uma padronização no editor de código

C- melhorar a escrita do código com uso de sugestões, autocomplete

D- manter nosso estilo de código padronizado, como o uso de ponto virgula, estilo de aspas

Resposta: O papel do EditorConfig é manter o estilo de código padronizado entre diferentes editores e IDEs. Isso significa que a resposta correta é a opção D: manter nosso estilo de código padronizado, como o uso de ponto e vírgula, estilo de aspas. O EditorConfig ajuda a garantir que o código seja formatado de maneira consistente, independentemente de quem o escreveu ou em qual editor ele foi escrito.