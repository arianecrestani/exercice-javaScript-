function addTodo(list, todo) {
  list.push(todo);
  return list;
}

console.log(addTodo([],"boi") === ["boi"]);
