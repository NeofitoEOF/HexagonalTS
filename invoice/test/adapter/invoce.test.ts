import { Invoice } from "../../src/adapter/invoce";

test("Deve criar uma fatura", function () {
  const transactions = [
    { amount: 100, currency: "BRL" },
    { amount: 1000, currency: "BRL" },
    { amount: 600, currency: "USD" },
  ];

  const currencies = {
    usd: 5,
  };

  const invoce = new Invoice(transactions, currencies);
  const total = invoce.getTotal();
  expect(total).toBe(4100);
});
