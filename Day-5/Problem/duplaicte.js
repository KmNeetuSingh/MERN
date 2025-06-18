function removedduplicate(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let duplicate = false;
    for (let j = 0; j < res.length; j++) {
      if (arr[i] === res[j]) {
        duplicate = true;
        break;
      }
    }
    if (!duplicate) {
      res.push(arr[i]);
    }
  }
  return res;
}
console.log(removedduplicate([1,1,11,2]))
