// i. Factorial
function factorial(n) {
  if(n < 0) return "Invalid";
  if (n === 0 || n === 1) return 1;
  let fact = 1;
  for(let i = 2; i <= n; i++) {
    fact *= i;
  }
  return fact;
}

// ii. Fibonacci series up to n
function fibonacci(n) {
  let fib = [0, 1];
  for(let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib.slice(0, n+1);
}

// iii. Prime numbers up to n
function primes(n) {
  let primeList = [];
  for(let i = 2; i <= n; i++) {
    let isPrime = true;
    for(let j = 2; j <= Math.sqrt(i); j++) {
      if(i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if(isPrime) primeList.push(i);
  }
  return primeList;
}

// iv. Palindrome check
function isPalindrome(str) {
  let s = str.toString();
  return s === s.split('').reverse().join('');
}
