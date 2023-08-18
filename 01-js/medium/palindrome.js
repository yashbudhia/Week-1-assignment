/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/
function isAnagram(str1, str2) {
    let S1 = str1.split('');
    let S2 = str2.split('');
    if (S1.length !== S2.length)
    { return false ; }
    else {
        let n = S1.length ;
        for ( i = 0; i < n ; i++)
        {
           for ( j= 0; j <n ; j++)
           {
                if ( S1[i] == S2[j])
               { return true;
               }
               break;
            }

    }
    }
}

module.exports = isPalindrome;
