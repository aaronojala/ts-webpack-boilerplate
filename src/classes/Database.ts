import { DatabaseSpecs } from '../interfaces/DatabaseSpecs'
import {Key} from './key.class'
import { BankAccount } from './bankAccount'

export class Database implements DatabaseSpecs {
    accounts: BankAccount[]

    constructor(){
        this.accounts=[]
    }

    insert = (account: BankAccount):boolean => {
        let accounts = this.accounts;
        const newKey = account.getKey();
        
    }
    
}