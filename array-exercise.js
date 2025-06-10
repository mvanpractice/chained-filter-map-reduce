
function camelize(str) {

    const textArray = str.split('-');
    const newTextArray = [];

    for (let i = 0; i < textArray.length; i++) {

        const newText = textArray[i];

        if (i === 0) {
            newTextArray.push(newText);
        } else {
            newTextArray.push(newText[0].toUpperCase() + newText.slice(1));
        }

    }

    return newTextArray.join('');

}

console.log(camelize('the-quick-little-brown-fox'));