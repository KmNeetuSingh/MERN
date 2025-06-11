function removeduplicate(arr){
    let res = []
    for(let i = 0 ; i <arr.length ; i++){
        let dupliacte = false
        for(let j = 0 ; j <res.length ; j++){
            if (arr[i] === res[j]){
                dupliacte = true
                break
            }
        }
        if(!dupliacte){
            res.push(arr[i])
        }
    }
    return res
}
console.log(removeduplicate([1,2,3,2,3]))