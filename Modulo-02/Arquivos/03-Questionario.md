# 📌 Questionário
>módulo 02: Versionamento de código usando o Git

<br>

### Pergunta 1
#### Através de qual comando adicionamos uma modificação ao stage do Git?
A- git -a meu_arquivo

B- git add --to-stage meu_arquivo

C- git add meu_arquivo

D- git insert meu_arquivo

<details>
    <summary>Resposta</summary>

    git add meu_arquivo
    
    Para adicionar uma modificação ao stage do Git, ou seja, prepará-la para ser commitada, é necessário utilizar o comando "git add". A opção correta, "git add meu_arquivo", está de acordo com a sintaxe correta para adicionar um arquivo específico ao stage.

</details>

<br>

### Pergunta 2
#### Qual é o comando correto para salvar uma alteração que está no stage?
A- git save

B- git commit -m "mensagem da mudança"

C- git save -m "mensagem da mudança"

D- git commit --save "mensagem da mudança"

<details>
    <summary>Resposta</summary>
    
    git commit -m "mensagem da mudança"
    
    No Git, o comando utilizado para salvar uma alteração que está no stage e criar um novo commit é o comando ""git commit". Para adicionar uma mensagem ao commit, utiliza-se o parâmetro ""-m"" seguido da mensagem entre aspas. A opção correta, "git commit -m ""mensagem da mudança"", está de acordo com a sintaxe correta para realizar um commit com uma mensagem descritiva da alteração.
    
</details>

<br>

### Pergunta 3
#### Qual comando usamos para solicitar o log dos últimos 3 commits?
A- git log --count=3

B- git log --max=3

C- git log -n 3

D- git log top 3

<details>
    <summary>Resposta</summary>
    
    git log -n 3

    No Git, o comando utilizado para visualizar o log dos commits é o comando "git log". Para especificar o número de commits a serem exibidos, utiliza-se o parâmetro "-n" seguido do número desejado. A opção correta, C) git log -n 3, está de acordo com a sintaxe correta para solicitar o log dos últimos 3 commits.
    
</details>

<br>

### Pergunta 4
#### Qual comando utilizamos para deletar uma branch?
A- git delete branch minha_branch

B- git branch delete minha_branch

C- git branch -D minha_branch

D- git b -d minha_branch

<details>
    <summary>Resposta</summary>
    
    git branch -D minha_branch

    Este comando tentará deletar a branch especificada de maneira segura e irá prevenir a exclusão se a branch não tiver sido totalmente mesclada.
</details>

<br>

### Pergunta 5
#### Com qual comando alteramos o estado do repositório para o estado de determinado commit?
A- git change commit_hash

B- git rollback commit_hash

C- git move commit_hash

D- git checkout commit_hash

<details>
    <summary>Resposta</summary>
    
    git checkout commit_hash

    No Git, o comando utilizado para alterar o estado do repositório para o estado de um determinado commit é o comando "git checkout". É necessário fornecer o hash do commit desejado para especificar qual commit será utilizado. A opção correta, D) git checkout commit_hash, está de acordo com a sintaxe correta para alterar o estado do repositório para um commit específico.
</details>

<br>

### Pergunta 6
#### Qual comando utilizamos para trazer o conteúdo de uma branch para a branch atual?
A- git union branch_de_origem

B- git fusion branch_de_origem

C- git merge branch_de_origem branch_atual

D- git merge branch_de_origem

<details>
    <summary>Resposta</summary>
    
    git merge branch_de_origem

    No Git, o comando utilizado para trazer o conteúdo de uma branch para a branch atual é o comando "git merge". O "merge" combina as alterações da branch de origem com a branch atual, aplicando as modificações necessárias. A opção correta, D) git merge branch_de_origem, está de acordo com a sintaxe correta para realizar a mesclagem de uma branch na branch atual.
</details>

<br>

### Pergunta 7
#### Através de qual comando atualizamos o repositório do Github com o conteúdo local?
A- git push

B- git upload

C- git update

D- git pull

<details>
    <summary>Resposta</summary>
    
    git push

    No Git, o comando utilizado para atualizar o repositório do GitHub com o conteúdo local é o comando "git push". Esse comando envia as alterações locais para o repositório remoto no GitHub. A opção correta, A) git push, está de acordo com a sintaxe correta para realizar essa operação.
</details>