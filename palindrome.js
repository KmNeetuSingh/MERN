// function Anagram(str1 , str2) {
//     let as = str1.split(' ').sort().join(' ')
//     let ast = str2.split(' ').sort().join(' ')
//     return as === ast
// }
// console.log(Anagram("asa" ,"asa"))
function palindrom(str1, str2) {
    let a = str1.split(' ').reverse().join('')
    let b = str2.split(' ').reverse().join('')
    return a === b
}
console.log(palindrom("ase" , "asde"))