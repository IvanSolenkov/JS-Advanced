function solve(input) {
    let output = '';
    for (let i = 0; i < input.length; i++) {
        if(i % 2 === 0){
            output += input[i] + " ";
        }
    }
    console.log(output);
}

solve(['20', '30', '40']);