// Função que realiza o calculo do imc e é ligada com a de validação de dados
function valorDoImc(peso,altura){

    // Parte reservada para a criação de variáveis que usaremos na função
    let valorPeso = peso
    let valorAltura = altura
    let imc
    let status = false

    // Troca da virgula por ponto para não dar interferência na validação de dados
    let pesoStr = String(valorPeso).replace(',','.')
    let alturaStr = String(valorAltura).replace(',','.')

    // Troca de tipo String para Number
    valorPeso = Number(pesoStr)
    valorAltura = Number(alturaStr)

    // Parte que faz o uso da função de tratamento para dar continuidade ao código
    if(validarDados(valorPeso,valorAltura)){

        // Troca do status para validar o funcionamento da função
        status = true
        //Fazendo a conta do imc
        imc = (valorPeso / (valorAltura * valorAltura)).toFixed(2)
    }

    return imc
}

// Função que realiza o tratamento de dados que o usuário nos passa
function validarDados(valor1,valor2){
    // Parte reservada para a criação de variáveis que usaremos na função
    let peso = valor1
    let altura = valor2
    let status = true

    // Troca da virgula por ponto 
    let pesoStr = String(peso).replace(',','.')
    let alturaStr = String(altura).replace(',','.')

    // Troca do tipo para continuar as condicionais
    peso = Number(pesoStr)
    altura = Number(alturaStr)

    // Condicional para tratar valores vazios
    if(peso == '' || altura == ''){
        console.log('* ERRO * --> TODOS OS CAMPOS DEVEM SER PREENCHIDOS')
        status = false
    // Condicional para tratar a entrada de Strings
    }else if( isNaN(peso) || isNaN(altura) ){
        console.log('* ERRO * --> NÃO É PERMITIDO STRINGS')
        status = false
    }


    return status
}

// Função que precisa do valor da 'ValordoIMC' para conseguir mostrar a classificação do imc
function categoria(valorImc){
    // Parte para as variaveis que vamos usar no resto da função
    let imc = valorImc
    let classificacao = ''

    // Condicionais de classificação
    if(imc <= 18.5){
        classificacao = `IMC --> ${imc} | Classificação --> ABAIXO DO PESO`
    }else if(imc >= 18.5 && imc <= 24.9){
        classificacao = `IMC --> ${imc} | Classificação --> PESO NORMAL`
    }else if(imc >= 25 && imc <= 29.9 ){
        classificacao = `IMC --> ${imc} | Classificação --> ACIMA DO PESO ( SOBREPRESO )`
    }else if(imc >= 30 && imc <= 34.9){
        classificacao = `IMC --> ${imc} | Classificação --> OBESIDADE I`
    }else if(imc >= 35 && imc <= 39){
        classificacao = `IMC --> ${imc} | Classificação --> OBESIDADE II`
    }else if(imc >= 40){
        classificacao = `IMC --> ${imc} | Classificação --> OBESIDADE III`
    }

    return classificacao
}

module.exports = {
    valorDoImc,
    categoria
}