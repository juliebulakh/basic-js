module.exports = function repeater(str, options) {
  let repeatTimes = options.repeatTimes || 1;
  let separator = String(options.separator) || "+";
  let addition = String(options.addition) || "";
  let additionSeparator = String(options.additionSeparator) || "|";
  let additionRepeatTimes = options.additionRepeatTimes || 1;

  let strAdd = [];
  let strRep = [];

  for (i = 1; i < additionRepeatTimes + 1; i++) {
    strAdd = strAdd.concat(addition);
  }
  if (options.additionSeparator) {
    strAdd = strAdd.join(additionSeparator);
  }
    else strAdd = strAdd.join("");
    
  for (i = 1; i < repeatTimes + 1; i++) strRep = strRep.concat(str + strAdd);

  return strRep.join(separator);
};
