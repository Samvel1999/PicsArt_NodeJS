//Stack implementation
function createStack() {
    let arr = [];

    return {
        push: function (val) {
            arr.push(val);
        },

        pop: function () {
            if(arr.length === 0) {
                throw new Error("Stack is empty.")
            }
            return arr.pop();
        },

        peek: function () {
            return arr[arr.length - 1];
        },

        isEmpty: function () {
            return arr.length === 0;
        },

        size: function () {
            return arr.length;
        },

        toString: function () {
            let str = "[";

            for(let i = 0; i < arr.length; i++) {
                str += arr[i];
                if(i !== arr.length - 1) {
                    str += ", ";
                }
            }

            str += "]";
            return str;
        }

    }
}

let st = createStack();

st.push(6);
st.push(9);
st.push(3);
st.push(11);

console.log(st.toString());
st.pop();
console.log(st.pop());
console.log(st.toString());
console.log("top: " + st.peek());
console.log("size: " + st.size());
console.log("Is empty: " + st.isEmpty());
console.log("--------------------------------------------");


//Queue implementation
function createQueue() {
    let st1 = createStack();
    let st2 = createStack();

    return {
        enqueue: function (val) {
            st1.push(val);
        },

        dequeue: function () {
            if(st2.isEmpty()) {
                if(st1.isEmpty()) {
                    throw new Error("Queue is empty");
                }

                while(!st1.isEmpty()) {
                    st2.push(st1.pop());
                }
            }

            return st2.pop();
        },

        peek: function () {
            if(st2.isEmpty()) {
                if(st1.isEmpty()) {
                    throw new Error("Queue is empty");
                }

                while(!st1.isEmpty()) {
                    st2.push(st1.pop());
                }
            }

            return st2.peek();

        },

        isEmpty: function () {
            return st1.size() + st2.size() === 0;
        },

        size: function () {
            return st1.size() + st2.size();
        }
    }
}

let queue = createQueue();

queue.enqueue(3);
queue.enqueue(5);
queue.enqueue(9);
queue.enqueue(11);

console.log("size: " + queue.size());
console.log(queue.dequeue());
console.log("size: " + queue.size());
console.log("Is Empty: " + queue.isEmpty());
console.log("Top: " + queue.peek());



