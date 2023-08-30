import express from "express";
import { CalculateInvoice } from "./adapter/calculateInvoce";
import TransactionDAODatabase from "./infrastructure/DataBase/DAO/transactionDAODatabase";
import CurrencyGatewayHttp from "./ports/currencyGatewayHttp";
import AxiosAdapter from "./infrastructure/Axios/AxiosAdapter";
const app = express();
app.get("/cards/:cardNumber/invoices", async function (req, res) {
  const httpClient = new AxiosAdapter();
  const baseUrl = "http://localhost:30001";
  const transactionDAO = new TransactionDAODatabase();
  const currencyGateway = new CurrencyGatewayHttp(httpClient, baseUrl);
  const calculateInvoice = new CalculateInvoice(
    transactionDAO,
    currencyGateway
  );
  const total = await calculateInvoice.execute(req.params.cardNumber);
  res.json({ total });
});
app.listen(3000);
