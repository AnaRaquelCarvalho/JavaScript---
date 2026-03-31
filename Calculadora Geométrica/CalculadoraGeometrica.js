// Calculadora Geométrica
// Escreva um programa em javascript para calcular a área de diferentes formas geométricas. 
// O programa deve iniciar com um menu contendo as diferentes opções de cálculas. As opções devem ser:

// área do triângulo: base * altura / 2
function calcularAreaTriangulo() {
  const base = parseFloat(prompt("Informe a base do triângulo:"))
  const altura = parseFloat(prompt("Informe a altura do triângulo:"))
  return base * altura / 2
}

// -------------------------------------------------------------------------------------------------------
// área do retângulo: base * altura
function calcularAreaRetangulo() {
  const base = parseFloat(prompt("Informe a base do retângulo:"))
  const altura = parseFloat(prompt("Informe a altura do retângulo:"))
  return base * altura
}

//--------------------------------------------------------------------------------------------------------
// área do quadrado: lado²
function calcularAreaQuadrado() {
  const lado = parseFloat(prompt("Informe a área do quadrado:"))
  return lado * lado
}

// ------------------------------------------------------------------------------------------------------
// área do trapézio: (base maior + base menor) * altura / 2
function calcularAreaTrapezio() {
  const baseMenor = parseFloat(prompt("Informe a base menor do trapézio:"))
  const baseMaior = parseFloat(prompt("Informe a base maior do trapézio:"))
  const altura = parseFloat(prompt("Informe a altura do trapézio:"))
  return (baseMaior + baseMenor) * altura / 2
}

// -------------------------------------------------------------------------------------------------------
// área do círculo: pi * raio² (considere pi = 3.14)
function calcularAreaCirculo() {
  const raio = parseFloat(prompt("Informe o raio do círculo:"))
  return (3.14 * raio * raio)
}

// Um programa que usa funções sempre que possível para separar os procedimentos. O programa também contém
// A opção de “Sair” e enquanto ela não for escolhida deverá voltar ao menu principal.