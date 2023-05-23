## 📝 Aula 05: Branches
### ✅ Branches – Visão Geral
Com o Git podemos criar versões paralelas do nosso projeto, fazemos  isso no Git através da criação de branches, que pode ser traduzido como galhos, ramificação, então pensamos em nosso repositório como uma árvore que pode possuir diversos galhos.

**Com essa funcionalidade podemos fazer experimentos e trabalhar em equipe de uma forma organizada.**

<br>

### ✅ Listando as branches do repositório

Para visualizar todas as branchs que fazem parte do repositório,  execute o comando:
```
gitbranch
```

<br>

### ✅ Criando uma branch
Para criar uma branch, executamos o comando:
```
git branch nova_branch
```

Com esse comando será criada uma nova ramificação do projeto a partir do estado da branch atual, com uma variação do comando podemos indicar uma branch de referência para a sua criação:
```
git branch nova_branch branch_referencia
```

<br>

### ✅ Convenções para nomear branches
No dia a dia seguimos um padrão para a nomenclatura de branches, o que nos facilita a identificação de seu conteúdo.

``hotfix/nome_do_bug``: usado para correções rápidas, exemplo: o botão de adicionar ao carrinho não funciona, a correção desse bug será feita numa branch hotfix.

``bugfix/nome_do_bug``: correção de um bug que não é um impeditivo ao usuário, não compromete um fluxo do site.

``feature/nome_da_funcionalidade``: a adição de uma funcionalidade será contida nessa nova branch, até que ela esteja desenvolvida e validada, exemplo:

feature/add_to_favorites.

<br>

### ✅ Navegando entre branches
Para trocar de branch usamos o comando:
```
Git checkout nome_branch
```

Podemos combinar a criação com a troca de branch com o comando:
```
Git checkout –b nome_branch
```

A branch nova será criada e nosso repositório estará baseado nela.

<br>

### ✅ Deletando uma branch
Para deletar uma branch, executamos o comando:
```
git branch –D nome_branch
```