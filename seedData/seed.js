const user = [
  {
    email: "user@mail.com",
    password: "abcde",
    fullName: "User Test",
    phoneNumber: 12345678,
    address: "Somewhere St",
    budget: 30000000,
    saving: 5000000,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const transactions = [
  {
    name: "Buy groceries",
    amount: 350000,
    date: new Date("June 27, 2021"),
    currency: "IDR",
    UserId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Have some coffee",
    amount: 35000,
    date: new Date("June 29, 2021"),
    currency: "IDR",
    UserId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Buy books",
    amount: 750000,
    date: new Date("June 30, 2021"),
    currency: "IDR",
    UserId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Have some lunch",
    amount: 85000,
    date: new Date("July 7, 2021"),
    currency: "IDR",
    UserId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Go to the gym",
    amount: 150000,
    date: new Date("June 30, 2021"),
    currency: "IDR",
    UserId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Pay monthly Netflix subscription",
    amount: 125000,
    date: new Date("July 3, 2021"),
    currency: "IDR",
    UserId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Add credit to phone",
    amount: 75000,
    date: new Date("July 4, 2021"),
    currency: "IDR",
    UserId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Pay rent",
    amount: 2500000,
    date: new Date("July 2, 2021"),
    currency: "IDR",
    UserId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Watch movie",
    amount: 65000,
    date: new Date("July 1, 2021"),
    currency: "IDR",
    UserId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Spotify monthly subscription",
    amount: 50000,
    date: new Date("June 27, 2021"),
    currency: "IDR",
    UserId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Buy a birthday cake",
    amount: 400000,
    date: new Date("July 8, 2021"),
    currency: "IDR",
    UserId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Car maintenance",
    amount: 650000,
    date: new Date("July 7, 2021"),
    currency: "IDR",
    UserId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Pay car tax",
    amount: 275000,
    date: new Date("July 3, 2021"),
    currency: "IDR",
    UserId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Buy shoes",
    amount: 800000,
    date: new Date("May 20, 2021"),
    currency: "IDR",
    UserId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Buy medicines",
    amount: 500000,
    date: new Date("July 4, 2021"),
    currency: "IDR",
    UserId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const tags = [
  {
    name: "food",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "transportation",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "entertainment",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "essential",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "clothing",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "utility",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "health",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "grocery",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "tax",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "emergency",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "monthly",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "weekly",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "daily",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "special",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "others",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const transTag = [
  {
    TransactionId: 1,
    TagId: 4,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    TransactionId: 1,
    TagId: 8,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    TransactionId: 2,
    TagId: 13,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    TransactionId: 2,
    TagId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    TransactionId: 3,
    TagId: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    TransactionId: 3,
    TagId: 14,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    TransactionId: 4,
    TagId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    TransactionId: 4,
    TagId: 13,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    TransactionId: 5,
    TagId: 12,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    TransactionId: 5,
    TagId: 7,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    TransactionId: 6,
    TagId: 11,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    TransactionId: 6,
    TagId: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    TransactionId: 7,
    TagId: 6,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    TransactionId: 7,
    TagId: 11,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    TransactionId: 8,
    TagId: 11,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    TransactionId: 8,
    TagId: 4,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    TransactionId: 9,
    TagId: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    TransactionId: 9,
    TagId: 14,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    TransactionId: 10,
    TagId: 11,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    TransactionId: 10,
    TagId: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    TransactionId: 11,
    TagId: 15,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    TransactionId: 11,
    TagId: 14,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    TransactionId: 12,
    TagId: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    TransactionId: 12,
    TagId: 6,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    TransactionId: 13,
    TagId: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    TransactionId: 13,
    TagId: 9,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    TransactionId: 14,
    TagId: 5,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    TransactionId: 14,
    TagId: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    TransactionId: 15,
    TagId: 7,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    TransactionId: 15,
    TagId: 10,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

module.exports = { transactions, tags, transTag };
