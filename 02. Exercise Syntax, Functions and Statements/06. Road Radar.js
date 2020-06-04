function solve([speed, area]) {
    let limit = 0;
    let calculateOverLimit = (limit, speed) => {
        if(limit >= speed){
            return;
        }
        let overLimit = speed - limit;
        if(overLimit <= 20){
            console.log('speeding');
        }
        else if(overLimit <= 40){
        console.log('excessive speeding')
        }
        else if(overLimit > 40){
            console.log('reckless driving');
        }
    };
    
    switch (area) {
        case 'motorway':
            calculateOverLimit(130, speed);
            break;
        case 'interstate':
            calculateOverLimit(90, speed);
            break;
        case 'city':
            calculateOverLimit(50, speed);
            break;
        case 'residential':
            calculateOverLimit(20, speed);
            break;
    }
}

solve([40, 'city']);