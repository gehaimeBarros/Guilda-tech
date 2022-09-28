google.charts.load('current', {
    'packages': ['corechart']
});

function desenharPizza() {

    var tabela = new google.visualization.DataTable();
    tabela.addColumn('string', 'categorias');
    tabela.addColumn('number', 'valores');
    tabela.addRows([

        ['Gehaime', 80],
        ['Larissa', 1],
        ['Sanuel', 1],
        ['Rodrigo', 1],
    ]);

    var opcoes = {
        'title': 'Progresso Guilda',
        'height': 300,
        'width': 1000,
        'margin': 0,
        backgroundColor: '#ffd2f7'
    };

    var grafico = new google.visualization.PieChart(document.getElementById('graficoPizza'));
    grafico.draw(tabela, opcoes)
}

google.charts.setOnLoadCallback(desenharPizza);