function reverse(num){
    let res = 0
    while (num > 0){
        let digit = num % 10 
        res = res* 10 + digit
        num = Math.floor(num/10)
    }
    return res 
}
console.log(reverse([1234]))