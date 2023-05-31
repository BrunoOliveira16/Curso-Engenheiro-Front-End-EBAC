$('document').ready(function() {
    $('form').submit(function(e) {
        e.preventDefault();

        const tarefa = $('#adicionar-tarefa').val();
        const novaTarefa = $(`
            <li><div class="box"></div>${tarefa}</li>
        `);
        $(novaTarefa).appendTo('#lista-tarefa');
        $('#adicionar-tarefa').val('');
    })

    $('#lista-tarefa').on('click', 'li', function() {
        $(this).toggleClass('line-through');
    })
});