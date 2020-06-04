function solve(input) {
    let arr = String(input).split('');
    let isSame = true;
    let firstDigit = arr[0];

    arr.forEach(function (element) {
        if(element !== firstDigit){
        isSame = false;
        }
    });
    console.log(isSame);
    let sum = 0;
    sum = input.toString().split('').map(Number).reduce((a, b) =>{
        return a + b;
    }, 0);
    console.log(sum);
}

solve(2222222);