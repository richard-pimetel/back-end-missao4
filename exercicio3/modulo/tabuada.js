
// Função para gerar a tabuada
function gerarTabuada(tabuadaInicial, tabuadaFinal, contadorInicial, contadorFinal){
    let tabuadaI = tabuadaInicial
    let tabuadaF = tabuadaFinal
    let contadorI = contadorInicial
    let contadorF = contadorFinal
    let status = false

    // Chama a função de validação
    if(validarDados(tabuadaI, tabuadaF, contadorI, contadorF)){
        status = true

        // Laço para percorrer as tabuadas
        while(parseInt(tabuadaI) <= parseInt(tabuadaF)){
            console.log('Tabuada do', tabuadaI)
            let contador = parseInt(contadorI)

            // Laço para calcular os valores da tabuada
            while(contador <= parseInt(contadorF)){
                console.log(tabuadaI, 'x', contador, '=', parseInt(tabuadaI) * contador)
                contador++
            }

            tabuadaI++
        }
    }

    return status
}

// Função para gerar outra tabuada
const gerarNovasTabuadas = (tabuadaInicial, tabuadaFinal, contadorInicial, contadorFinal) =>{
    let tabuadaI = tabuadaInicial
    let tabuadaF = tabuadaFinal
    let contadorI = contadorInicial
    let contadorF = contadorFinal
    let status = false

    // Chama a função de validação
    if(validarDados(tabuadaI, tabuadaF, contadorI, contadorF)){
        status = true

        // Laço para percorrer as tabuadas
        for(let tabuadaI = parseInt(tabuadaInicial); tabuadaI <= parseInt(tabuadaFinal); tabuadaI++){
            console.log('Tabuada do', tabuadaI)

            // Laço para calcular os valores da tabuada
            for(let contador = parseInt(contadorInicial); contador <= parseInt(contadorFinal); contador++){
                // contador é o valor atual, definido por contadorI e contadorF
                console.log(tabuadaI, 'x', contador, '=', tabuadaI * contador)
            }
        }
    }

    return status
}

// Função de validação de dados 
const validarDados = function(tabuadaInicial, tabuadaFinal, contadorInicial, contadorFinal){
    let tabuadaI = tabuadaInicial
    let tabuadaF = tabuadaFinal
    let contadorI = contadorInicial
    let contadorF = contadorFinal
    let status = true

    // Validação de dados em branco
    if(tabuadaI == '' || tabuadaF == '' || contadorI == '' || contadorF == ''){
        console.log('ERRO: É obrigatório a entrada de todos os valores.')
        status = false

    // Validação de entrada de caracteres inválidos
    }else if(isNaN(tabuadaI) || isNaN(tabuadaF) || isNaN(contadorI) || isNaN(contadorF)){
        console.log('ERRO: Não é permitido a entrada de dados do tipo caracter.')
        status = false

    // Validação de intervalos de valores
    }else if (tabuadaI < 2 || tabuadaF > 100 || contadorI < 1 || contadorF > 50){
        console.log('ERRO: A tabuada deve ser entre 2 e 100, e os contadores entre 1 e 50.')
        status = false
    }

    return status
}

// Exporta as funções
module.exports = {
    gerarTabuada,
    gerarNovasTabuadas
}