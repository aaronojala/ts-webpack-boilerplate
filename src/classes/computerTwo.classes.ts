import {Convertable} from '../interfaces/convertable.interfaces';

export class ComputerTwo {
    converter: Convertable;

    constructor(c: Convertable) {
        this.converter = c;
    }

    printConversion(x: number): void {
        const result = this.converter.convert(x);
        console.log(result);
    }
}