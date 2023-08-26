class Libro {

    titulo: string;
    autor: string;
    contenido: string;
  
    constructor(titulo: string, autor: string, contenido: string) {
      this.titulo = titulo;
      this.autor = autor;
      this.contenido = contenido;
    }
  
    mostrarContenido() {
      return this.contenido;
    }
  }
  
  class BaseDeDatos {
    guardarLibro(libro: Libro) {
      console.log(`Guardado el libro ${libro.titulo} en base de datos`);
    }
  }
  

  const libro1 = new Libro('El principio', 'Antoine', 'Erase una vez');
  const db = new BaseDeDatos();
  db.guardarLibro(libro1);