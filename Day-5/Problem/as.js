function min(arr){
    arr.length === 0
    min =  Infinity
    for (let i = 0 ; i <arr.length ; i++){
      min = arr[i]
    }
    return min ? null : min

}
console.log(min([1,23,3,4]))