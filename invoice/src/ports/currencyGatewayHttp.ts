import HttpClient from "../infrastructure/Http/httpClient";
import CurrencyGateway from "./currencyGateway";
import axios from "axios";

export default class CurrencyGatewayHttp implements CurrencyGateway {
  constructor(readonly httpClient: HttpClient, readonly baseUrl: string) {}

  async getCurrencies(): Promise<any> {
    const currencies = await this.httpClient.get(`${this.baseUrl}/currencies`);
    return currencies;
  }
}
