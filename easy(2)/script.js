const isPrime = (num) => {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num !== 1;
};
console.log(isPrime(5));

var arr = [1, 5, 17, 15, 30];

let primes = arr.filter(isPrime);
console.log(primes);
