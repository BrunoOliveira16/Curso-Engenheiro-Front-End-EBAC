## 📝 Aula 06: Merge
### ✅ Mesclando branches
Para mesclar duas branches, trazendo as atualizações feitas em uma para a outra, executamos o comando:
```
git merge nome_branch
```

<br>

### ✅ Conflitos entre branches
Apesar do Git ser uma ótima ferramenta para o trabalho em equipe, ele não pode impedir que duas pessoas alterem o mesmo arquivo.

Imagine que o arquivo teste.html foi alterado na branch X e na branch Y, no momento em que o merge for realizado o Git criará um conflito, pois ele não sabe qual versão considerar. Esse conflito deverá ser resolvido de forma manual.