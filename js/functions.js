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
