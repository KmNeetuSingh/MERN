function createCounter() {
    let count = 2
  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    getcount(){
        return count
    }
  };
}
const counter = createCounter()
console.log(counter.increment())
console.log(counter.decrement())
console.log(counter.getcount())
