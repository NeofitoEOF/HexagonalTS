import express from "express";
import { CalculateInvoice } from "./adapter/calculateInvoce";
import TransactionDAODatabase from "./infrastructure/DataBase/DAO/transactionDAODatabase";
import CurrencyGatewayHttp from "./ports/currencyGatewayHttp";
import AxiosAdapter from "./adapter/Axios/AxiosAdapter";
import ExpressAdapter from "./adapter/Express/expressAdapter";
import InvoiceController from "./adapter/controller/invoiceController";
import { PgPromiseAdapter } from "./infrastructure/DataBase/ConexaoBanco/pgPromiseAdapter";

const connection = new PgPromiseAdapter();
const transactionDAO = new TransactionDAODatabase(connection);
const httpClient = new AxiosAdapter();
const baseUrl = "http://localhost:30001";
const currencyGateway = new CurrencyGatewayHttp(httpClient, baseUrl);
const calculateInvoice = new CalculateInvoice(transactionDAO, currencyGateway);
const httpService = new ExpressAdapter();
new InvoiceController(httpService, calculateInvoice);
httpService.listen(3000);
