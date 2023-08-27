import { ClienteServicePort } from "../../application/ports/cliente-service.port";
import { Clientes } from "../../domain/models/cliente";

class InMemoryCustomerAdapter implements ClienteServicePort {
  private clientes: Clientes[] = [];

  async createCliente(name: string): Promise<Clientes> {
    throw new Error("Method not implemented.");
  }
  getCliente(id: string): Promise<Clientes> {
    throw new Error("Method not implemented.");
  }
}

export { InMemoryCustomerAdapter };
