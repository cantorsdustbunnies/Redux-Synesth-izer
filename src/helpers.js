export const isNumber = input => {
	return !isNaN(input);
};
export const isLetter = input => {
	return isNaN(input);
};

export const sortAlphaNumeric = (a, b) => {
	//if both are numbers, sort normally;
	if (isNumber(a) && isNumber(b)) {
		return a - b;
	}
	// if both are letters sort by size;
	else if (isLetter(a) && isLetter(b)) {
		if (a < b) {
			return -1;
		} else if (a > b) {
			return 1;
		} else {
			return 0;
		}
	}
	//if they are different, sort in reverse
	else if ((isLetter(a) && isNumber(b)) || (isNumber(a) && isLetter(b))) {
		if (a < b) {
			return 1;
		} else if (a > b) {
			return -1;
		} else {
			return 0;
		}
	}
};

export const parseColor = color => {
	return `rgba(${color.r},${color.g},${color.b},${color.a})`;
};
