export const cleanReceivedData = (loadedFile) => {
    let loadedFileArray = loadedFile.split('');
    let cleanData = [];
    let badLetters = [];
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
            if (badLetters[badLetters.length - 1] === '*' && letter === '/' && type === '/*') {
                comment = false;
            } else if (letter === '\n' && type === '//') {
                comment = false;
            } 
            badLetters.push(letter);
        }
    } 

    let finalString = cleanData.join('');
    let result = finalString.split('\n');

    return result;
};