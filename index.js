function discountCalc(discountCode) {
    var discount = 0;
    var discountDigitsArr = [];
    var d = discountCode;
    var pair = 0;
    var evenSum = 0;
    var oddSum = 0;
    var ERROR_MESSAGE = "[INCORECT DISCOUNT CODE!]";
    //	Add each number from string to arrey
    for (var i = 0; i < 8; i++) {
        var buff = d % 10;
        if (i < 8 && buff) {
            discountDigitsArr.push(buff);
            d = (d - buff) / 10;
        }
    }
    discountDigitsArr.reverse();
    if (discountDigitsArr.length !== 8) {
        console.error(ERROR_MESSAGE);
        return discount;
    }
    for (var i = 0; i < discountDigitsArr.length; i++) {
        for (var j = i + 1; j <= i + 1; j++) {
            if (discountDigitsArr[i] % 2 !== 0 &&
                discountDigitsArr[j] % 2 !== 0 &&
                discountDigitsArr[j + 1] % 2 === 0) {
                if (discountDigitsArr[i] < discountDigitsArr[j]) {
                    pair += 2;
                }
                else {
                    pair += 1;
                }
            }
        }
        if (discountDigitsArr[i] % 2) {
            oddSum += discountDigitsArr[i];
        }
        else {
            evenSum += discountDigitsArr[i];
        }
    }
    if (pair === 2) {
        discount = 1000;
        return discount;
    }
    else if (pair === 4) {
        discount = 2000;
        return discount;
    }
    else if (evenSum > oddSum) {
        discount = 100;
        return discount;
    }
    return discount;
}
console.log(discountCalc(37283988));
