import { Clientes } from "../../domain/models/cliente";

interface ClienteServicePort {
  createCliente(name: string): Promise<Clientes>;
  getCliente(id: string): Promise<Clientes>;
}

export { ClienteServicePort };
