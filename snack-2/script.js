const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

people.forEach(element => {
  console.log(element.name)
});

console.log(`------compatto  --------`)

people.forEach(element => console.log(element.name))

console.log(`-------fatto giusto per pratica --------`)


people.forEach(element => {
  console.log(element.age)
})

console.log(`-------fatto giusto per pratica --------`)


people.forEach(element => console.log(element.age))