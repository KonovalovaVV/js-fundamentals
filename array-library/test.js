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

const arrayHelper = new ArrayHelper();

console.log("Take command result " + arrayHelper.take(testArray, 2));
console.log("Skip command result " + arrayHelper.skip(testArray, 2));
console.log("Map command result " + arrayHelper.map(testArray, mapFunction));
console.log("Reduce command result " + arrayHelper.reduce(testArray, reduceFunction, "Sequence of elements: "));
console.log("Filter command result " + arrayHelper.filter(testArray, filterFunction));
console.log("ForEach command result " + arrayHelper.foreach(testArray, foreachFunction));

console.log(ArrayChainLibrary.chain([1,2,3]).take(2).skip(1).value());