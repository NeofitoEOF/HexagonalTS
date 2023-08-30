import CurrencyGateway from "./currencyGateway";
import axios from "axios";

export default class CurrencyGatewayHttp implements CurrencyGateway {
  async getCurrencies(): Promise<void> {
    const response = await axios.get("http://localhost:3001/currencies");
    const currencies = response.data;
    return currencies;
  }
}
