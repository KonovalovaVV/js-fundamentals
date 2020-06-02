function ArrayLibrary() {

    function take(array, n) {
        if (n < 0) {
            return array.slice(n);
        } else {
            return array.slice(0, n);
        }
    }

    function skip(array, n) {
        if (n > 0) {
            return array.slice(n);
        } else {
            return array.slice(0, n);
        }
    }

    function map(array, callback) {
        return array.map(callback);
    }

    function reduce(array, callback, initialValue) {
        return array.reduce(callback, initialValue);
    }

    function filter(array, callback) {
        return array.filter(callback);
    }

    function foreach(array, callback) {
        return array.forEach(callback);
    }

    function chain(array) {
        var _queue = [];

        return {
            take: function (number) {
                function fn(number) {
                    return function () {
                        array = take(array, number);
                    }
                }
                _queue.push(fn(number));
                return this;
            },
            skip: function (number) {
                function fn(number) {
                    return function () {
                        array = skip(array, number);
                    }
                }
                _queue.push(fn(number));
                return this;
            },
            map: function (callback) {
                function fn(callback) {
                    return function () {
                        array = map(array, callback);
                    }
                }
                _queue.push(fn(callback));
                return this;
            },
            reduce: function (callback, initialValue) {
                function fn(callback, initialValue) {
                    return function () {
                        array = reduce(array, callback, initialValue);
                    }
                }
                _queue.push(fn(callback, initialValue));
                return this;
            },
            filter: function (callback) {
                function fn(callback) {
                    return function () {
                        array = filter(array, callback);
                    }
                }
                _queue.push(fn(callback));
                return this;
            },
            foreach: function (callback) {
                function fn(callback) {
                    return function () {
                        array = foreach(array, callback);
                    }
                }
                _queue.push(fn(callback));
                return this;
            },
            value: function () {
                _queue.forEach(function (fn) {
                    fn();
                });
                return array;
            }
        }
    }

    return {
        take: take,
        skip: skip,
        map: map,
        reduce: reduce,
        filter: filter,
        foreach: foreach,
        chain: chain
    }
}