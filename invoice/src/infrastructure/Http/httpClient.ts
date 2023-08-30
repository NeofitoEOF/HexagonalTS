export default interface HttpClient {
  get(url: string): Promise<void>;
  post(url: string, body: any): Promise<void>;
}
