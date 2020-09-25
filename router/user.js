const express = require('express')
const multer = require('multer')
const router = new express.Router()



const upload = multer({
    dest:'images',
     limits:{
         fileSize: 1000000
     },
     fileFilter(req, file, cb) {
        if(!file.originalname.match(/\.(doc|docx)$/)) {
            return cb(new Error('file Must Be In word document'))
        }
         cb(undefined, true )
     }
})

router.post('/upload', upload.single('upload'),(req, res) => {
    res.send()
}, (err, req, res, next) => {
    res.status(400).send({error: err.message})
})





module.exports = router