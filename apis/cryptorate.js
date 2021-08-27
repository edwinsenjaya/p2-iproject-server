const axios = require("axios");

const getEthereum = async function () {
  const res = await axios.get(
    "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=IDR,EUR,USD,JPY,SGD,AUD"
  );
  const ethRate = res.data;
  return ethRate;
};

module.exports = getEthereum;
