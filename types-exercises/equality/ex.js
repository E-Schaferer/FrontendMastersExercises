const findAll = (target, array) => {
	const output = [];
	if (target == Infinity || target == -Infinity) {
		iterateInf(target, array, output);
	} else if (target == NaN) {
		iterateNaN(array, output);
	} else if (target === "") {
		iterateEmpty(array, output);
	} else if (
		target === 0 
		|| target === -0 
		|| target === "0" 
		|| target === "-0"
		) {
			iterateZero(target, array, output);
	} else {
		iterateReg(target, array, output);
	}
	console.log(output, target);
	return output;
}

const iterateInf = (target, input, output) => {
	for (let i = 0; i < input.length; i += 1) {
		if (target === Infinity && input[i] === Infinity) {
			output.push(Infinity);
		} else if (target === -Infinity && input[i] === -Infinity) {
			output.push(-Infinity);
		}
	}
	return output;
}

const iterateNaN = (input, output) => {
	for (let i = 0; i < input.length; i += 1) {
		if (input[i] === NaN) {
			output.push(NaN)
		}
	}
	return output;
}

const iterateZero = (target, input, output) => {
	for (let i = 0; i < input.length; i += 1) {
		if (1 / target == -Infinity && 1 / input[i] == -Infinity) {
			output.push(-0)
		} else if (typeof input[i] == 'number' || typeof input[i] == 'string' && input[i] !== "") {
		  if (1 / target == Infinity && 1 / input[i] == Infinity) {
			output.push(input[i])
		  }
		}
	}
	return output;
}

const iterateEmpty = (input, output) => {
	for (let i = 0; i < input.length; i += 1) {
		if (input[i] === "") {
			output.push("")
		}
	}
	return output;
}

const iterateReg = (target, input, output) => {
	for (let i = 0; i < input.length; i += 1) {
		if (target == input[i]) {
			output.push(input[i]);
		}
	}
	return output;
}

// tests:
var myObj = { a: 2 };

var values = [
	null, undefined, -0, 0, 13, 42, NaN, -Infinity, Infinity,
	"", "0", "42", "42hello", "true", "NaN", true, false, myObj
];

console.log(setsMatch(findAll(null,values),[null,undefined]) === true);
console.log(setsMatch(findAll(undefined,values),[null,undefined]) === true);
console.log(setsMatch(findAll(0,values),[0,"0"]) === true);
console.log(setsMatch(findAll(-0,values),[-0]) === true);
console.log(setsMatch(findAll(13,values),[13]) === true);
console.log(setsMatch(findAll(42,values),[42,"42"]) === true);
console.log(setsMatch(findAll(NaN,values),[NaN]) === true);
console.log(setsMatch(findAll(-Infinity,values),[-Infinity]) === true);
console.log(setsMatch(findAll(Infinity,values),[Infinity]) === true);
console.log(setsMatch(findAll("",values),[""]) === true);
console.log(setsMatch(findAll("0",values),[0,"0"]) === true);
console.log(setsMatch(findAll("42",values),[42,"42"]) === true);
console.log(setsMatch(findAll("42hello",values),["42hello"]) === true);
console.log(setsMatch(findAll("true",values),["true"]) === true);
console.log(setsMatch(findAll(true,values),[true]) === true);
console.log(setsMatch(findAll(false,values),[false]) === true);
console.log(setsMatch(findAll(myObj,values),[myObj]) === true);

console.log(setsMatch(findAll(null,values),[null,0]) === false);
console.log(setsMatch(findAll(undefined,values),[NaN,0]) === false);
console.log(setsMatch(findAll(0,values),[0,-0]) === false);
console.log(setsMatch(findAll(42,values),[42,"42hello"]) === false);
console.log(setsMatch(findAll(25,values),[25]) === false);
console.log(setsMatch(findAll(Infinity,values),[Infinity,-Infinity]) === false);
console.log(setsMatch(findAll("",values),["",0]) === false);
console.log(setsMatch(findAll("false",values),[false]) === false);
console.log(setsMatch(findAll(true,values),[true,"true"]) === false);
console.log(setsMatch(findAll(true,values),[true,1]) === false);
console.log(setsMatch(findAll(false,values),[false,0]) === false);

// ***************************

function setsMatch(arr1,arr2) {
	if (Array.isArray(arr1) && Array.isArray(arr2) && arr1.length == arr2.length) {
		for (let v of arr1) {
			if (!arr2.includes(v)) return false;
		}
		return true;
	}
	return false;
}