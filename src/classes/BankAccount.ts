import {BankAccountSpecs} from '../interfaces/BankAccountSpecs'
import {Key} from './key.class'

export class BankAccount implements BankAccountSpecs {
    key: Key
    balance: number

    constructor(amount:number, key:Key) {
        this.key = key
        this.balance = amount
    }

    deposit = (amount:number):boolean => {
        amount = this.balance + amount
        return true
    }

    getBalance = (): number => {
        return this.balance
    }

    getKey = ():Key => {
        return this.key
    }
}