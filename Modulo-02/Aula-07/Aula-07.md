## 📝 Aula 07: GitHub
### ✅ Github
O Github é um site onde podemos armazenar nossos repositórios Git.

Além do armazenamento ele proporciona algumas funcionalidades de comunidade, como favoritar seus repositórios, seguir usuários e reportar bugs.

<br>

### ✅ Clonando um projeto
Para baixarmos um projeto do Github, o termo correto é clonar.

Estando na página do repositório, clique em code e escolha a  opção HTTPS, copiando o endereço:

<img src="./img/img-01.jpg">

Com o endereço do repositório copiado, execute o comando:
```
git clone LINK –l pasta_destino*
```

* O parâmetro ``–l`` é opcional, sem ele será criada uma pasta com o nome do repositório

<br>

### ✅ Enviando atualizações
Após fazer o commit de nossas alterações, precisamos envia-las ao repositório, que está armazenado no Github, fazemos isso através do comando:
```
git push
```

<br>

### ✅ Recebendo atualizações
Para manter nosso projeto atualizado com o conteúdo remoto, o conteúdo presente no Github, executamos o comando:
```
git pull
```

<br>

### ✅ Enviando uma determinada branch
Para enviarmos o conteúdo de outra branch, que não é a principal, primeiro mudamos para ela, usando o git checkout e depois executamos o git push com um parâmetro:
```
git push origin nome_da_branch
```