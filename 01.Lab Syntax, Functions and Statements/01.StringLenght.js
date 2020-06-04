function solve(string1, string2, string3) {
    let sumLength;
    let averageLength;

    let str1 = string1.length;
    let str2 = string2.length;
    let str3 = string3.length;
    sumLength = str1 + str2 + str3;

    averageLength = sumLength / 3;
    console.log(sumLength);
    console.log(Math.round(averageLength));
}

solve('chocolate', 'ice cream', 'cake');