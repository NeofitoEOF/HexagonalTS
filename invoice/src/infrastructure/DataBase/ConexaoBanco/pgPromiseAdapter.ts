import Connection from "../../../ports/Connection/connection";
import pgp from "pg-promise";

export class PgPromiseAdapter implements Connection {
  connection: any;
  constructor() {
    this.connection = pgp()("postgre://postgres:123456@localhost:5432/app");
  }

  query(statement: string, params: any): Promise<any> {
    return this.connection.query(statement, params);
  }
  close(): Promise<any> {
    return this.connection.$pool.end();
  }
}
