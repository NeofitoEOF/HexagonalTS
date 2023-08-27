import { Clientes } from "../../domain/models/cliente";
import { ClienteServicePort } from "../ports/cliente-service.port";

class ClienteServices {
  constructor(private readonly clienteAdapter: ClienteServicePort) {}

  async createCliente(name: string): Promise<Clientes> {
    return this.clienteAdapter.createCliente(name);
  }
  async getCliente(id: string): Promise<Clientes> {
    return this.clienteAdapter.getCliente(id);
  }
}

export { ClienteServices };
