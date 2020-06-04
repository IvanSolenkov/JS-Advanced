function solve(input) {
    let sum = {};
    for (let i = 0; i < input.length; i+=2) {
        let town = input[i];
        let income = + input[i + 1];

        if(sum[town] === undefined){
            sum[town] = income;
        }
        else{
            sum[town] += income;
        }
    }
    console.log(JSON.stringify(sum));
}
solve(['Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4']);