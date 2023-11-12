# 📌 Questionário
> Módulo 23: Ajax e Exceções

<br>

### Pergunta 1
#### Qual das opções a seguir não é um método HTTP válido?
A- GET

B- POST

C- REMOVE

D- PATCH

<details>
    <summary>Resposta</summary>

    REMOVE

    A alternativa correta é a opção "REMOVE". Não existe um método HTTP chamado "REMOVE". O método correto para realizar a remoção de recursos no servidor é o método DELETE.
</details>

<br>

### Pergunta 2
#### Qual função utilizamos para configurar uma requisição com XMLHtttpRequest (sem fazer o envio), considerando: const http = new XMLHttpRequest()
A- http.config("GET", "ROTA”)

B- http.send("GET", "ROTA”)

C- http.init("GET", "ROTA”)

D- http.open("GET", "ROTA”)

<details>
    <summary>Resposta</summary>
    
    http.open(""GET"", ""ROTA"")

    A alternativa correta é a opção "http.open(""GET"", ""ROTA"")". Para configurar uma requisição com XMLHttpRequest, usamos o método "open", que define o tipo de requisição (no caso, "GET") e a URL da rota que desejamos acessar.
</details>

<br>


### Pergunta 3
#### Como fazemos uma requisição utilizando o fetch API?
A- fetch.get("ENDPOINT")

B- fetch.request("ENDPOINT")

C- fetch("ENDPOINT")

D- fetch.open("ENDPOINT")

<details>
    <summary>Resposta</summary>
    
    fetch("ENDPOINT")

    A alternativa "fetch(""ENDPOINT"")" está correta, pois utiliza a sintaxe adequada para iniciar uma requisição utilizando a Fetch API. O método fetch é chamado com o argumento "ENDPOINT", que representa o URL do recurso que você deseja buscar ou acessar.
</details>

<br>

### Pergunta 4
#### Qual bloco será executado caso ocorra um erro na execução do nosso código JavaScript?
A- try

B- finally

C- error

D- catch

<details>
    <summary>Resposta</summary>
    
    catch

    A alternativa correta é a "catch", porque o bloco catch é o local onde o código de tratamento de erros é colocado para lidar com exceções que ocorrem dentro do bloco try.
</details>

<br>

### Pergunta 5
#### Como disparamos um erro no JavaScript?
A- throw Error(”Descrição do erro")

B- throw new Error("Descrição do erro")

C- throw new Exception("Descrição do erro")

D- new Error(”Descrição do erro")

<details>
    <summary>Resposta</summary>
    
    throw new Error("Descrição do erro")

    A alternativa correta é a "throw new Error("Descrição do erro")", porque ela segue a sintaxe correta para lançar um erro no JavaScript usando a classe Error. As demais alternativas estão incorretas devido a problemas de sintaxe ou uso incorreto da classe Error.
</details>
