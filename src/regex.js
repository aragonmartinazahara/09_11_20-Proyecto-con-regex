/* Buscamos titulo que comience por d, que no distinga entre mayúsculas y minúsculas */
db.peliculas.find( { titulo: { $regex: /^d/, $options: 'mi' } } ) 
    { "_id" : ObjectId("5fa9a81f724d4d7aa0e23398"), "titulo" : "Doctor Strange", "año" : 2016, 
    "caracteristicas" : { "duracion" : "115 min.", "genero" : "Fantasía" }, "calificacion" : 7.4 }

/* titulo que termine con n */
db.peliculas.find( { titulo: { $regex: /n$/, $options: 'm' } } ) 
    { "_id" : ObjectId("5fa9a81f724d4d7aa0e2338b"), "titulo" : "Iron Man", "año" : 2008, 
    "caracteristicas" : { "duracion" : "126 min.", "genero" : "Acción" }, "calificacion" : 7.6 }
    { "_id" : ObjectId("5fa9a81f724d4d7aa0e23395"), "titulo" : "Vengadores: la era de Ultrón", "año" : 2015, 
    "caracteristicas" : { "duracion" : "140 min.", "genero" : "Ciencia Ficción" }, "calificacion" : 7.3 }
    { "_id" : ObjectId("5fa9a81f724d4d7aa0e23399"), "titulo" : "Ant-Man", "año" : 2015, 
    "caracteristicas" : { "duracion" : "117 min.", "genero" : "Acción" }, "calificacion" : 7.1 }