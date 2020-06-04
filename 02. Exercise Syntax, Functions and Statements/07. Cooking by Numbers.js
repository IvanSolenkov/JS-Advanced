function solve(input) {
    let n = +input[0];
    let functions = {
        chop: (x) => x/2,
        dice: (x) => Math.sqrt(x),
        spice: (x) => x+1,
        bake: (x) => x*3,
        fillet: (x) => 0.8 * x
    };
    for (let i = 1; i < input.length; i++) {
        n = functions[input[i]](n);
        console.log(n);
    }
}

solve(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);