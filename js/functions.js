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

checkStringLength('проверяемая строка', 20);
checkStringLength('проверяемая строка', 18);
checkStringLength('проверяемая строка', 10);

isStringPalindrome('топот');
isStringPalindrome('ДовОд');
isStringPalindrome('Кекс');
isStringPalindrome('Лёша на полке клопа нашёл ');

getNumbers('2023 год');
getNumbers('ECMAScript 2022');
getNumbers('1 кефир, 0.5 батона');
getNumbers('а я томат');
getNumbers(2023);
getNumbers(-1);
getNumbers(1.5);

addSymbols('1', 2, '0');
addSymbols('1', 4, '0');
addSymbols('q', 4, 'werty');
addSymbols('q', 4, 'we');
addSymbols('qwerty', 4, '0');
