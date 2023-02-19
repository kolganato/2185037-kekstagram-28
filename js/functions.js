const checkStringLength = (string, requiredLength) => string.length <= requiredLength;

const isStringPalindrome = (string) => {
  string = string.toLowerCase();
  string = string.replaceAll(' ','');
  let index = 0;
  for(let i = string.length; i >= 0; i--){
    if(string[index] === string[i - 1]){
      index++;
    }else{
      return false;
    }
  }
  return true;
};

const getNumbers = (string) => {
  string += '';
  let numbers = '';
  for(let i = 0; i < string.length; i++){
    numbers += parseInt(string[i],10);
  }
  return parseInt(numbers.replaceAll('NaN',''), 10);
};

const addSymbols = (string,minLength,symbols) => {
  while(string.length < minLength){
    const neededSymbols = symbols.slice(0,minLength - string.length);
    string = neededSymbols + string;
  }
  return string;
};

