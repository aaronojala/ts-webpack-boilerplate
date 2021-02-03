import { BankAccount } from '../classes/bankAccount'
import { Key } from '../classes/key.class'

export interface DatabaseSpecs {
    insert:(account: BankAccount) => boolean
    find:(key: Key) => number
    delete: (key: Key) => boolean
}