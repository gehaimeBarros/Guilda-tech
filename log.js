
var senha = $('#senha');
var olho = $("#olho");

olho.mousedown(function () {
    senha.attr("type", "text");
});

olho.mouseup(function () {
    senha.attr("type", "password");
});

$("#olho").mouseout(function () {
    $("#senha").attr("type", "password");
});


var user = [{
    "login ": "time@guilda.com ",
    "senha ": "admin"
},
];

function Login() {
    var inputEmail = document.getElementsByName('email')[0].value.toLowerCase();
    var inputSenha = document.getElementsByName('password')[0].value.toLowerCase();

    for (var u in user) {
        var us = user[u];
        if (us.login === inputEmail && us.senha === inputSenha) {
            setTimeout(() => {
                window.location.href = "./menu_tarefas_guilda.html";
            }, 1000);
            return true;

        } else {

        }
        setTimeout(() => {
            alert("FALSE ");
            window.location.reload();
        }, 4000);
        return false;
    }

}