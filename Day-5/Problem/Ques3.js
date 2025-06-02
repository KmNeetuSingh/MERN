function Reverse(num){
    let  a = 0
    while(num >0){
        a = a*10 +num %10
        num  = Math.floor(num/10)
    }
    return a
}
console.log(Reverse(1233))