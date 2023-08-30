import Connection from "../../../ports/Connection/connection";
import TransactionDAO from "./transactionDAO";

export default class TransactionDAODatabase implements TransactionDAO {

  constructor (readonly connection: Connection) {}

  async getTransactions(cardNumber: string,month: number, year: number): Promise<void> {
    const transactions = await this.connection.query(
      `select * from hexa.card_transaction where 
       card_number = $1 and extract(month from date) = $2 and extract(year from date) = $3`,
      [cardNumber, month, year]
    );
    return transactions;
  }
}
