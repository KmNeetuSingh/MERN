function frequncy(arr){
    let freq = {}
    for(let i = 0 ; i <arr.length ; i++){
        let item = arr[i]
        if(freq[item]){
            freq[item] ++
        }
        else {
          freq [item] = 1
        }
    }
    return freq
}
console.log(frequncy([1,1,1,1]))