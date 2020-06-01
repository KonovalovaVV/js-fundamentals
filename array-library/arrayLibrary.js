class ArrayHelper {
    static take(array, n) {
        return array.slice(0, n);
    }

    static skip(array, n) {
        return array.slice(n, array.length);
    }

    static map(array, callback){
        return array.map(callback);
    }

    static reduce(array, callback, initialValue){
        return array.reduce(callback, initialValue);
    }

    static filter(array, callback){
        return array.filter(callback);
    }

    static foreach(array, callback){
        return array.foreach(callback);
    }
}

let testArray = ["Item1", "Item2", "Item3"];

alert("Take command result " + ArrayHelper.take(testArray, 2));

alert("Skip command result " + ArrayHelper.skip(testArray, 2));

function mapFunction(item){
    return "modified " + item;
}

alert("Map command result " + ArrayHelper.map(testArray, mapFunction));

function reduceFunction(result, item){
    return result + item + ", ";
}

alert("Reduce command result " + ArrayHelper.reduce
     (testArray, reduceFunction, "Sequence of elements: "));

function filterFunction(item){
    return item == "Item2";
}

alert("Filter command result " + ArrayHelper.filter(testArray, filterFunction));

function forEachFunction(item){
    item += "!";
}

alert("ForEach command result " + ArrayHelper.foreach(testArray, foreachFunction));
