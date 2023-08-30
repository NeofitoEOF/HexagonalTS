export default interface HttpService {
  register(method: string, url: string, callback: Function): Promise<void>;
  listen(port: number): Promise<void>;
}
