// Criar um programa que calcula a média
// das turmas de alunos e envia
// mensagem do cálculo da média.

const alunosdaturmaA = [
    {
        nome: "Elizeu",
        nota: 9.8
    },
    {
        nome: "Eduardo",
        nota: 5
    },
    {
        nome: "Junior",
        nota: 2
    }
]

const alunosdaturmaB = [
  {
      nome: "Roberto",
      nota: 5
  },
  {
      nome: "Leonardo",
      nota: 6
  },
  {
      nome: "Felipe",
      nota: 2
  }
]

function calculaMedia(alunos) {
  return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
}


const media1 = calculaMedia(alunosdaturmaA)
const media2 = calculaMedia(alunosdaturmaB)


function enviaMensagem(media, turma) {
  if (media > 5) {
    console.log('A media da turma ',turma,'foi de',media,'.Parabéns!')
  } else {
    console.log('A media da turma',turma,'foi menor menor que 5')
  }
}

enviaMensagem(media1, 'turmaA')
enviaMensagem(media2, 'turmaB')