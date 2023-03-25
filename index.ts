function discountCalc(discountCode: number): number {
	let discount: number = 0;
	let discountDigitsArr: number[] = [];
	let pair: number = 0;
	const ERROR_MESSAGE: string = "[INCORECT DISCOUNT CODE!]";

	discountDigitsArr = converterString2Arr(discountCode);

	if (discountDigitsArr.length !== 8) {
		console.error(ERROR_MESSAGE);

		return discount;
	}

	pair = calculateDigitsPairs(discountDigitsArr);

	discount = finalDiscountCounter(discountDigitsArr, pair);

	return discount;
}

//	Add each number from string to arrey

function converterString2Arr(discountStr: number): number[] {
	let discountArr: number[] = [];

	for(let i: number = 0; i < 8; i++) {
		let buff: number = discountStr % 10;

		if (i < 8 && buff) {
			discountArr.push(buff);
			discountStr = (discountStr - buff) / 10;
		}
	}

	return discountArr.reverse();
}

function calculateDigitsPairs(discountArr: number[]): number {
	let pairRes: number = 0;

	for (let i = 0; i < discountArr.length; i++) {
		for (let j = i + 1; j <= i + 1; j++) {
			if (discountArr[i] % 2 !== 0 &&
				discountArr[j] % 2 !== 0 &&
				discountArr[j + 1] % 2 === 0
				) {
				if(discountArr[i] < discountArr[j]) {
					pairRes += 2;
				} else {
					pairRes += 1;
				}
			}
		}
	}

	return pairRes;
}

function finalDiscountCounter(discountArr: number[], pairNum: number): number {
	let minDiscount: number = minDiscountCounter(discountArr);

	if (pairNum === 2) {
		return 1000;
	}

	if (pairNum === 4) {
		return 2000;
	}

	return minDiscount;
}

function minDiscountCounter(discountArr: number[]) {
	let evenSum: number = 0;
	let oddSum: number = 0;

	for (let i = 0; i < discountArr.length; i++) {
		if (discountArr[i] % 2) {
			oddSum += discountArr[i];
		} else {
			evenSum += discountArr[i];
		}
	}

	if (evenSum > oddSum) {
		return 100;
	}

	return 0;
}

console.log(discountCalc(37283988));
