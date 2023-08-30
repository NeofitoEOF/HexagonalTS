import { Telefone } from "../../domain/models/telefone";
import { TelefoneEntity } from "../../domain/entity/telefone-entity";

interface TelefoneServicePort {
  save(telefoneEntity: TelefoneEntity);
}

export { TelefoneServicePort };
