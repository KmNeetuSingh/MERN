function deepClone(obj, hash = new WeakMap()) {
  if (obj === null || typeof obj !== "object") return obj;

  if (hash.has(obj)) return hash.get(obj); // prevent circular refs

  const clone = Array.isArray(obj) ? [] : {};
  hash.set(obj, clone);

  for (let key in obj) {
    clone[key] = deepClone(obj[key], hash);
  }

  return clone;
}

// Test
const original = {
  a: 1,
  b: {
    c: 2,
    d: [3, 4]
  }
};

const copy = deepClone(original);
console.log(copy); // deep copy
console.log(copy === original); // false

