## 📝 Aula 07: Tags de mídia
### ✅ Multimidia
Podemos trabalhar com elementos multimidia no HTML, possuímos imagens, vídeos e áudio.

``<audio>``: utilizada para inserir um áudio na página;

``<video>``: utilizada para inserir um vídeo na página;

``<img>``: utilizada para inserir uma imagem na página;

<br>

### ✅ Multimidia – áudio e vídeo
As tags audio e video possui uma configuração semelhante, para adicionar um vídeo ou imagem seguimos a estrutura:
```
<audio controls>
    <source src=“arquivo.mp3” type=“audio/mpeg” />
</audio>

<video controls autoplay>
    <source src=“video.mp4” type=“video/mp4” />
</video>
```

Com o atributo controls habilitamos os botões para controlar a mídia, como volume, play, pause, avançar e retroceder. 

Com o atributo autoplay o arquivo será executado assim que for carregado, sem que o usuário tenha eu executar alguma ação.

No atributo type da tag source informamos o media type do arquivo, são eles:

Para áudio: audio/mpeg (.MP3), audio/ogg (.OGG) e audio/wav (.WAV);

Para vídeo: video/mp4 (.MP4), video/webm (.WebM) e video/ogg (OGG)

<br>

### ✅ Multimidia – imagens
Para inserir uma imagem utilizamos a tag img, utilizamos o atributo src para informar o caminho da imagem e o atributo alt para informar um texto que será exibido caso a imagem não carregue, esse texto também será utilizado por leitores de tela, portanto é importante descrever a imagem por motivos de acessibilidade.

Exemplo:
```
<img src=“fotos/ferias.png” alt=“Foto das minhas na praia, pessoas jogando futebol na areia” />
```
Assim caso a página seja acessada por um leitor de tela ele irá narrar o conteúdo descrito no atributo alt, tornando o conteúdo acessível para pessoas com deficiência visual.

<br>

### ✅ Questionário
1- Qual é a forma correta de adicionar uma imagem no HTML?

a- <img src="minha_imagem.jpg" />

b- <img src="minha_imagem.jpg" alt="Descrição da imagem" />

c- <image src="minha_imagem.jpg" />

d- <img href="minha_imagem.jpg" alt="Descrição da imagem" /> 

Resposta: Letra b