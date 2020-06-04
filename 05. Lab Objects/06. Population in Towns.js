function solve(input) {
    let total = new Map();
    for (let dataRow of input) {
        let [town, population] = dataRow.split(/\s*<->\s*/);
        population = +population;
        if(total.has(town)){
            total.set(town, total.get(town) + population);
        }
        else {
            total.set(town, population);
        }
    }
    for (let [town, sum] of total) {
        console.log(town + " : " + sum);
    }
}

solve(['Silent Hill <-> 0','Tin City <-> 0','King Island <-> 0','Kern <-> 0','Three Saints Bay <-> 1']);