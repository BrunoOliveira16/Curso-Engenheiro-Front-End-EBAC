## 📝 Aula 02: Carousel  
O uso do Bootstrap pode ser divido entre um uso simples e avançado.

No uso simples utilizamos apenas o CSS do Bootstrap e seus componentes estilizados.

Já no uso avançado passamos a fazer o consumo do código JavaScript do Bootstrap.

Esse é o caso do Carousel onde precisamos importar o CSS e o JS do Bootstrap.

O Bootstrap localiza e manipula os elementos através do atributo data-bs-*.

Durante a construção do Carousel utilizamos alguns desses atributos como:

data-bs-ride, data-bs-target, data-bs-slide e data-bs-slide-to.

Exemplo desenvolvido:
```
<div class="container col-7">
    <div class="row">
        <div class="col">
            <div id="carousel-exemplo" class="carousel carousel-fade slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="3000">
                        <img class="d-block w-100" src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg" alt="imagem default">
                        <div class="carousel-caption">
                            <h2>Imagem Paisagem 1</h2>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="3000">
                        <img class="d-block w-100" src="https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_960_720.jpg" alt="imagem default">
                        <div class="carousel-caption">
                            <h2>Imagem Paisagem 2</h2>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="3000">
                        <img class="d-block w-100" src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg" alt="imagem default">
                        <div class="carousel-caption">
                            <h2>Imagem Paisagem 3</h2>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carousel-exemplo" data-bs-slide="prev" title="prev">
                    <span class="carousel-control-prev-icon"></span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carousel-exemplo" data-bs-slide="next" title="next">
                    <span class="carousel-control-next-icon"></span>
                </button>
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carousel-exemplo" data-bs-slide-to="0" class="active"></button>
                    <button type="button" data-bs-target="#carousel-exemplo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#carousel-exemplo" data-bs-slide-to="2"></button>
                </div>
            </div>
        </div>
    </div>
</div>
```

<br>

### ✅ Questionário
Através de qual atributo informamos ao botão de avançar que ele deve trocar para o próximo slide?

A- data-bs-slide

B- data-bs-to-slide

C- data-bs-slide-to

D- data-bs-carousel-to 

Resposta: Letra A.