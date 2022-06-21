const governmentForms = [
  {
    name: "Plutocracy",
    definition: "Rule by the wealthy",
  },
  {
    name: "Oligarchy",
    definition: "Rule by a small number of people",
  },
  {
    name: "Kleptocracy",
    definition: "Rule by the thieves",
  },
  {
    name: "Theocracy",
    definition: "Rule by a religious elite",
  },
  {
    name: "Democracy",
    definition: "Rule by the people",
  },
  {
    name: "Autocracy",
    definition: "Rule by a single person",
  },
];

const endCy = (governmentForm) =>
  governmentForm
    .filter(({ name }) => name.endsWith("cy"))
    .map(({ name }) => name);
console.log(endCy(governmentForms));

const finalCy = (list) => {
  let formsEndingWithCy = [];

  for (const forms of list) {
    if (forms.name.endsWith("cy")) {
      formsEndingWithCy.push(forms.name);
    }
  }
  return formsEndingWithCy;
};
console.log(finalCy(governmentForms));
