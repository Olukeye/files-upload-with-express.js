 const express = require('express')
 const bodyparser = require('body-parser')
 const router = require('./router/user')
 const multer = require('multer')

 
 const app = express()


 app.use(bodyparser.json())
 app.use(bodyparser.urlencoded({extended:false}))
 app.use( router)


const port = process.env.PORT || 2020
app.listen(port, () => {
    console.log('server running on port ' + port)
})