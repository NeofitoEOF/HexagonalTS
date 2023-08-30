import { TelefoneServicePort } from "../../application/ports/telefone-service.port";
import { TelefoneEntity } from "../../domain/entity/telefone-entity";
import { Telefone } from "../../domain/models/telefone";

class InMemoryTelefoneAdapter implements TelefoneServicePort {
  private telefones: Telefone[] = [];

  save(telefones: TelefoneEntity) {
    this.telefones.push(telefones);
  }
}

export { InMemoryTelefoneAdapter };
