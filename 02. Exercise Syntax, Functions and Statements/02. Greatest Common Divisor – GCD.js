function solve(num1, num2) {
    let result;
    while ((num1 % num2) > 0){
        result = num1 % num2;
        num1 = num2;
        num2 = result;
    }
    return num2;
}

console.log(solve(15, 5));
