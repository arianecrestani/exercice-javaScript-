function sum(a, b) {
  if (a === undefined) {
    a = 0;
  }
  if (b === undefined) {
    b = 0;
  }
  return Number(a) + Number(b);
}

console.log(sum(1, 2) === 3);
console.log(sum(2, 2) === 4);
console.log(sum(4.5, 4.5) === 9);
console.log(sum("2", 2) === 4);
console.log(sum("2", "2") === 4);
console.log(sum("2.5", "2") === 4.5);
console.log(sum(undefined, 2) === 2);
console.log(sum(2, undefined) === 2);
// console.log(sum(undefined, undefined) === 0);
console.log(sum(undefined, 2));

function addTodo(todo, list) {
  list.push(todo);
  return list;
}

console.log(addTodo("boi", []) === ["boi"]);
