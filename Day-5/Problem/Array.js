let output = {
  under21: [
    { name: "Bob", age: 17, email: "bob@example.com" },
    { name: "Eve", age: 19, email: "eve@example.com" },
  ],
  inBetween: [
    { name: "Alice", age: 25, email: "alice@example.com" },
    { name: "Dave", age: 22, email: "dave@example.com" },
  ],
  above25: [{ name: "Carol", age: 30, email: "carol@example.com" }],
};

const above18 = Object.values(output).flat().filter(a => a.age >18)
console.log(above18)

const sortedByAge = Object.values(output)
  .flat()
  .sort((a, b) => a.age - b.age);
console.log(sortedByAge);
const allnames = Object.values(output).flat().some(user => user.email = "eve@example.com")
console.log(allnames)

// average age
const users = Object.values(output).flat()
const totoalage = users.reduce ((acc, curr) => acc  +  curr.age , 0 )
const averageage = totoalage/users.length
console.log(averageage)

let java = "javascript"
console.log(java.slice(3))