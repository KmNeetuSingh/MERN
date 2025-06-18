function anagram(str1 , str2){
    let a = str1.split('').sort().join('')
    let b = str2.split('').sort().join('')
    return  a === b
}
console.log(anagram("listen" , "silent"))