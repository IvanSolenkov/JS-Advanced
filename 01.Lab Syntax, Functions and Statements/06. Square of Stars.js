function solve(starsCount) {
    let star = '* ';

    for (let i = 0; i < starsCount; i++) {
        let result = star.repeat(starsCount);
        console.log(result);
    }
}