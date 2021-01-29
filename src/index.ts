import {ComputerOne} from './classes/computerOne.classes';
import {ComputerTwo} from './classes/computerTwo.classes';

let computerOne: ComputerOne = new ComputerOne(1);
let computerTwo = new ComputerTwo(computerOne);
computerTwo.printConversion(3);
