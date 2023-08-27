import { Telefone } from "../../domain/models/telefone";

interface TelefoneServicePort {
  createTelefone(telefone: string[]): Promise<Telefone>;
  getTelefone(id: string): Promise<Telefone>;
}

export { TelefoneServicePort };
