// Função que gera as listas  de números pares e impares
function geradorDeListas(numeroInicial, numeroFinal){
    // Parte reservada para a criação das variáveis que vamos utilizar
    let inicio = numeroInicial
    let final = numeroFinal
    let contadorPar = 0
    let contadorImpar = 0
    let status = false

    // Condiconal que chama a função de validar dados
    if(validarDados(inicio, final)){
        status = true
        console.log('Lista de números PARES')

        // Repetição for por conta do limite pré fixo que faz a lista dos pares
        for(let contador = inicio; contador <= final; contador += 1){
            if (contador % 2 === 0) {

                console.log(contador)
                contadorPar += 1

            }
        }

        console.log(`Quantidade de números pares encontrados --> ${contadorPar}`)


        console.log('Lista de números IMPARES')

        // Repetição for por conta do limite pré fixo que faz a lista dos impares
        for(let contador = inicio; contador <= final; contador += 1){
            if (contador % 2 !== 0) {

                console.log(contador)
                contadorImpar += 1

            }
        }

        console.log(`Quantidade de números pares encontrados --> ${contadorImpar}`)
    }

    return status
}


// Função para a validação das entradas
function validarDados(numeroInicial, numeroFinal){
    // Parte reservada para criação de variáveis que vamos usar
    let inicio = numeroInicial
    let final = numeroFinal
    let status = true

    // Condicionais de validação
    if(inicio == final){
        console.log("* ERRO * -- NÃO É PERMITIDO A ENTRADA DE VALORES IGUAIS")
        status = false
    }else if(inicio > final){
        console.log("* ERRO * -- NÃO É PERMITIDO O INICIO SER MAIOR QUE O FINAL")
        status = false
    }else if(inicio < 0 && inicio > 500){
        console.log("* ERRO * -- O VALOR DE INICIO DEVE ESTAR ENTRE 0 E 500")
        status = false
    }else if(final < 100 && final > 100){
        console.log("* ERRO * -- O VALOR DO FINAL DEVE ESTAR ENTRE 100 e 1000")
        status = false
    }else if(inicio === '' || final === ''){
        console.log("* ERRO * -- NÃO É PERMITIDO CAMPOS VAZIOS")
        status = false
    }

    return status
}

module.exports = {
    geradorDeListas
}