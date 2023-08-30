import { ClientesEntity } from "../../domain/entity/cliente-entity";

interface ClienteServicePort {
  save(clientesEntity: ClientesEntity)
}

export { ClienteServicePort };
