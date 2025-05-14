function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      console.log("Fetching from cache");
      return cache[key];
    }

    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

// Example usage
function slowSquare(n) {
  for (let i = 0; i < 1e8; i++) {} // simulate heavy work
  return n * n;
}

const memoizedSquare = memoize(slowSquare);

console.log(memoizedSquare(5)); // calculates
console.log(memoizedSquare(5)); // from cache
