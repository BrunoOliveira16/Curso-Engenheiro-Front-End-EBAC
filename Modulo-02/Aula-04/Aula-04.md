## 📝 Aula 04: Histórico
### ✅ Desfazendo alterações
Podemos desfazer alterações em arquivos que ainda não foram adicionados ao stage, usando o comando:
```
git checkout meu_arquivo
```

### ✅ Navegando entre commits
Com o Git podemos viajar no tempo, para o passado, através do comando git checkout, podemos voltar o conteúdo de um repositório para o conteúdo de um determinado commit. 
```
git checkout COMMIT_ID
```

### ✅Revertendo Commits
O Git nos dá a possibilidade de reverter os commits. Uma reversão  significa que outro commit será criado desfazendo a alteração, se  incluímos um arquivo no commit que queremos reverter, outro commit será criado removendo este arquivo.

Fazemos isso através do comando:
```
git revert HEAD COMMIT_ID
```