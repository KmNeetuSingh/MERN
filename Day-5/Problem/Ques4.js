function reve(str) {
    let s = ""
    for (let i = str.length- 1; i >= 0 ; i--){
        s += str[i]
    }
    return s
}
console.log(reve("hello"))