module.exports = {
  pi: Math.PI,
  e: Math.E,
  lg10: Math.LN10,
  lg2: Math.LN2,

  sqrt: (num) => Math.sqrt(num),
  cbrt: (num) => Math.cbrt(num),
  sq: (num) => num ** 2,
  cube: (num) => Math.pow(num, 3),
  qube: (num) => Math.pow(num, 4),
  sin: (ang) => Math.sin(ang),
  cos: (ang) => Math.cos(ang),
  tan: (ang) => Math.tan(ang),
  sini: (ang) => Math.asin(ang),
  cosi: (ang) => Math.acos(ang),
  tani: (ang) => Math.atan(ang),
  log: (num) => Math.log10(num),
  log2: (num) => Math.log2(num),
  loge: (num) => Math.log(num),
  round: (num) => Math.round(num),
  roundUp: (num) => Math.ceil(num),
  roundDown: (num) => Math.floor(num),
};
