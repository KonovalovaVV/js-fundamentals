var testArray = ["Item1", "Item2", "Item3"];

function foreachFunction(item) {
    item += "!";
}

function filterFunction(item) {
    return item == "Item2";
}

function reduceFunction(result, item) {
    return result + item + ", ";
}

function mapFunction(item) {
    return "modified " + item;
}

//let arrayLibrary = new ArrayLibrary();

console.log(ArrayLibrary
    .chain([1, 2, 3])
    .take(2)
    .map(mapFunction)
    .foreach(foreachFunction)
    .skip(1)
    .value());

console.log("Take command result " + ArrayLibrary.take(testArray, 1));
console.log("Skip command result " + ArrayLibrary.skip(testArray, -1));
console.log("Map command result " + ArrayLibrary.map(testArray, mapFunction));
console.log("Reduce command result " + ArrayLibrary.reduce(testArray, reduceFunction, "Sequence of elements: "));
console.log("Filter command result " + ArrayLibrary.filter(testArray, filterFunction));
console.log("ForEach command result " + ArrayLibrary.foreach(testArray, foreachFunction));