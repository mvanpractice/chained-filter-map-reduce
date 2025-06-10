
/* 
 @param str - String
*/
function camelizeString(str) {

    const newStrArray = str.split('-');

    return newStrArray.map((item, index) => {
        if (index === 0) {
            return item;
        } else {
            return item[0].toUpperCase() + item.slice(1);
        }
    }).join('');

}

console.log(camelizeString('this-is-a-test-string-to-see-if-it-works'));