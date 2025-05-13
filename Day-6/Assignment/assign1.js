// Create a counter  closure ..
// when we create a  fucniton inside in with create a another funciton and return it then it will called closure menas cant'access the  varicblae from th outside only you canacces withinthe return method
function createCounter() {
  let count = 0;

  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    getCount() {
      return count;
    }
  };
}

// Usage
const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.decrement()); // 0
