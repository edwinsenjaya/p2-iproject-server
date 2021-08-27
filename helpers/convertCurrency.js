const { Transaction } = require("../models");
const getRates = require("../apis/exchangerate");
const getEthereum = require("../apis/cryptorate");

const convert = async function (from, to, id) {
  const rate = await getRates();
  const ethRate = await getEthereum();
  const dataTrans = await Transaction.findByPk(id);

  if (to === "ETH") {
    const result = (dataTrans.amount / ethRate[from]).toFixed(5);
    return result;
  } else if (from === "ETH") {
    const result = (dataTrans.amount * ethRate[to]).toFixed(2);
    return result;
  } else if (to === "EUR") {
    const result = (dataTrans.amount / rate[from]).toFixed(2);
    return result;
  } else if (from === "EUR") {
    const result = (dataTrans.amount * rate[to]).toFixed(2);
    return result;
  } else {
    const result = ((dataTrans.amount / rate[from]) * rate[to]).toFixed(2);
    return result;
  }
};

module.exports = convert;
