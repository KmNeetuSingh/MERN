function secondmax(arr){
    let max = -Infinity
    let secondmax = -Infinity
    for(let i = 0 ; i < arr.length ; i++){
        let num = arr[i]
        if(num >max){
            secondmax = max
            max = num
        }
        else {
            secondmax = max
        }
    }
    return  secondmax === -Infinity ? null : secondmax
}
console.log(secondmax([1,2,3,3,4]))