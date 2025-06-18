function Anagram(str1 , str2) {
    let as = str1.split(' ').reverse().join(' ')
    let ast = str2.split(' ').reverse().join(' ')
    return as === ast
}
console.log(Anagram("asa" ,"asa"))