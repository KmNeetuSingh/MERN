function anagrams(str1 , str2){
    if (str1.length  !== str2.length) return false
    const  sorted1 = str1.split('').sort().join('')
    const sorted2 = str2.split('').sort().join('')
    return sorted1 === sorted2


}
console.log(anagrams("listen" , "silent"))