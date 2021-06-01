export const cleanReceivedData = (loadedFile) => {
    let loadedFileArray = loadedFile.split('');
    let cleanData = [];
    let badLetters = [];
    let comment = false;
    for (let letter of loadedFileArray) {
        if (comment === false){
            if ((cleanData[cleanData.length - 1] === '/' && letter === '*') || (cleanData[cleanData.length - 1] === '/' && letter === '/')){
                cleanData.splice(cleanData.length - 1, 1)
                comment = true;
            } else {
                cleanData.push(letter)
            }
        } else {
            if ((badLetters[badLetters.length - 1] === '*' && letter === '/') || (letter === '\n')) {
                comment = false;
            }
            badLetters.push(letter)
        }
    } 

    return cleanData.join('');
};