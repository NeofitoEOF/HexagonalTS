import { CalculateInvoice } from "../../src/adapter/calculateInvoce";
import TransactionDAO from "../../src/infrastructure/DataBase/DAO/transactionDAO";
import CurrencyGateway from "../../src/ports/currencyGateway";

test("Deve calcular a fatura", async function () {
  const transactionDAO: TransactionDAO = {
    async getTransactions(cardNumber, month, year): Promise<any> {
      return [
        { amount: 100, currency: "BRL" },
        { amount: 1000, currency: "BRL" },
        { amount: 50, currency: "BRL" }
      ];
    },
  };
  const currencyGateway: CurrencyGateway = {
    async getCurrencies(): Promise<any> {
      return { usd: 5}
    },
  }
  const calculateInvoice = new CalculateInvoice(transactionDAO, currencyGateway);
  const total = await calculateInvoice.execute("1234");
  expect(total).toBe(1150);
});
