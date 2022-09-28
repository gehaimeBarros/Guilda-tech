$(document).ready(function () {
    $("#signup-form").submit(function () {
        var nm1 = $("#name1").val();
        var ps1 = $("#pass1").val();
        localStorage.setItem("n1", nm1);
        localStorage.setItem("p1", ps1);

    });

    $("#login-form").submit(function () {
        var enteredName = $("#name2").val();
        var enteredPass = $("#pass2").val();

        var storedName = localStorage.getItem("n1");
        var storedPass = localStorage.getItem("p1");

        if (enteredName == storedName && enteredPass == storedPass) {
            window.open('./menuGuildaTech.html', '_blank');
        }
        else {
            $.confirm({
                title: '<b style="color: red;">Alerta <i class="fa-sharp fa-solid fa-circle-exclamation"></i></b>',
                content: '<b>Usuário e senha não correspondem!.</b>',
                boxWidth: '30%',
                type: 'red',
                useBootstrap: false,
                autoClose: 'fechar|2000',
                buttons: {
                    fechar: {
                        btnClass: 'btn-red',
                        fechar: function () {
                        }
                    }
                }
            });
        }

    });

});

const switchModal = () => {
    const modal = document.querySelector('.modal')
    const actualStyle = modal.style.display
    if (actualStyle == 'block') {
        modal.style.display = 'none'
    }
    else {
        modal.style.display = 'block'
    }
}

const btn = document.querySelector('.modalBtn')
btn.addEventListener('click', switchModal)

window.onclick = function (event) {
    const modal = document.querySelector('.modal')
    if (event.target == modal) {
        switchModal()
    }
}

const form = document.getElementById('login-form')
form.addEventListener('submit', e => {
    e.preventDefault()
    console.log('Deu certo')
})