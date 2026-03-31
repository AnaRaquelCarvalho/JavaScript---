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
const nomes = personagens.map(function (personagem) {
  return personagem.nome
})

// ------------------------------------------------------------------------------
// Filter
const orcs = personagens.filter(function (personagem) {
  return personagem.raca === "Orc"
})

// ------------------------------------------------------------------------------
// Reduce
const nivelTotal = personagens.reduce(function (acumulador, personagem) {
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
console.log(nomes)
console.log(orcs)
console.log(nivelTotal)
console.log(racas)
console.log(personagens)

// -------------------------------------------------------------------------