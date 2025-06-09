function removeDuplicate(arr) {
    let res = []
  for (let i = 0; i < arr.length; i++) {
    let duplicate = false;
    for(let j = 0 ; j < res.length ; j++){
        if (arr[i] == res[j]){
            duplicate = true;
            break
        }
    }
    if(!duplicate){
        res[res.length] = arr[i]
    }
  }
  return res 
}
console.log(removeDuplicate([1,1,2,3,4]))
