// High-Order Functions e Arrays - Parte 1
// Array usado nos exemplos:
const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]

// -----------------------------------------------------------------------------
// Map
const nomesFor = []
for (let i = 0; i < personagens.length; i++) {
  const personagem = personagens[i]
  nomesFor.push(personagem.nome)
}

// map
const nomesMap = personagens.map(function (personagem) {
  return personagem.nome
})

// ------------------------------------------------------------------------------
// Filter
const orcsFor = []
for (let i = 0; i < personagens.length; i++) {
  const personagem = personagens[i]
  if (personagem.raca === "Orc") {
    orcsFor.push(personagem)
  }
}

// filter
const orcsFilter = personagens.filter(function (personagem) {
  return personagem.raca === "Orc"
})

// ------------------------------------------------------------------------------
// Reduce
let nivelTotalFor = 0
for (let i = 0; i < personagens.length; i++) {
  nivelTotalFor += personagens[i].nivel
}

// reduce
const nivelTotalReduce = personagens.reduce(function (acumulador, personagem) {
  return acumulador + personagem.nivel
}, 0)

const racas = personagens.reduce(function (acumulador, personagem) {
  if (acumulador[personagem.raca]) {
    acumulador[personagem.raca].push(personagem)
  } else {
    acumulador[personagem.raca] = [personagem]
  }
  return acumulador
}, {})

// --------------------------------------------------------------------------
// Sort
personagens.sort(function (a, b) {
  return a.nivel - b.nivel
})

// --------------------------------------------------------------------------
// Resultados
console.log("nomes (for):", nomesFor)
console.log("nomes (map):", nomesMap)

console.log("orcs (for):", orcsFor)
console.log("orcs (filter):", orcsFilter)

console.log("nivel total (for):", nivelTotalFor)
console.log("nivel total (reduce):", nivelTotalReduce)

console.log("raças:", racas)
console.log("ordenado:", personagens)

// ---------------------------------------------------------------------------