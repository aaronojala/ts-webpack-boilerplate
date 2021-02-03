import { BankAccount } from './classes/bankAccount';
import { Database } from './classes/database';
import { Key } from './classes/key.class';

let firstKey = new Key(12345);
let firstAccount = new BankAccount(50000, firstKey) 
console.log(firstKey);
console.log(firstAccount);

