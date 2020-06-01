function ArrayHelper() {

    function take(array, n) {
        return array.slice(0, n);
    }

    function skip(array, n) {
        return array.slice(n, array.length);
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

    return {
        take: take,
        skip: skip,
        map: map,
        reduce: reduce,
        filter: filter,
        foreach: foreach
    }
}

ArrayChainLibrary = {
    chain: function (array) {
        return {
            take: function (number) {
                array = array.slice(0, number);
                return this;
            },
            skip: function (number) {
                array = array.slice(number, array.length);
                return this;
            },
            map: function (callback) {
                array = array.map(callback);
                return this;
            },
            reduce: function (callback, initialValue) {
                array = array.reduce(callback, initialValue);
                return this;
            },
            filter: function (callback) {
                array = array.filter(callback);
                return this;
            },
            foreach: function (callback) {
                array = array.forEach(callback);
                return this;
            },
            value: function(){
                return array;
            }
        }
    }
}