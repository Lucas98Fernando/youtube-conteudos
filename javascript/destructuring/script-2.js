const clubs = ["Liverpool", "Real Madrid", "Milan", "Barcelona"];

const [one, , three, four] = clubs;

console.log(one);
console.log(three);
console.log(four);

function fnArray() {
  return [2, 4];
}

const [num2, num1] = fnArray();

console.log(num1);
console.log(num2);
