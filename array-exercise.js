
function camelize(str) {

    const textArray = str.split('-'); // Return an array
    const newTextArray = []; // Will store the new array

    // Loop through the array
    for (let i = 0; i < textArray.length; i++) {

        const newText = textArray[i]; // Not necessary - only for typing quick

        // Transform the 1st index to upper case and then concatenate the rests
        if (i === 0) {
            newTextArray.push(newText);
        } else {
            newTextArray.push(newText[0].toUpperCase() + newText.slice(1));
        }

    }

    return newTextArray.join('');

}

console.log(camelize('the-quick-little-brown-fox'));

/* 
Though my answer returns the expected result, the correct solution from TOP exercise was:
function camelize(str) {
  return str
    .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
    .map(
      // capitalizes first letters of all array items except the first one
      // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}

I was only able to answer the exercise after checking the solution. Wanted to use for loop but I remembered the last covered topic was map, reduce and filter. This was 4-5 days of rest day. Haha
*/