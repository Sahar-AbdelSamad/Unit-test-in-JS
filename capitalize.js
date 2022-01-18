const capitalize = (string) => {
    const array = string.split('');
    const firstLetter = array.shift();
    const lowerCaseLetters = array.join('');
    return firstLetter.toUpperCase().concat(lowerCaseLetters);
};
module.exports = capitalize
