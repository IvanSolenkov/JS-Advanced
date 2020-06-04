function solve(arr) {
    let rotations = +arr.pop() % arr.length;
    for (let i = 0; i < rotations; i++) {
        let firstRotate = arr.pop();
        arr.unshift(firstRotate);
    }
    console.log(arr.join(' '));
}

solve(['1', '2', '3', '4', '2']);
solve(['Banana', 'Orange', 'Coconut', 'Apple', '15']);