    
class Usuario {  

    constructor (nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

        getFullName() { 
            return `${this.nombre} ${this.apellido}`;
        }

        addMascota(mascota){
            this.mascota.push(mascota);
            console.log(this.mascota);
        }


        countMascotas(){
            let count = this.mascotas.lenght;
            return console.log(count) 
        }

        addBook(titulo, autor){
            this.libros.push({nombre: titulo, autor: autor})
            console.log(this.libros)
        }

        getBookNames(){ 
            this.libros.map((libro)=> libro.nombre)
        }
}

const libros =[
    {nombre: 'El Hobbit',autor: 'J.R.R.Tolkien'}, 
    {nombre: 'La Isla del Tesoro', autor: 'Robert Louis Stevenson'}]

    const usuario1 = new Usuario ('Pedro','Martinez',libros,
        ['perro', 'gato', 'hamster']
        );


        usuario1.getFullName;


