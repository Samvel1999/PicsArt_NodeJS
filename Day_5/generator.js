function* fib(maxNum) {
    let a = 1;
    let b = 1;
    let isPrintedFirstElements = false;

    while(b < maxNum) {
        if(!isPrintedFirstElements) {
            yield a;
            yield b;

            let temp = b;
            b = a + b;
            a = temp;

            isPrintedFirstElements = true;
        }
        else {
            yield b;

            let temp = b;
            b = a + b;
            a = temp;
        }
    }
}

let iterator = fib(3);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

