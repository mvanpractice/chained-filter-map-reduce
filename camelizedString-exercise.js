
/* 
 @param str - String
*/
function camelizeString(str) {

    // const newStrArray = str.split('-');

    // return newStrArray.map((item, index) => {
    //     if (index === 0) {
    //         return item;
    //     } else {
    //         return item[0].toUpperCase() + item.slice(1);
    //     }
    // }).join('');

    // return str.split('-').map((text, index) => {
    //     return index === 0 ? text : text[0].toUpperCase() + text.slice(1);
    // }).join('');
    return str.split('-').map((text, index) => index === 0 ? text : text[0].toUpperCase() + text.slice(1)).join('');

}

console.log(camelizeString('test-camelized-string'));