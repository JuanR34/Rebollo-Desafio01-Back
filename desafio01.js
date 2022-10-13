class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = {libros};
        this.mascotas = [mascotas];
    }

    getFullName () {
        return `${this.nombre} ${this.apellido}`
    }

    addMascota() {
        let array = [];
        array.push(this.mascotas);
        return array
    }
    
    countMascotas () {
        for (let i = 0; i < this.mascotas.length; i++) {
            return this.mascotas[i].length
        }
    }

    addBook () {
        return this.libros
    }

    getBookNames() {
    //     let a = [];
    //     for (let i = 0; i < this.libros.length; i++) {
    //     a.push(this.libros[i].nombre);
        
    //     return a
    // }
    
    // var a = libros.map(function(libro){
    //     return libro.nombre
    // })
    }
};


const Juan = new Usuario("juan", "Rebollo",[{nombre: "Got", autor: "Martin"}, {nombre: "xx", autor:"xx"}], ["lili", "pepe", "xxx", "dsfsd","sfsdfsdf"]);
const Barbie = new Usuario ("barbie", "Gz", {nombre: "Tlotr", autor: "Tolkien"}, "pachi")
const Monito = new Usuario ("mono", "amat", {nombre: "Ensayo", autor: "Saramago"}, "monete")

console.log (Juan.getFullName());
console.log (Juan.addMascota());
console.log (Barbie.addMascota())
console.log (Juan.countMascotas());
console.log (Juan.addBook());
console.log (Juan.getBookNames())
console.log ()
