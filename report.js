function func() {
    var x = document.getElementById("myProgress");

    x.value = document.getElementById("resultado").value;
}

/*pdf generator*/
(function ($) {
    $.fn.createPdf = function (parametros) {

        var config = {
            'fileName': 'html-to-pdf'
        };

        if (parametros) {
            $.extend(config, parametros);
        }

        var quotes = document.getElementById($(this).attr('id'));

        html2canvas(quotes, {
            onrendered: function (canvas) {
                var pdf = new jsPDF('p', 'pt', 'letter');
                pdf.setFont("Arial");
                pdf.setFontType("normal");
                pdf.setFontSize(28);


                for (var i = 0; i <= quotes.clientHeight / 990; i++) {
                    var srcImg = canvas;
                    var sX = 0;
                    var sY = 980 * i;
                    var sWidth = 4000;
                    var sHeight = 980;
                    var dX = 0;
                    var dY = 0;
                    var dWidth = 4000;
                    var dHeight = 980;

                    window.onePageCanvas = document.createElement("canvas");
                    onePageCanvas.setAttribute('width', 4000);
                    onePageCanvas.setAttribute('height', 980);
                    var ctx = onePageCanvas.getContext('2d');
                    ctx.drawImage(srcImg, sX, sY, sWidth, sHeight, dX, dY, dWidth, dHeight);

                    var canvasDataURL = onePageCanvas.toDataURL("image/png", 1.0);
                    var width = onePageCanvas.width;
                    var height = onePageCanvas.clientHeight;

                    if (i > 0) {
                        pdf.addPage(612, 791);
                    }

                    pdf.setPage(i + 1);
                    pdf.addImage(canvasDataURL, 'PNG', 2, 40, (width * .52), (height * .62));
                }

                pdf.save(config.fileName);
            }
        });
    };
})(jQuery);


function createPDF() {
    $('#renderPDF').createPdf({
        'fileName': 'Report'
    });
}

/*charts*/

let chartData = []
const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Semana-2', 'Semana-3', 'Semana-1', 'Semana-5', 'Semana-4'],
        datasets: [{
            label: '#ofVotes',
            data: chartData,
            backgroundColor: [
                '#29465B',
                '#98AFC7',
                '#9932CC',
                '#033E3E',
                '#6AFB92',
            ],
            borderColor: [
                '#550A35',
                '#6960EC',
                '#FF6700',
                '#6AFB92',
                '#228B22',
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
        }
    }
});

function removeData(chart) {
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}

function addData(chart, data) {

    chart.data.datasets.forEach((dataset) => {

        dataset.data = [...data]
    });
    chart.update();
}

function updateChart(event) {

    event.preventDefault()
    angryValue = Number(document.getElementById('angry').value);
    sadValue = Number(document.getElementById('sad').value);
    happyValue = Number(document.getElementById('happy').value);
    anxiousValue = Number(document.getElementById('anxious').value);
    motivatedValue = Number(document.getElementById('motivated').value);
    tiredValue = Number(document.getElementById('tired').value);

    chartData = [
        angryValue,
        sadValue,
        happyValue,
        anxiousValue,
        motivatedValue,
        tiredValue
    ]
    removeData(myChart)
    addData(myChart, chartData)

}

var moodBtn = document.querySelectorAll('.mood-btn');
moodBtn.forEach(btn => {
    btn.addEventListener('click', updateChart, false)
})


/*date*/

jQuery(window).load(function ($) {
    atualizaRelogio();
});

