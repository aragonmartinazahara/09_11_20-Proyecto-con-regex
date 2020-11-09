/* 'calificacion = 7.0' y 'año >= 2018' */
db.peliculas.find( { $and: [{ calificacion: {$eq : 7.0}}, {año: { $gte : 2018}}]})                        
    { "_id" : ObjectId("5fa9a81f724d4d7aa0e23397"), "titulo" : "Capitana Marvel", "año" : 2019, 
    "caracteristicas" : { "duracion" : "125 min.", "genero" : "Aventura" }, "calificacion" : 7 }
    { "_id" : ObjectId("5fa9a81f724d4d7aa0e2339a"), "titulo" : "Ant-Man y la Avispa", "año" : 2018, 
    "caracteristicas" : { "duracion" : "138 min.", "genero" : "Acción" }, "calificacion" : 7 }

/* 'calificacion != 7.0 y 7.4' y 'año > 2017' */
db.peliculas.find( { $and: [{ calificacion: {$nin : [7.0, 7.4]}}, {año: { $gt : 2017}}]})
    { "_id" : ObjectId("5fa9a81f724d4d7aa0e23396"), "titulo" : "Vengadores: Infinity War", "año" : 2018, 
    "caracteristicas" : { "duracion" : "156 min.", "genero" : "Ciencia Ficción" }, "calificacion" : 8.3 }

/* 'calificacion < 6.9' o 'año = 2010 y 2017' */
db.peliculas.find( { $or: [{ calificacion: {$lt : 6.9}}, {año: { $in :[ 2010, 2017]}}]})         
    { "_id" : ObjectId("5fa9a81f724d4d7aa0e2338c"), "titulo" : "Iron Man 2", "año" : 2010, 
    "caracteristicas" : { "duracion" : "125 min.", "genero" : "Acción" }, "calificacion" : 6.8 }
    { "_id" : ObjectId("5fa9a81f724d4d7aa0e2338e"), "titulo" : "El increible Hulk", "año" : 2008, 
    "caracteristicas" : { "duracion" : "114 min.", "genero" : "Ciencia Ficción" }, "calificacion" : 6.2 }
    { "_id" : ObjectId("5fa9a81f724d4d7aa0e2338f"), "titulo" : "Thor", "año" : 2011, 
    "caracteristicas" : { "duracion" : "115 min.", "genero" : "Fantasía" }, "calificacion" : 6.8 }
    { "_id" : ObjectId("5fa9a81f724d4d7aa0e23390"), "titulo" : "Thor: el mundo oscuro", "año" : 2013, 
    "caracteristicas" : { "duracion" : "112 min.", "genero" : "Fantasía" }, "calificacion" : 6.6 }
    { "_id" : ObjectId("5fa9a81f724d4d7aa0e23391"), "titulo" : "Thor: Ragnarok", "año" : 2017, 
    "caracteristicas" : { "duracion" : "131 min.", "genero" : "Fantasía" }, "calificacion" : 7.6 }
    { "_id" : ObjectId("5fa9a81f724d4d7aa0e23393"), "titulo" : "Guardianes de la galaxia Vol. 2", "año" : 2017, 
    "caracteristicas" : { "duracion" : "137 min.", "genero" : "Aventura" }, "calificacion" : 7.6 }

/* 'año <= 2016' y 'calificacion != 7.4' que no coincidan */
    db.peliculas.find( { $nor: [{año: { $lte : 2016}}, {calificacion: {$ne: 7.4}}]})
    { "_id" : ObjectId("5fa9a81f724d4d7aa0e2339b"), "titulo" : "Black Panther", "año" : 2018, 
    "caracteristicas" : { "duracion" : "134 min.", "genero" : "Fantasía" }, "calificacion" : 7.4 }