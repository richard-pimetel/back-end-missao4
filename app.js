let imc = require('./exercicio1/modulo/classificacaoDoImc.js')
let medias = require('./exercicio2/modulo/media.js')
let tabuada = require('./exercicio3/modulo/tabuada.js')
let fatorial = require('./exercicio4/modulo/fatorial.js')
let lista = require('./exercicio5/modulo/listas.js')

let readline = require('readline')

let entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


entradaDeDados.question('Escolha uma opção: \n1. Calcular IMC \n2. Calcular Média \n3. Calcular Tabuada \n4. Calcular Fatorial \n5. Listar Números\n', function(opcao) {
    if(opcao === '1'){
        entradaDeDados.question('Digite seu peso (kg): ', function(peso){
            entradaDeDados.question('Digite sua altura (m): ', function(altura){
                let pesoFloat = parseFloat(peso.replace(',', '.'))
                let alturaFloat = parseFloat(altura.replace(',', '.'))
                let imcValue = imc.valorDoImc(pesoFloat, alturaFloat)
                if (imcValue) {
                    let classificacao = imc.categoria(imcValue)
                    console.log(`Seu IMC é: ${imcValue}`)
                    console.log(classificacao)
                }else{
                    console.log('* ERRO * --> Verifique as entradas e tente novamente')
                }
                entradaDeDados.close()
            })
        })
    }else if(opcao === '2'){
entradaDeDados.question('Digite o nome do aluno: ', function(nomeAluno){
    entradaDeDados.question('Digite o nome do professor: ', function(nomeProfessor){
        entradaDeDados.question('Digite o sexo do aluno (M/F): ', function(sexoAluno){
                entradaDeDados.question('Digite o sexo do professor (M/F): ', function(sexoProfessor){
                    entradaDeDados.question('Digite o nome do curso: ', function(nomeCurso){
                        entradaDeDados.question('Digite o nome da disciplina: ', function(nomeDisciplina){
                            entradaDeDados.question('Digite a nota 1: ', function(nota1){
                                entradaDeDados.question('Digite a nota 2: ', function(nota2){
                                    entradaDeDados.question('Digite a nota 3: ', function(nota3){
                                        entradaDeDados.question('Digite a nota 4: ', function(nota4){
                                            let notas = [parseFloat(nota1), parseFloat(nota2), parseFloat(nota3), parseFloat(nota4)]
                                            medias.gerenciarMedias(nomeAluno, nomeProfessor, sexoAluno, sexoProfessor, nomeCurso, nomeDisciplina, notas, entradaDeDados)
                                            entradaDeDados.close()
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
    
    }else if(opcao === '3'){
        entradaDeDados.question('Digite a tabuada inicial (entre 2 e 100): ', function(valor1) {
            let tabuadaInicial = valor1
        
            entradaDeDados.question('Digite a tabuada final (entre 2 e 100): ', function(valor2) {
                let tabuadaFinal = valor2
        
                entradaDeDados.question('Digite o contador inicial (entre 1 e 50): ', function(valor3) {
                    let contadorInicial = valor3
        
                    entradaDeDados.question('Digite o contador final (entre 1 e 50): ', function(valor4) {
                        let contadorFinal = valor4
        
                        // Chamando a função para calcular a tabuada
                        if (!tabuada.gerarTabuada(tabuadaInicial, tabuadaFinal, contadorInicial, contadorFinal)) {
                            console.log('Não foi possível processar a requisição.')
                        }
        
                        entradaDeDados.close()
                    })
                })
            })
        })
    }else if(opcao === '4'){
        entradaDeDados.question('Digite o valor para calcular o fatorial: ', function(valor){
            valor = parseInt(valor)
            if(valor){
                let resultado = fatorial.calculoDeFatorial(valor)
                console.log(resultado)
            }else{
                console.log('* ERRO * --> NÃO É PERMITIDO STRINGS OU VALORES VAZIOS')
            }
            entradaDeDados.close()
        })
    
    } else if (opcao === '5'){
        entradaDeDados.question('Digite o valor de início: ', function(inicio){
            inicio = parseInt(inicio)
            entradaDeDados.question('Digite o valor de fim: ', function(fim){
                fim = parseInt(fim)
                if(inicio && fim){
                    const status = lista.geradorDeListas(inicio, fim)
                    if(!status){
                        console.log('* ERRO * --> Verifique as entradas e tente novamente')
                    }
                }else{
                    console.log('* ERRO * --> NÃO É PERMITIDO STRINGS OU VALORES VAZIOS')
                }
                entradaDeDados.close();
            })
        })
    }else{
        console.log('Opção inválida!')
        entradaDeDados.close()
    }
})