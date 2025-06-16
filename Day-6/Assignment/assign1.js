//  Create a counter  closure ..when we create a  function inside
//  in with create a another funciton and return it then
//  it will called closure means  cant'access the  variable  from the
//  outside only you canacces withinthe return method .
 function createCounter() {
   let count = 0;

  return {
    increment() {
     count++;
      return count;    },
    decrement() {
      count--;
     return count;
    },
   getCount() {
           return count;
    }
  };
 }

//  Usagee................. 
const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.decrement()); // 0

