module.exports = str => {
    const s = str.toLowerCase().replace(/[\w_]/g, '');
    return s === [...s].reverse().join('');
  };