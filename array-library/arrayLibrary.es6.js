class ArrayLibrary {

    static take(array, n) {
        return (n > 0) ? array.slice(0, n) : [];
    }

    static skip(array, n) {
        return (n > 0) ? array.slice(n) : array;
    }

    static map(array, callback) {
        return array.map(callback);
    }

    static reduce(array, callback, initialValue) {
        return array.reduce(callback, initialValue);
    }

    static filter(array, callback) {
        return array.filter(callback);
    }

    static foreach(array, callback) {
        array.forEach(callback);
        return array;
    }

    static chain(array) {
        return new ArrayChainLibrary(array);
    }
}

class ArrayChainLibrary {

    constructor(array) {
        this.array = array;
        this._queue = [];
    }

    take(n) {
        this._queue.push(() => ArrayLibrary.take(this.array, n));

        return this;
    }

    skip(n) {
        this._queue.push(() => ArrayLibrary.skip(this.array, n));

        return this;
    }

    map(callback) {
        this._queue.push(() => ArrayLibrary.map(this.array, callback));

        return this;
    }

    reduce(callback, initialValue) {
        this._queue.push(() => ArrayLibrary.reduce(this.array, callback, initialValue));

        return this;
    }

    filter(callback) {
        this._queue.push(() => ArrayLibrary.filter(this.array, callback));

        return this;
    }

    foreach(callback) {
        this._queue.push(() => ArrayLibrary.foreach(this.array, callback));

        return this;
    }

    value() {
        for (let i = 0; i <= this._queue.length; i++) {
            this.array = this._queue.shift()();
        }

        return this.array;
    }
}