## 📝 Aula 05: Estilizando elementos através do JavaScript
### ✅ Estilizando elementos via JS
Podemos aplicar estilo aos elementos utilizando a propriedade style:
```
document.querySelector('h1').style.color= 'red';
```

Ressaltando que para estilos compostos por duas palavras usamos o padrão camelCase: 
```
style.backgroundColor= 'blue';
```

Além da adição de estilos inline, podemos manipular classes:
```
document.querySelector('.feedback').classList.add('success');
                                   .classList.remove('success');
```
Assim evitamos o uso de CSS inline.