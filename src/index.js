module.exports = function check(str, bracketsConfig) {
  let flag;
  let brackets = bracketsConfig.map(i => i = i.join(''));

  for (let i = 0; i < brackets.length; i++) {
    if (str.includes(brackets[i])) {
      str = str.replace(brackets[i], '');
      i = -1;
    }
  }

  flag = str === '' ? true : false;

  return flag;
}
