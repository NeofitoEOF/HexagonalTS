import { TelefoneServicePort } from "../../application/ports/telefone-service.port";
import { Telefone } from "../../domain/models/telefone";


class InMemoryCustomerAdapter implements TelefoneServicePort {
  createTelefone(telefone: string[]): Promise<Telefone> {
    throw new Error("Method not implemented.");
  }
  getTelefone(id: string): Promise<Telefone> {
    throw new Error("Method not implemented.");
  }
  private telefones: Telefone[] = [];
}