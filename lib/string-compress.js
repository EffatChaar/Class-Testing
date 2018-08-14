module.exports = str => {
    const output = '';
    const count = 0;
    for (const i = 0; i < str.length; i++) {
        count++;
        if (str[i] != str[i+1]) {
            output += str[i] + count;
            count = 0;
        }
    }
    return str;
}