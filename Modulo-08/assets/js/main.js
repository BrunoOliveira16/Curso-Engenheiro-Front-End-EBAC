const form = document.getElementById('form-atividade');
const nomeAtividade = document.getElementById('nome-atividade');
const notaAtividade = document.getElementById('nota-atividade');
const mediaValor = document.getElementById('media-valor');
const mediaResultado = document.getElementById('media-resultado');
const botaoReset = document.getElementById('reset-btn');

const estaAprovado = '<img src="./assets/images/aprovado.png" alt="emoji de aprovação">';
const estaReprovado = '<img src="./assets/images/reprovado.png" alt="emoji de reprovação">';
const mediaAprovado = '<span class="resultado aprovado">Aprovado</span>';
const mediaReprovado = '<span class="resultado reprovado">Reprovado</span>';

const atividades = []
const notas = []
const mediaMinima = parseFloat(prompt("Digite a media minima: "));

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionarLinha();
    atualizarMediaFinal();
});


// Adicionar linhas na tabela
function adicionarLinha() {
    if(atividades.map(a => a.toLowerCase()).includes(nomeAtividade.value.toLowerCase())){
        alert(`A atividade: ${nomeAtividade.value} já foi inserida`)
    } else {
        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML += `
            <tr>
                <td>${nomeAtividade.value}</td>
                <td>${notaAtividade.value}</td>
                <td>${notaAtividade.value >= mediaMinima ? estaAprovado : estaReprovado}</td>
            </tr>
        `
        atividades.push(nomeAtividade.value);
        notas.push(parseFloat(notaAtividade.value));
    }
    
    nomeAtividade.value = '';
    notaAtividade.value = '';
}

// Calcular a media final
function calcularMediaFinal () {
    let somaDasNotas = 0;

    for(let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }
    return (somaDasNotas / notas.length).toFixed(2)
}

// Adicionar media final
function atualizarMediaFinal() {
    const mediaFinal = calcularMediaFinal();
    mediaValor.innerHTML = mediaFinal;
    mediaResultado.innerHTML = (mediaFinal >= mediaMinima ? mediaAprovado : mediaReprovado)
}

// Limpar Tabela
botaoReset.addEventListener('click', function(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = '';
    atividades.splice(0, atividades.length);
    notas.splice(0, notas.length);
    mediaValor.innerHTML = '';
    mediaResultado.innerHTML = '';
})