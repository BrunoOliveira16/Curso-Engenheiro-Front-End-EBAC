## 📝 Aula 04: Imagens
### ✅ A tag Picture
Utilizando a tag picture podemos disponibilizar diferente arquivos de imagens:
```
<picture>
    <source srcset="fachada-tablet.png" media="(max-width: 1024px)" />
    <source srcset="fachada-mobile.png" media="(max-width: 640px)" />
    <img src="fachada.png" alt="Fachada da loja Exemplo" />
</picture>
```

Na tag source, dentro de picture, especificamos os arquivos que serão utilizados quando determinadas media queries forem válidas.

<br>

### ✅ Questionário
Através de qual atributo da tag source informamos o endereço da imagem a ser utilizada em determinada resolução?

A- srcset

B- href

C- address

D- src 

Resposta: Letra A.