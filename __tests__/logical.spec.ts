const arrOfNumbers = [
  '092289',
  '992299',
  '12291',
  '982289',
  '22022022',
  '2301',
  '2013',
  '1001',
  '756564',
  '1011',
  '766567',
  '756546',
  '2002',
  '91019',
  '765567',
];

const mockResult = [
  '992299',
  '982289',
  '22022022',
  '1001',
  '2002',
  '91019',
  '765567',
];

it('should return palindromes using array split', () => {
  function isPalindrome(str: string): boolean {
    return str === str.split('').reverse().join('');
  }
  const palindromes = arrOfNumbers.filter(isPalindrome);
  expect(palindromes).toEqual(mockResult);
});

it('should return palindromes using for loop', () => {
  function isPalindrome(str: string): boolean {
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== str[str.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }
  const palindromes = arrOfNumbers.filter(isPalindrome);
  expect(palindromes).toEqual(mockResult);
});

it('should return palindromes using for loop with middle', () => {
  function isPalindrome(str: string): boolean {
    const middle = Math.floor(str.length / 2);
    for (let i = 0; i < middle; i++) {
      if (str[i] !== str[str.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }
  const palindromes = arrOfNumbers.filter(isPalindrome);
  expect(palindromes).toEqual(mockResult);
});

it('should return palindromes using recursive function', () => {
  function isPalindrome(str: string): boolean {
    if (str.length <= 1) {
      return true;
    }
    if (str[0] !== str[str.length - 1]) {
      return false;
    }
    return isPalindrome(str.slice(1, str.length - 1));
  }
  const palindromes = arrOfNumbers.filter(isPalindrome);
  expect(palindromes).toEqual(mockResult);
});

export {};
