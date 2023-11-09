const soma = function (x, y) {
  return Number(x) + Number(y);
};

const sub = function (x, y) {
  return Number(x) - Number(y);
};

const mult = function (x, y) {
  return Number(x) * Number(y);
};

const div = function (x, y) {
  if (Number(y) === 0) {
    return "Não é possível dividir por zero";
  }
  return Number(x) / Number(y);
};

const restoDivisao = function (x, y) {
  if (Number(y) === 0) {
    return "Não é possível dividir por zero";
  }
  return Number(x) % Number(y);
};

const potencia = function (x, y) {
  return Math.pow(Number(x), Number(y));
};
