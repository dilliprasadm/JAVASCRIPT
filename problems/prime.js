function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
// console.log(isPrime(13));

function nthPrime(n) {
  if (n < 1) return null;
  let count = 0;
  let num = 2;
  while (count < n) {
    if (isPrime(num)) {
      count++;
      if (count === n) {
        return num;
      }
    }
    num++;
  }
}

console.log(nthPrime(1)); // Output: 2
console.log(nthPrime(2)); // Output: 3
console.log(nthPrime(10));
