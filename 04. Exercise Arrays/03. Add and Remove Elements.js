function solve(input) {
    let outputArr = [];
    for (let i = 0; i < input.length; i++) {
        let command = input[i];
        if(command === 'add'){
            outputArr.push(i + 1);
        }
        else if(command === 'remove'){
            outputArr.pop();
        }
    }
    console.log(outputArr.length > 0 ? outputArr.join('\n'): 'Empty');
}

solve(['add', 'add', 'remove', 'add', 'add']);