function solve() {
    let firstInput = document.getElementById('text');
    let secondInput = document.getElementById('naming-convention');

    let inputValue = firstInput.value;
    let currentCase = secondInput.value;

    let split = inputValue.toLowerCase().split(' ').filter(a => a !== '');
    let output = "";
    
    if(currentCase === 'Pascal Case'){
        for (let word of split) {
            if(word[0] !== word[0].toUpperCase()){
                word = word.replace(word[0], word[0].toUpperCase())
            }
            output += word;
        }
    } else if(currentCase === 'Camel Case'){
        for (let word of split) {
            if(word[0] !== word[0].toUpperCase()){
                word = word.replace(word[0], word[0].toUpperCase())
            }
            output += word;
        }
        output = output.replace(output[0], output[0].toLowerCase())
    } else{
        output = "Error!"
    }
    document.getElementById('result').innerHTML = output;
}