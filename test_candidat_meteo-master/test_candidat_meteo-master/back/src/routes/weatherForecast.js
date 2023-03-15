const express = require('express')
const axios= require('axios')
const router= express.Router()
const weatherUtils=require('../weatherUtils')

router.get('/:citieInsee',(req,res)=>{
    const cityInsee=req.params.cityInsee

    axios.get(`https://api.meteo-concept.com/api/ephemeride/0?token=ce3f9e80a67aafb9c8f02ad0328714a2591c79244122b41695d61cbdea7c345f&insee=${cityInsee}`)
        .then(res=>{
            const weather=res.data
            console.log(res.data)
            
            res.json(weather)
        })
        .catch(err=>{
            console.log(error)
        })

    
})

module.exports=router