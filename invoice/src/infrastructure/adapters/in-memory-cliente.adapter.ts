import { ClienteServicePort } from "../../application/ports/cliente-service.port";
import { ClientesEntity } from "../../domain/entity/cliente-entity";
import { Clientes } from "../../domain/models/cliente";

class InMemoryClienteAdapter implements ClienteServicePort {
  private cliente: Clientes;
  save(cliente: ClientesEntity) {
    this.cliente = cliente;
  }
}

export { InMemoryClienteAdapter };
