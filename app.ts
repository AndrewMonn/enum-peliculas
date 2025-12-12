// Enumeración de géneros de películas
enum GeneroPelicula {
    Accion = "Acción",
    Aventura = "Aventura",
    Comedia = "Comedia",
    Drama = "Drama",
    Terror = "Terror",
    CienciaFiccion = "Ciencia Ficción",
    Fantasia = "Fantasía",
    Romance = "Romance",
    Suspenso = "Suspenso",
    Animacion = "Animación",
}

// Enumeración de países de películas
enum PaisPelicula {
    EstadosUnidos = "Estados Unidos",
    Mexico = "México",
    Espana = "España",
    Argentina = "Argentina",
    Francia = "Francia",
    Italia = "Italia",
    ReinoUnido = "Reino Unido",
    Japon = "Japón",
    CoreaDelSur = "Corea del Sur",
    India = "India",
}

// Interfaz para una película
interface Pelicula {
    titulo: string;
    genero: GeneroPelicula;
    pais: PaisPelicula;
    anio: number;
}

// Función principal
function main() {
    console.log("=== APLICACIÓN DE PELÍCULAS ===\n");

    // Mostrar géneros disponibles - Método compatible con ES5
    console.log("GÉNEROS DE PELÍCULAS DISPONIBLES:");
    console.log("---------------------------------");

    // Crear arrays con los valores de los enums manualmente
    const generos: string[] = [
        GeneroPelicula.Accion,
        GeneroPelicula.Aventura,
        GeneroPelicula.Comedia,
        GeneroPelicula.Drama,
        GeneroPelicula.Terror,
        GeneroPelicula.CienciaFiccion,
        GeneroPelicula.Fantasia,
        GeneroPelicula.Romance,
        GeneroPelicula.Suspenso,
        GeneroPelicula.Animacion,
    ];

    generos.forEach((genero, index) => {
        console.log(`${index + 1}. ${genero}`);
    });

    console.log("\n"); // Línea en blanco

    // Mostrar países disponibles
    console.log("PAÍSES DE PELÍCULAS DISPONIBLES:");
    console.log("--------------------------------");

    const paises: string[] = [
        PaisPelicula.EstadosUnidos,
        PaisPelicula.Mexico,
        PaisPelicula.Espana,
        PaisPelicula.Argentina,
        PaisPelicula.Francia,
        PaisPelicula.Italia,
        PaisPelicula.ReinoUnido,
        PaisPelicula.Japon,
        PaisPelicula.CoreaDelSur,
        PaisPelicula.India,
    ];

    paises.forEach((pais, index) => {
        console.log(`${index + 1}. ${pais}`);
    });

    console.log("\n"); // Línea en blanco

    // Datos de ejemplo
    const peliculasEjemplo: Pelicula[] = [
        {
            titulo: "El Padrino",
            genero: GeneroPelicula.Drama,
            pais: PaisPelicula.EstadosUnidos,
            anio: 1972,
        },
        {
            titulo: "Parásitos",
            genero: GeneroPelicula.Drama,
            pais: PaisPelicula.CoreaDelSur,
            anio: 2019,
        },
        {
            titulo: "Amélie",
            genero: GeneroPelicula.Comedia,
            pais: PaisPelicula.Francia,
            anio: 2001,
        },
        {
            titulo: "El Laberinto del Fauno",
            genero: GeneroPelicula.Fantasia,
            pais: PaisPelicula.Mexico,
            anio: 2006,
        },
        {
            titulo: "El Viaje de Chihiro",
            genero: GeneroPelicula.Animacion,
            pais: PaisPelicula.Japon,
            anio: 2001,
        },
    ];

    // Mostrar películas de ejemplo
    console.log("EJEMPLOS DE PELÍCULAS:");
    console.log("---------------------");
    peliculasEjemplo.forEach((pelicula, index) => {
        console.log(`${index + 1}. ${pelicula.titulo}`);
        console.log(`   Género: ${pelicula.genero}`);
        console.log(`   País: ${pelicula.pais}`);
        console.log(`   Año: ${pelicula.anio}\n`);
    });

    console.log("=== FIN DEL PROGRAMA ===");
}

// Ejecutar la aplicación
main();