function atualizaRelogio() {
    var momentoAtual = new Date();

    var vhora = momentoAtual.getHours();
    var vminuto = momentoAtual.getMinutes();
    var vsegundo = momentoAtual.getSeconds();

    var vdia = momentoAtual.getDate();
    var vmes = momentoAtual.getMonth() + 1;
    var vano = momentoAtual.getFullYear();

    if (vdia < 10) { vdia = "0" + vdia; }
    if (vmes < 10) { vmes = "0" + vmes; }
    if (vhora < 10) { vhora = "0" + vhora; }
    if (vminuto < 10) { vminuto = "0" + vminuto; }
    if (vsegundo < 10) { vsegundo = "0" + vsegundo; }

    dataFormat = vdia + " / " + vmes + " / " + vano;
    horaFormat = vhora + " : " + vminuto + " : " + vsegundo;

    document.getElementById("data").innerHTML = dataFormat;
    document.getElementById("hora").innerHTML = horaFormat;

    setTimeout("atualizaRelogio()", 1000);
}


function chartSheet() {
    var mensal = document.getElementsByName("usuario")
}

$(function () {

    var sels = $(".fake-sel");

    var imgs_ = [
        [
            './ok.png',
            './cross.png',
        ]
    ];

    sels.each(function (x) {

        var $t = $(this);

        var opts_ = '', first;

        $t.find("option").each(function (i) {

            if (i == 0) {
                first = "<li><img src='" + imgs_[x][i] + "'>" + $(this).text() + "</li>";
            }
            opts_ += "<li" + (i == 0 ? " class='ativo'" : '') + "><img src='" + imgs_[x][i] + "'>" + $(this).text() + "</li>";
        });

        $t
            .wrap("<div class='fake-sel-wrap'></div>")
            .parent()
            .css("width", $t.outerWidth() + 60)
            .append("<ul>" + first + opts_ + "</ul>")
            .find("ul")
            .on("click", function (e) {
                e.stopPropagation();
                $(".fake-sel-wrap ul")
                    .not(this)
                    .removeClass("ativo");
                $(this).toggleClass("ativo");
            })
            .find("li:not(:first)")
            .on("click", function () {
                $(this)
                    .addClass("ativo")
                    .siblings()
                    .removeClass("ativo")
                    .parent()
                    .find("li:first")
                    .html($(this).html());

                $t.val($(this).text());

            });
    });

    $(document).on("click", function () {
        $(".fake-sel-wrap ul").removeClass("ativo");
    });

});

$(function () {

    var sels = $(".fake-sels");

    var imgs_ = [
        [
            './ok.png',
            './cross.png',
        ]
    ];

    sels.each(function (x) {

        var $t = $(this);

        var opts_ = '', first;

        $t.find("option").each(function (i) {

            if (i == 0) {
                first = "<li><img src='" + imgs_[x][i] + "'>" + $(this).text() + "</li>";
            }
            opts_ += "<li" + (i == 0 ? " class='ativo'" : '') + "><img src='" + imgs_[x][i] + "'>" + $(this).text() + "</li>";
        });

        $t
            .wrap("<div class='fake-sels-wrap'></div>")
            .parent()
            .css("width", $t.outerWidth() + 60)
            .append("<ul>" + first + opts_ + "</ul>")
            .find("ul")
            .on("click", function (e) {
                e.stopPropagation();
                $(".fake-sels-wrap ul")
                    .not(this)
                    .removeClass("ativo");
                $(this).toggleClass("ativo");
            })
            .find("li:not(:first)")
            .on("click", function () {
                $(this)
                    .addClass("ativo")
                    .siblings()
                    .removeClass("ativo")
                    .parent()
                    .find("li:first")
                    .html($(this).html());

                $t.val($(this).text());

            });
    });

    $(document).on("click", function () {
        $(".fake-sel-wrap ul").removeClass("ativo");
    });

});

function validaMenssagem() {

    const numeroInput = document.getElementById('input-num-total');
    const valorMeta = document.getElementById('valor-meta');

    var TRUEINPUT = document.getElementById('cpfResponse');
    var FALSEINPUT = document.getElementById('cpfResponse');

    if (numeroInput.value == valorMeta.value) {
        TRUEINPUT.innerHTML = '<span style="color:#34ae42">meta alcaçada <i class="fa-sharp fa-solid fa-circle-check"></i></span>';
    } else if (numeroInput.value > valorMeta.value) {
        TRUEINPUT.innerHTML = '<span style="color:#00ff1e">meta ultrapassada <i class="fa-sharp fa-solid fa-trophy"></i></span>';
    } else if (numeroInput.value < valorMeta.value) {
        FALSEINPUT.innerHTML = '<span style="color:#ff0000">meta não alcançada <i class="fa-sharp fa-solid fa-circle-exclamation"></i></span>';
    } else {
        FALSEINPUT.innerHTML = '<span style="color:#fbff00">numero inválido <i class="fa-sharp fa-solid fa-circle-exclamation"></i></span>';
    }
}

