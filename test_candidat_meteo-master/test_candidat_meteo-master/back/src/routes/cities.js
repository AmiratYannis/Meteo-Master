const express = require('express')
let db = require('../database/database')
const router= express.Router()


router.get('/', (req,res)=>{
    db.all('select * from city').then((err,rows) => {
        if(err){
            throw err;
        }

        const listOfCities=rows
        console.log(listOfCities)
        res.json(listOfCities)
    });
})



module.exports=router
