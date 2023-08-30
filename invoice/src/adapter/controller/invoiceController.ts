import HttpService from "../../infrastructure/Http/httpService";
import { CalculateInvoice } from "../calculateInvoce";


export default class InvoiceController {
  constructor(readonly httpService: HttpService, readonly calculateInvoice: CalculateInvoice) {
    httpService.register("get", "/cards/:cardNumber/invoices", async function (params:any, body: any) {
        const total = await calculateInvoice.execute(params.cardNumber);
        return total;
    })
   }
  
}