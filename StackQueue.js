//Stack Implementation
function createStack() {
    let arr = [];

    return {
        push: function (val) {
            arr.push(val);
        },

        pop: function () {
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

