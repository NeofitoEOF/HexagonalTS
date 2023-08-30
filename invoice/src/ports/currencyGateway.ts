export default interface CurrencyGateway {
  getCurrencies(): Promise<void>;
}
