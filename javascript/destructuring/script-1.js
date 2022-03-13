// Destructuring (Desestruturação)

// A sintaxe de atribuição via desestruturação (destructuring assignment) é uma expressão JavaScript que possibilita extrair dados de arrays ou objetos em variáveis distintas.

const informations = {
  username: "Lucas",
  age: 23,
  job: "Programador",
  country: "Brasil",
  hobbies: {
    code: "60%",
    videogames: "30%",
    football: "10%",
  },
};

// const username = informations.username;
// const job = informations.job;
// const age = informations.age;
// const country = informations.country;

const {
  username: usernameUpdate,
  job,
  age,
  country,
  hobbies: { code },
} = informations;

console.log(usernameUpdate);
console.log(job);
console.log(age);
console.log(country);
console.log(code);
