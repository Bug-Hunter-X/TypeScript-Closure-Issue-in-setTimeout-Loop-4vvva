function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // Works fine

function printNumbers2(n: number): void {
  for (let i = 1; i <= n; i++) {
    (function(i) {
      setTimeout(() => {
        console.log(i);
      }, 0);
    })(i);
  }
}

printNumbers2(5); // Prints 1, 2, 3, 4, 5 correctly