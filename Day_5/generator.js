function* fib(maxNum) {
    let a = 1;
    let b = 1;

    yield b;
    while(b < maxNum) {
        yield b;

        let temp = b;
        b = a + b;
        a = temp;
    }
}

let iterator = fib(15);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

