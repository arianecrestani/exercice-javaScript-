const products = [
  {
    id: 1,
    title: "mens",
    price: 2,
  },
  {
    id: 2,
    title: "woman",
    price: 4,
  },
  {
    id: 1,
    title: "mens",
    price: 2,
  },
];

// como fazer ficar objetos unicos no array

// hashmap
//new Map cria um nova key e value

// const arrayUnique = [
//   ... new Map(products.map((item) => [item.id, item])).values(),
// ];

// // acessar as infos do array e modificar (forEach, map)
// arrayUnique.forEach((element) => {
//   const newArrray = products.filter((item)=> item.id === element.id)
//   element.quantity = newArrray.length
// })

// first way =
const arrayUnique = [
  ...new Map(products.map((item) => [item.id, item])).values(),
];
arrayUnique.map((element) => {
  // or forEach
  const newArrray = products.filter((item) => item.id === element.id);
  element.quantity = newArrray.length;
});

// second way=
const groupItems = (items) =>
  new Map(
    items.map((item) => [
      item.id,
      { ...item, quantity: items.filter((i) => i.id == item.id).length },
    ])
  ).values();

console.log(groupItems(products));
