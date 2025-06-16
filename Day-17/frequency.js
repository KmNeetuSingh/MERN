function frequnecy(arr){
    let freq= {}
    for(let i = 0 ; i <arr.length ; i++){
        let it = arr[i]
        if(freq[it]){
            freq[it] ++
        }
        else{
            freq[it] = 1
        }
    }
    return freq

}
console.log(frequnecy([1,23,331,1,1]))