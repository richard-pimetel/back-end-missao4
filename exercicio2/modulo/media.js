function gerenciarMedias(alunoNome, nomeProfessor, sexoAluno, sexoProfessor, nomeCurso, nomeDisciplina, notas, entradaDeDados){
    let media = calcularMedia(notas)
    let status = false // Status inicial como false
  
    // Determinar o status do aluno
    if (media >= 70) {
      status = true // Aprovado
    } else if (media < 50) {
      status = false // Reprovado
    } else {
      entradaDeDados.question("Digite a nota do exame (entre 0 e 100): ", function(notaExame){
        notaExame = parseFloat(notaExame)
        let mediaFinalExame = (media + notaExame) / 2
        status = mediaFinalExame >= 60 // Aprovado no exame
        exibirRelatorio(alunoNome, nomeProfessor, sexoAluno, sexoProfessor, nomeCurso, nomeDisciplina, notas, media, status, notaExame)
      })
      return // Para evitar execução após a chamada assíncrona
    }
  
    exibirRelatorio(alunoNome, nomeProfessor, sexoAluno, sexoProfessor, nomeCurso, nomeDisciplina, notas, media, status)
  }
  
  function calcularMedia(notas){
    let soma = 0;
    for (let i = 0; i < 4; i++) { // Assume que sempre há 4 notas
      soma += notas[i]
    }
    return soma / 4 // Média de 4 notas
  }
  
  function exibirRelatorio(alunoNome, nomeProfessor, sexoAluno, sexoProfessor, nomeCurso, nomeDisciplina, notas, media, status, notaExame = null){
    let alunoStr = sexoAluno === 'M' ? 'aluno' : 'aluna'
    let professorStr = sexoProfessor === 'M' ? 'professor' : 'professora'
  
    console.log("\nRelatório do aluno:")
    console.log(`O ${alunoStr} [${alunoNome}] foi [${status ? 'aprovado' : 'reprovado'}] na disciplina [${nomeDisciplina}].`)
    console.log(`Curso: ${nomeCurso}`)
    console.log(`${professorStr} ${nomeProfessor}`)
    console.log(`Notas do aluno: ${notas}`)
    console.log(`Média Final: ${media.toFixed(2)}`)
  
    if(status){
      console.log(`Média final do Exame: ${(media + notaExame) / 2}`)
    } else {
      console.log("Média final do Exame: N/A")
    }
  }
  
  // Exporta a função
  module.exports = {
     gerenciarMedias 
};