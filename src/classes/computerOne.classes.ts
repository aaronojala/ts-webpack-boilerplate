import {Convertable} from '../interfaces/convertable.interfaces' 

export class ComputerOne implements Convertable {
    x: number;

    constructor(a: number) {
        this.x = a;
    }

    convert(j: number): number {
        return this.x + j;
    }
}