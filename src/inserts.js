/* Aquí vamos a introducir veinte documentos en la colección peliculas, para introducirlos a la vez creamos
un array en el que debemos separar los documentos por llaves y comas. */
db.peliculas.insertMany([
    { titulo: "Capitán América: el primer vengador", año: 2011, caracteristicas: { duracion: "124 min.", genero: "Ciencia Ficción" }, calificacion: 6.9 },
    { titulo: "Capitán América: el soldado de invierno", año: 2014, caracteristicas: { duracion: "128 min.", genero: "Ciencia Ficción" }, calificacion: 7.7 },
    { titulo: "Capitán América: Civil War", año: 2016, caracteristicas: { duracion: "147 min.", genero: "Ciencia Ficción" }, calificacion: 7.4 },
    { titulo: "Iron Man", año: 2008, caracteristicas: { duracion: "126 min.", genero: "Acción" }, calificacion: 7.6 },
    { titulo: "Iron Man 2", año: 2010, caracteristicas: { duracion: "125 min.", genero: "Acción" }, calificacion: 6.8 },
    { titulo: "Iron Man 3", año: 2013, caracteristicas: { duracion: "130 min.", genero: "Acción" }, calificacion: 6.9 },
    { titulo: "El increible Hulk", año: 2008, caracteristicas: { duracion: "114 min.", genero: "Ciencia Ficción" }, calificacion: 6.2 },
    { titulo: "Thor", año: 2011, caracteristicas: { duracion: "115 min.", genero: "Fantasía" }, calificacion: 6.8 },
    { titulo: "Thor: el mundo oscuro", año: 2013, caracteristicas: { duracion: "112 min.", genero: "Fantasía" }, calificacion: 6.6 },
    { titulo: "Thor: Ragnarok", año: 2017, caracteristicas: { duracion: "131 min.", genero: "Fantasía" }, calificacion: 7.6 },
    { titulo: "Guardianes de la galaxia", año: 2014, caracteristicas: { duracion: "122 min.", genero: "Aventura" }, calificacion: 7.9 },
    { titulo: "Guardianes de la galaxia Vol. 2", año: 2017, caracteristicas: { duracion: "137 min.", genero: "Aventura" }, calificacion: 7.6 },
    { titulo: "Los Vengadores", año: 2012, caracteristicas: { duracion: "143 min.", genero: "Ciencia Ficción" }, calificacion: 7.7 },
    { titulo: "Vengadores: la era de Ultrón", año: 2015, caracteristicas: { duracion: "140 min.", genero: "Ciencia Ficción" }, calificacion: 7.3 },
    { titulo: "Vengadores: Infinity War", año: 2018, caracteristicas: { duracion: "156 min.", genero: "Ciencia Ficción" }, calificacion: 8.3 },
    { titulo: "Capitana Marvel", año: 2019, caracteristicas: { duracion: "125 min.", genero: "Aventura" }, calificacion: 7.0 },
    { titulo: "Doctor Strange", año: 2016, caracteristicas: { duracion: "115 min.", genero: "Fantasía" }, calificacion: 7.4 },
    { titulo: "Ant-Man", año: 2015, caracteristicas: { duracion: "117 min.", genero: "Acción" }, calificacion: 7.1 },
    { titulo: "Ant-Man y la Avispa", año: 2018, caracteristicas: { duracion: "138 min.", genero: "Acción" }, calificacion: 7.0 },
    { titulo: "Black Panther", año: 2018, caracteristicas: { duracion: "134 min.", genero: "Fantasía" }, calificacion: 7.4 },
])