function sum(a: number, b: number) {
  return a + b;
}

function sumOf(numbers: []) {
  let result = 0;
  numbers.forEach((data: number) => {
    result += data;
  });

  return result;
}

export { sum, sumOf };
