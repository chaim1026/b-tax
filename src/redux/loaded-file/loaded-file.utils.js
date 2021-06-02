export const cleanReceivedData = (loadedFile) => {
    let loadedFileArray = loadedFile.split('');
    let cleanData = [];
    let badLetters = '';
    let comment = false;
    let type = '';
    for (let letter of loadedFileArray) {
        if (comment === false){
            if (cleanData[cleanData.length - 1] === '/' && letter === '*') {
                cleanData.splice(cleanData.length - 1, 1)
                comment = true;
                type = '/*'
            } else if (cleanData[cleanData.length - 1] === '/' && letter === '/') {
                cleanData.splice(cleanData.length - 1, 1)
                comment = true;
                type = '//'
            } else {
                cleanData.push(letter)
            }
        } else {
            if (badLetters === '*' && letter === '/' && type === '/*') {
                comment = false;
                type = '';
                badLetters = '';
                if ((cleanData[cleanData.length - 1]) !== ' '){
                    cleanData.push(' ');
                }
            } else if (letter === '\n' && type === '//') {
                comment = false;
                type = '';
                badLetters = '';
            } else {
                badLetters = letter;
            }
        }
    } 
 
    let finalString = cleanData.join('');
    let result = finalString.split('\n');

    return result;
};