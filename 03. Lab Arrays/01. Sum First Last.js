function solve(input) {
    let firstElement = input[0];
    let lastElement = input[input.length - 1];
    let result = +firstElement + +lastElement;
    console.log(result);
}

solve(['20', '30', '40']);