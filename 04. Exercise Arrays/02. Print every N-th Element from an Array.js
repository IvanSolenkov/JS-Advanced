function solve(arr) {
    let delimiter = +arr.pop();
    for (let i = 0; i < arr.length; i+=delimiter) {
        console.log(arr[i]);
    }
}

solve(['5',
    '20',
    '31',
    '4',
    '20',
    '2']);