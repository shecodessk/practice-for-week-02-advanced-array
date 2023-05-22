/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

*/

function getUniqueVowels(arr) {
    const count = arr.filter((v, i, self) => {

        if(i == self.indexOf(v)){
            return v
        };

    });
      const length = count.length;

    return length;
  }


  function getVowels(string){
  const array = string.split("");
  const vowels = 'aeiou';

  const output = array.filter(function(el){
    if(vowels.includes(el)){
        return el;
    }
  })

    return getUniqueVowels(output);
  }

  let hasThreeVowels = function(string) {
  // check if there is vowels in string

  return (getVowels(string) >= 3)
  }


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hasThreeVowels;
} catch (e) {
    module.exports = null;
}
