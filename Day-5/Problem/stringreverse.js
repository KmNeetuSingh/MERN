function stringrverse(str){
    let res = []
    for(let i = str.length-1 ; i >= 0 ; i--){
        res += str[i]
    }
    return res

}
console.log(stringrverse("asdefg"))