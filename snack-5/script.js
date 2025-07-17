const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]


const evenNums = nums.filter(element => {
  return element % 2 === 0
})

console.log(evenNums)

console.log(`------compatto--------`)

const evenNums1 = nums.filter(element => element % 2 === 0)

console.log(evenNums1)

