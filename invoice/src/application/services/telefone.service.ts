import { Telefone } from "../../domain/models/telefone";
import { TelefoneServicePort } from "../ports/telefone-service.port";

class TelefoneServices {
  constructor(private readonly telefoneAdapter: TelefoneServicePort) {}

  async createTelefone(telefone: string[]): Promise<Telefone> {
    return this.telefoneAdapter.createTelefone(telefone);
  }

  async getTelefone(id: string): Promise<Telefone> {
    return this.telefoneAdapter.getTelefone(id);
  }
}

export { TelefoneServicePort };
