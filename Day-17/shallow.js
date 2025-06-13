function flattedArray(arr){
    let res = []
    for(let i = 0 ; i <arr.length  ; i++){
        if(Array.isArray(arr[i])){
            for (let j = 0 ; j < arr[i].length ; j++){
                res.push(arr[i][j])
            }
        }
        else{
            res.push(arr[i])
        }
    }
    return res
}
console.log(flattedArray([1,2,3,[4,5]]))
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
let as = Object.values(output).flat().filter(a => a.age > 20 )
console.log(as)
