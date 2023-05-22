/*

Write a function `hipsterfy(sentence)` that takes in a sentence string and
returns the sentence where every word is missing it's last vowel.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'

*/


const checkVowel = (string) => {
    let vowels = 'aeiou';
    for(let i = string.length - 1; i >= 0; i--){
      let char = string[i];
      if(vowels.includes(char.toLowerCase())){
        return string.slice(0, i) + string.slice(i +1)
    }
    }
  }

  let hipsterfy = function(word) {
    const array = word.split(" ")
    return array.map(checkVowel).join(" ");
  };


// alternative solution using Array.map
// let hipsterfy = function(sentence) {
//     return sentence.split(' ').map(removeLastVowel).join(' ');
// };

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hipsterfy;
} catch (e) {
    module.exports = null;
}
