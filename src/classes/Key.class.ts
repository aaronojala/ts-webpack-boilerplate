import {KeySpecs} from '../interfaces/Keys.specs'

export class Key implements KeySpecs{
    key: number

    constructor(accountKey: number){
        this.key = accountKey
    }

    equals(key:number):boolean {
        if (key === this.key) {
            return true
        }
        else {
            return false
        }
    }
}