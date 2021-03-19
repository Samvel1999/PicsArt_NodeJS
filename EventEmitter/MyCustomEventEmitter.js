class MyEventEmitter {
    callbacks = {};
    
    on(name, cb) {
        if(typeof this.callbacks[name] === 'undefined') {
            this.callbacks[name] = [];
        }
        this.callbacks[name].push(cb);
    }

    emit(name, ...args) {
        if(typeof this.callbacks[name] === 'undefined') {
            return;
            this.callbacks[name](...args);
        }

        for(let cb of this.callbacks[name]) {
            cb(...args);
        }
    }

    eventNames() {
        return Object.keys(this.callbacks);
    }
}

let eventEmitter = new MyEventEmitter();

eventEmitter.on('event', (c) => {
    console.log(c);
});

eventEmitter.on('event', (a, b) => {
    console.log(a + b);
})

console.log(eventEmitter.eventNames());



eventEmitter.emit('event', 1, 5);