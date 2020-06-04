function solve(num) {
    return function (numToAdd) {
        return num + numToAdd;
    }
}
let addend = solve(5);
console.log(addend(3));