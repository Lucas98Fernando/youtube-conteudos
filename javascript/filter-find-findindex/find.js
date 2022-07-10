const alunos = [
  { id: 1, nome: "Lucas", media: 6.5, idade: 23 },
  { id: 2, nome: "João", media: 8.5, idade: 20 },
  { id: 3, nome: "Ana", media: 9.0, idade: 18 },
  { id: 4, nome: "Pedro", media: 6.0, idade: 17 },
  { id: 5, nome: "Maria", media: 7.0, idade: 30 },
];

// Encontrar o primeiro aluno que tiver mais de 30 anos

// function maisDe30(elemento, index, array) {
//   return elemento.idade >= 20;
// }

console.log(alunos.find((elemento) => elemento.idade >= 20));
