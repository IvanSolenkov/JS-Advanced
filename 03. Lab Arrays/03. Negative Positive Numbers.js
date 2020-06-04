function solve(arr) {
    let newArray = [];

    for (let i = 0; i <= arr.length - 1; i++) {
        if(arr[i] < 0 ){
            newArray.unshift(arr[i]);
        }else{
            newArray.push(arr[i]);
        }
    }

    for (let number of newArray) {
        console.log(number);
    }
}

solve([3, -2, 0, -1]);