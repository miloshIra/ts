
import { HasFormatter } from '../interfaces/HasFormatter.js'

export class Invoice implements HasFormatter {
    constructor(
        public recipient:string,
        public details:string, 
        public amount:number
        ) {}

    format() {
        return `${this.recipient} owes ${this.amount}e for ${this.details}`;
    }

    get_client(){
        return `${this.recipient}`
    }
}