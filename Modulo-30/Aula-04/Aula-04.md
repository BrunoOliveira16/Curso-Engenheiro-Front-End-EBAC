## 📝 Aula 04: Conhecendo a aplicação
Nesta aula conhecemos o repositório que deverá ser feito o fork do projeto a ser trabalhado nas próximas aulas:
```
https://github.com/ogiansouza/ebac_games_redux
```

Após o fork foi realizado os seguintes comandos abaixo em modo local:

Clonando o repositório e acessando a pasta do projeto
```
git clone https://github.com/ogiansouza/ebac_games_redux

cd ebac_games_redux
```

Instalando dependencias de desenvolvimento
```
npm install
```

Executado o eslint para corrigir automaticamente quaisquer problemas de código que encontrar e que possa ser corrigido automaticamente
```
npx eslint --fix
```

Executado comando para rodar o projeto
```
npm start
```

Executado comando para rodar um servidor local json para consumo de dados da api
```
npx json-server db.json --port 4000 --delay 1000
```

<br>

### Informações complementares
> Ao executar o comando ``npx eslint --fix``, o ESLint verificará o código em busca de problemas e tentará corrigi-los automaticamente. Isso pode incluir coisas como adicionar ou remover espaços em branco, ajustar a indentação e adicionar ou remover ponto-e-vírgula. No entanto, nem todos os problemas podem ser corrigidos automaticamente, então você ainda pode precisar revisar manualmente o código para corrigir quaisquer problemas restantes.

> O comando npx json-server db.json --port 4000 --delay 1000 inicia o json-server, um servidor de API RESTful falso, usando o arquivo db.json como fonte de dados. O servidor será iniciado na porta 4000 e cada resposta será atrasada em 1000 milissegundos.

> O json-server é uma ferramenta útil para criar rapidamente uma API RESTful falsa com dados de amostra. Ele lê os dados de um arquivo JSON e fornece endpoints RESTful para acessar e manipular os dados. Com o comando acima, você pode iniciar o json-server usando o arquivo db.json como fonte de dados e acessar a API em http://localhost:4000.

> A opção --delay 1000 adiciona um atraso de 1000 milissegundos (1 segundo) a cada resposta do servidor. Isso pode ser útil para simular condições de rede mais lentas e testar como sua aplicação lida com atrasos na resposta da API.

<br>

## ✅ Questionário
Qual a diferença entre props e state?

A- o state é interno já as props são passadas via atributos

B- para criar uma prop utilizamos o useProps e para state utilizamos useState

C- as props são internas já o state é um valor que recebemos via atributos

D- não há

Resposta: A resposta correta é a letra A, o state é interno já as props são passadas via atributos. No React, props e state são dois conceitos importantes para entender como os componentes funcionam. Props são valores passados de um componente pai para um componente filho como atributos. Eles são usados para passar dados e funções entre componentes e são imutáveis, o que significa que um componente filho não pode alterar suas próprias props.