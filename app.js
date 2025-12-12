// Enumeración de géneros de películas
var GeneroPelicula;
(function (GeneroPelicula) {
    GeneroPelicula["Accion"] = "Acci\u00F3n";
    GeneroPelicula["Aventura"] = "Aventura";
    GeneroPelicula["Comedia"] = "Comedia";
    GeneroPelicula["Drama"] = "Drama";
    GeneroPelicula["Terror"] = "Terror";
    GeneroPelicula["CienciaFiccion"] = "Ciencia Ficci\u00F3n";
    GeneroPelicula["Fantasia"] = "Fantas\u00EDa";
    GeneroPelicula["Romance"] = "Romance";
    GeneroPelicula["Suspenso"] = "Suspenso";
    GeneroPelicula["Animacion"] = "Animaci\u00F3n";
})(GeneroPelicula || (GeneroPelicula = {}));
// Enumeración de países de películas
var PaisPelicula;
(function (PaisPelicula) {
    PaisPelicula["EstadosUnidos"] = "Estados Unidos";
    PaisPelicula["Mexico"] = "M\u00E9xico";
    PaisPelicula["Espana"] = "Espa\u00F1a";
    PaisPelicula["Argentina"] = "Argentina";
    PaisPelicula["Francia"] = "Francia";
    PaisPelicula["Italia"] = "Italia";
    PaisPelicula["ReinoUnido"] = "Reino Unido";
    PaisPelicula["Japon"] = "Jap\u00F3n";
    PaisPelicula["CoreaDelSur"] = "Corea del Sur";
    PaisPelicula["India"] = "India";
})(PaisPelicula || (PaisPelicula = {}));
// Función principal
function main() {
    console.log("=== APLICACIÓN DE PELÍCULAS ===\n");
    // Mostrar géneros disponibles - Método compatible con ES5
    console.log("GÉNEROS DE PELÍCULAS DISPONIBLES:");
    console.log("---------------------------------");
    // Crear arrays con los valores de los enums manualmente
    var generos = [
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
    generos.forEach(function (genero, index) {
        console.log("".concat(index + 1, ". ").concat(genero));
    });
    console.log("\n"); // Línea en blanco
    // Mostrar países disponibles
    console.log("PAÍSES DE PELÍCULAS DISPONIBLES:");
    console.log("--------------------------------");
    var paises = [
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
    paises.forEach(function (pais, index) {
        console.log("".concat(index + 1, ". ").concat(pais));
    });
    console.log("\n"); // Línea en blanco
    // Datos de ejemplo
    var peliculasEjemplo = [
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
    peliculasEjemplo.forEach(function (pelicula, index) {
        console.log("".concat(index + 1, ". ").concat(pelicula.titulo));
        console.log("   G\u00E9nero: ".concat(pelicula.genero));
        console.log("   Pa\u00EDs: ".concat(pelicula.pais));
        console.log("   A\u00F1o: ".concat(pelicula.anio, "\n"));
    });
    console.log("=== FIN DEL PROGRAMA ===");
}
// Ejecutar la aplicación
main();
