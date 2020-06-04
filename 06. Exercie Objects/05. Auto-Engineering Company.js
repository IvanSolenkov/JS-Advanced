function autoEngineeringCompany(arr) {
    let brands = new Map();
    for (let line of arr) {
        let tokens = line.split(" | ").filter(w => w !== "");
        let brand = tokens[0];
        let model = tokens[1];
        let quantity = Number(tokens[2]);

        if (brands.has(brand)) {
            if (brands.get(brand).has(model)) {
                brands.get(brand).set(model,  brands.get(brand).get(model) + quantity);
            } else {
                brands.get(brand).set(model, quantity);
            }
        } else {
            let modelsAndTotalSold = new Map();
            modelsAndTotalSold.set(model, quantity);
            brands.set(brand, modelsAndTotalSold);
        }
    }
    for (let [br, modell] of brands) {
        console.log(`${br}`);
        for (let [model, totalSold] of modell) {
            console.log(`###${model} -> ${totalSold}`);
        }
    }
}