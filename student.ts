
import { Course } from './course.js';

export class Student{
    name: string;
    codigo: number;
    cedula: number;
    edad: number;
    direccion : string;
    telefono : number;
    cursos : Course[];



    constructor(name: string, cedula: number, codigo: number, edad: number,direccion : string, telefono: number, cursos: Course[]) {
    this.name = name;
    this.codigo = codigo;
    this.cedula = cedula;
    this.edad= edad;
    this.direccion= direccion;
    this.telefono= telefono;
    this.cursos= cursos;

}
}  