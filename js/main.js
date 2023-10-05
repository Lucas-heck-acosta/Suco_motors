$(document).ready(function() {
    $('#carousel').slick({
        autoplay: true
    })

    $('.menuHam').click(function() {
        $('nav').slideToggle()
    })

    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            veiculo: {
                required: false
            },
            mensagem: {
                required: true
            }
        },
        submitHandler: function(form)
        {
            console.log(form)
        },
        invalidHandler: function(evento, validador)
        {
            let camposIncorretos = validador.numberOfInvalids()
            console.log(camposIncorretos)
            if (camposIncorretos > 0)
            {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

    $('.lista-veiculos button').click(function() {
        const destino = $('#contato')

        const veiculoNome = $(this).parent().find('h3').text()

        $('#veiculo').val(veiculoNome)

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})