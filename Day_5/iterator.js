let fib = {

}

fib[Symbol.iterator] = function () {
    let a = 1;
    let b = 1;
    let count = 1;

    return {
        next: function () {

            if(count <= 2) {
                count++;
                return {
                    done: false,
                    value: 1
                }
            }

            let temp = b;
            b = a + b;
            a = temp;

            return {
                done: false,
                value: b
            }
        }
    }
}

let iterator = fib[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
