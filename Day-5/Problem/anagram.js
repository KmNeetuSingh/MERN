function anagram(str1, str2){
    let a = str1.split('').sort().join('')
    let n = str2.split('').sort().join('')
    return a === n
}
console.log(anagram("listen", "silent"))