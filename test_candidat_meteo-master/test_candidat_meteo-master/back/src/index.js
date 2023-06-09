const express= require('express')
const db = require('./database/database');
const app=express()
const port=3006

// pour permettre la communication entre le front et le back en dev.
const cors = require('cors');


app.use(express.json)
app.use(cors({
  credentials: true
}))


// a ajouter pour la communication entre le front et le back en dev lorsque express est instancié
/*app.use(cors({
  credentials: true
}));*/

// Initialisation de la base avec les deux tables nécessaires (à garder)
db.init();




const citiesRouter=require('./routes/cities')
const weatherRouter=require('./routes/weatherForecast')



app.use("/cities",citiesRouter)
app.use("/weather",weatherRouter)



app.listen(port, ()=>{
  console.log(`Le serveur Meteo Master s'execute sur: http://localhost:${port}`)
})

// dans le cas où le front est fait en js natif, voici une ligne de commande à ajouter pour servir le front à partir du projet node
// si vous faîtes du VueJS ou du React ce n'est pas nécessaire
// dans ce cas il n'est pas nécessaire d'utiliser la partie cors (ligne 6 à 8)
//app.use('/', express.static('../../front/'));
