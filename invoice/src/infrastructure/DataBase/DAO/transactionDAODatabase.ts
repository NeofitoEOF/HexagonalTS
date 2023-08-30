import TransactionDAO from "./transactionDAO";
import pgp from "pg-promise";

export default class TransactionDAODatabase implements TransactionDAO {
  async getTransactions(
    cardNumber: string,
    month: number,
    year: number
  ): Promise<void> {
    const connection = pgp()("postgre://postgres:123456@localhost:5432/app");
    const transactions = await connection.query(
      `select * from hexa.card_transaction where 
       card_number = $1 and extract(month from date) = $2 and extract(year from date) = $3`,
      [cardNumber, month, year]
    );
    return transactions;
  }
}
