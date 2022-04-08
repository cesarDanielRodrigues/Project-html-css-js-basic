
// mostra preco, categoria, situação e classificação


function calcular() {

    //entrada de dados
    var preco = Number(document.getElementById(`preco`).value)
    var categoria = Number(document.getElementById(`categoria`).value)
    var situacao = document.getElementById(`situacao`).value
    var classificao = ``
    var valid
    var valid2
    var valid3




    // inicio processamento
    // validação de entrada de dados
    preco <= 0 ? valid = false : valid = true;



    if (categoria == 2 || situacao == `R`) {
        preco += (preco * 5 / 100)

    } else {
        preco += (preco * 8 / 100)
    }



    switch (categoria) {
        case 1:
            if (preco <= 25) {
                preco += (preco * 5) / 100
            } else {
                preco += (preco * 12) / 100
            }
            break;
        case 2:
            if (preco <= 25) {
                preco += (preco * 8) / 100
            } else {
                preco += (preco * 15) / 100
            }

            break;
        case 3:
            if (preco <= 25) {
                preco += (preco * 10) / 100
            } else {
                preco += (preco * 18) / 100
            }
            break;

        default:
            categoria = `invalida`
            break;
    }



    switch (situacao) {
        case `R`:
            situacao = `precisa de refrigeração`
            break;
        case `N`:
            situacao = `não precisa de refrigeração`
            break;
        default:
            situacao = `invalida`
            break;
    }


    if (preco <= 50) {
        classificao = `barato`
    } else {
        if (preco >= 50 && preco < 120) {
            classificao = `normal`
        } else {
            if (preco >= 120) {
                classificao = `caro`
            } else {
                classificao = `Invalida`
            }
        }
    }
    //fim processamento



    //saidas de dados
    if (valid == true) {
        document.getElementById(`resultado`).innerHTML = `O novo preço do produto é ${preco.toFixed(2)} <br>
                                                            A categoria é ${categoria}  <br>
                                                            A situação do produto é que ele ${situacao} <br>
                                                             A classificação do produto é ${classificao}`

    } else {
        document.getElementById(`resultado`).innerHTML = `Insira o preço corretamente`
        
    }
















}