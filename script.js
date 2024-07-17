
// mostra preco, categoria, situação e classificação


function calcular() {

    //entrada de dados
    var price = Number(document.getElementById(`price`).value)
    var categoryValue = Number(document.getElementById(`categories`).value)
    var conditionValue = document.getElementById(`condition`).value
    var classification = ``
    var valid
    var valid2
    var valid3




    // inicio processamento
    // validação de entrada de dados
    price <= 0 ? valid = false : valid = true;



    if (categoryValue == 2 || conditionValue == `R`) {
        price += (price * 5 / 100)

    } else {
        price += (price * 8 / 100)
    }



    switch (categoryValue) {
        case 1:
            if (price <= 25) {
                price += (price * 5) / 100
            } else {
                price += (price * 12) / 100
            }
            break;
        case 2:
            if (price <= 25) {
                price += (price * 8) / 100
            } else {
                price += (price * 15) / 100
            }

            break;
        case 3:
            if (price <= 25) {
                price += (price * 10) / 100
            } else {
                price += (price * 18) / 100
            }
            break;

        default:
            categoryValue = `invalida`
            break;
    }



    switch (conditionValue) {
        case `R`:
            conditionValue = `precisa de refrigeração`
            break;
        case `N`:
            conditionValue = `não precisa de refrigeração`
            break;
        default:
            conditionValue = `invalida`
            break;
    }


    if (price <= 50) {
        classification = `barato`
    } else {
        if (price >= 50 && price < 120) {
            classification = `normal`
        } else {
            if (price >= 120) {
                classification = `caro`
            } else {
                classification = `Invalida`
            }
        }
    }
    //fim processamento



    //saidas de dados
    if (valid == true) {
        document.getElementById(`results`).innerHTML = `O novo preço do produto é ${price.toFixed(2)} <br>
                                                            A categoria é ${categoryValue}  <br>
                                                            A situação do produto é que ele ${conditionValue} <br>
                                                             A classificação do produto é ${classification}`

    } else {
        document.getElementById(`results`).innerHTML = `Insira o preço corretamente`
        
    }
















}