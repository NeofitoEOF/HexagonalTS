import express from "express";
import { CalculateInvoice } from "./adapter/calculateInvoce";
import TransactionDAODatabase from "./infrastructure/DataBase/DAO/transactionDAODatabase";
import CurrencyGatewayHttp from "./ports/currencyGatewayHttp";
const app = express();
app.get("/cards/:cardNumber/invoices", async function (req, res) {
  const transactionDAO = new TransactionDAODatabase();
  const currencyGateway = new CurrencyGatewayHttp();
  const calculateInvoice = new CalculateInvoice(
    transactionDAO,
    currencyGateway
  );
  const total = await calculateInvoice.execute(req.params.cardNumber);
  res.json({ total });
});
app.listen(3000);
