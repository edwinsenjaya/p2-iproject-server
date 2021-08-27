const axios = require("axios");
const baseUrl = `http://api.exchangeratesapi.io/v1/latest?access_key=${process.env.EXCHANGE_RATE_KEY}&symbols=IDR,USD,AUD,SGD,JPY&format=1`;

const getRates = async function () {
  try {
    const res = await axios.get(`${baseUrl}`);
    return res.data.rates;
  } catch (err) {
    next(err);
  }
};

module.exports = getRates;
