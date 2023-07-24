// traer a express y crear una aplicacion usandolo
const express = require ("express")
const app = express()

//configurar el logger
const morgan = require ("morgan")
app.use(morgan(`dev`))

// definir las rutas 
app.get('/home', function(req, res){
    res.send('Bienvenidos al mejor sitio de peliculas de la region')
})
app.get('/api/movie', function(req, res){
    res.send('EL CATÁLOGO DE PELÍCULAS AÚN ESTÁ EN CONSTRUCCIÓN.')
})

app.get('/api/cines', function(req, res){
    res.send('EL CATÁLOGO DE CINES AÚN ESTÁ EN CONSTRUCCIÓN.')
})

app.get('/api/movie/expoferia', function(req, res){
    res.send('GRAN ESTRENO DE LA NUEVA TEMPORADA DE BETTY LA FEA <br><img src="https://media.vogue.mx/photos/5dfb443c38e2b300084b20b7/master/pass/GettyImages-818664.jpg" width="500">');
})


//iniciar servidor
const port = 3000 //pueden elegir el puerto que quieran
app.listen(port , () => {
    console.log("SERVIDOR EN EJECUCION: " + `http://localhost:${port}`)
})
