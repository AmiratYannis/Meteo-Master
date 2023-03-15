const express = require('express')
const axios= require('axios')
const router= express.Router()
const weatherUtils=require('../weatherUtils')

router.get('/:citieInsee',(req,res)=>{
    const cityId=req.params.cityInsee

    axios.get('https://api.meteo-concept.com/api/ephemeride/0?token=281861bc3e43474217eff22b4bcd406433694b182034e09399554888c0ec5c35')
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