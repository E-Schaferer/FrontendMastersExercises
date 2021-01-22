const isValidName = (name) => {
  if (typeof name === 'string' && name.length > 0) {
    let counter = 0;
    for (let i = 0; i < name.length; i += 1) {
      if (name[i] !== ' ') {
        counter += 1;
      }
    } 
    return counter > 2 ? true : false;
  } else {
    return false;
  }
}

const hoursAttended = (attended, length) => {
  if (
    attended === true 
    || length === true 
    || !attended 
    || !length
    ) {
    return false;
  }
  const attendedNum = Number(attended);
  const lengthNum = Number(length);
  if (
    !attendedNum 
    || !lengthNum 
    || attendedNum < 1 
    || lengthNum < 1 
    || attendedNum % 1 !== 0 
    || lengthNum % 1 !== 0 
    || lengthNum < attendedNum
    ) {
    return false;
  }
  return true;
}


// tests:
console.log(isValidName("Frank") === true);
console.log(hoursAttended(6,10) === true);
console.log(hoursAttended(6,"10") === true);
console.log(hoursAttended("6",10) === true);
console.log(hoursAttended("6","10") === true);

console.log(isValidName(false) === false);
console.log(isValidName(null) === false);
console.log(isValidName(undefined) === false);
console.log(isValidName("") === false);
console.log(isValidName("  \t\n") === false);
console.log(isValidName("X") === false);
console.log(hoursAttended("",6) === false);
console.log(hoursAttended(6,"") === false);
console.log(hoursAttended("","") === false);
console.log(hoursAttended("foo",6) === false);
console.log(hoursAttended(6,"foo") === false);
console.log(hoursAttended("foo","bar") === false);
console.log(hoursAttended(null,null) === false);
console.log(hoursAttended(null,undefined) === false);
console.log(hoursAttended(undefined,null) === false);
console.log(hoursAttended(undefined,undefined) === false);
console.log(hoursAttended(false,false) === false);
console.log(hoursAttended(false,true) === false);
console.log(hoursAttended(true,false) === false);
console.log(hoursAttended(true,true) === false);
console.log(hoursAttended(10,6) === false);
console.log(hoursAttended(10,"6") === false);
console.log(hoursAttended("10",6) === false);
console.log(hoursAttended("10","6") === false);
console.log(hoursAttended(6,10.1) === false);
console.log(hoursAttended(6.1,10) === false);
console.log(hoursAttended(6,"10.1") === false);
console.log(hoursAttended("6.1",10) === false);
console.log(hoursAttended("6.1","10.1") === false);