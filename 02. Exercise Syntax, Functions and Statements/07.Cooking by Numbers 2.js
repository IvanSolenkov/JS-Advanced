function solve(input) {
    let firstElement = +input[0];

    for (let i = 0; i < input.length; i++) {
        if(input[i] === 'chop'){
            firstElement = firstElement / 2;
            console.log(firstElement);
        }
        else if(input[i] === 'dice'){
            firstElement = Math.sqrt(firstElement);
            console.log(firstElement);
        }
        else if(input[i] === 'spice'){
            firstElement = firstElement + 1;
            console.log(firstElement);
        }
        else if(input[i] === 'bake'){
            firstElement = firstElement * 3;
            console.log(firstElement);
        }
        else if(input[i] === 'fillet'){
            firstElement = firstElement - 0.20 * firstElement;
            console.log(firstElement);
        }
    }
}

solve(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);