import {Key} from '../classes/key.class'

export interface BankAccountSpecs {
    deposit: (amount: number) => void
    getBalance: () => number
    getKey: () => Key
}