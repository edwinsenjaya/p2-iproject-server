const { User, Transaction, Tag } = require("../models");

async function getSpending() {
  try {
    const userData = await User.findAll();

    for (let i = 0; i < userData.length; i++) {
      const data = await Transaction.findAll({
        where: { UserId: userData[i].id },
        include: [{ model: User }, { model: Tag }],
      });
      console.log(data);
      const spending = data.reduce((x, y) => {
        return +x.amount + +y.amount;
      });
      console.log(spending);
    }
  } catch (err) {
    console.log(err);
  }
}

getSpending();

module.exports = getSpending;