function setValueTotal() {
    var nome = document.getElementById('input-num-total').value;
    document.getElementById('result-total-vl').value = nome + " cts.";
};

function progbar(instance) {
    instance.classList.add("prog-wrap");
    instance.innerHTML =
        `<div class="prog-bar"></div>
<div class="prog-percent">0%</div>`;
    instance.hbar = instance.querySelector(".prog-bar");
    instance.hpercent = instance.querySelector(".prog-percent");
    instance.set = (percent) => {
        instance.hbar.style.width = percent + "%";
        instance.hpercent.innerHTML = percent + "%";
    };

    return instance;
}

window.addEventListener("load", () => {
    let demo = progbar(document.getElementById("demo"));
    demo.set(1);

    document.getElementById("demoC").onclick = () => {
        demo.set(document.getElementById("demoB").value);
    };
});

angular
    .module('app', [])
    .controller('SomaController', SomaController);

function SomaController() {
    var vm = this;
}

angular
    .module('app', [])
    .controller('SomaController', SomaController);

function SomaController() {
    var vmm = this;
}

angular
    .module('app', [])
    .controller('SomaController', SomaController);

function SomaController() {
    var vsm = this;
}

angular
    .module('app', [])
    .controller('SomaController', SomaController);

function SomaController() {
    var ttm = this;
}

$(function () {

    $('.pointspossible').on('input', function () {
        calculate();
    });

    $('.pointsgiven').on('input', function () {
        calculate();
    });

    function calculate() {
        var pPos = parseInt($('.pointspossible').val());
        var pEarned = parseInt($('.pointsgiven').val());
        var perc = "";
        if (isNaN(pPos) || isNaN(pEarned)) {
            perc = " ";
        } else {
            perc = ((pEarned / pPos) * 100).toFixed();
        }

        $('.pointsperc').val(perc + "%");
    }

});

$(function () {

    $('.pointspossible-two').on('input', function () {
        calculate();
    });

    $('.pointsgiven-two').on('input', function () {
        calculate();
    });

    function calculate() {
        var pPos = parseInt($('.pointspossible-two').val());
        var pEarned = parseInt($('.pointsgiven-two').val());
        var perc = "";
        if (isNaN(pPos) || isNaN(pEarned)) {
            perc = " ";
        } else {
            perc = ((pEarned / pPos) * 100).toFixed();
        }

        $('.pointsperc-two').val(perc + "%");
    }

});

function realiza_calculo() {
    var campo1 = document.getElementById('input-num-1').value;
    var campo2 = document.getElementById('input-num-2').value;

    var maior = (parseFloat(campo1) > parseFloat(campo2) ? campo1 : campo2);
    var menor = (parseFloat(campo1) < parseFloat(campo2) ? campo1 : campo2);

    var result = ((menor / maior) * 100).toFixed();

    document.getElementById('resultado').value = result + "%";
    document.getElementById('demoB').value = result;
}

function valida () {
    var campoValor = document.getElementById('valor-meta');

    if (campoValor.value == "") {
        $.alert({
            title: '<b style="color: red;">Alert <i class="fa-sharp fa-solid fa-circle-exclamation"></i><b>',
            content: '<b style="color: #000000;">Campo <b style="color: red;">META</b> vazio, preencha.</b>',
            boxWidth: '50%',
            useBootstrap: false,
            type: "red",
        });
        campoValor.focus();
    } else {
        
    }
}