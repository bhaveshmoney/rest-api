const express = require('express');

const router = express.Router();

router.get('/', ( req , res , next ) => {
    res.status(200).json({
        message : 'handling get request to /products !'
    });
});

router.post('/', ( req , res , next ) => {
    res.status(200).json({
        message : 'handling post request to /products !'
    });
});

router.get('/:productId', (req, res, next) =>{
     const id = req.params.productId;
     if (id === 'special') {
         res.status(200).json({
             message :' you descovered the new productsId'
             
         });
     } else {
         res.status(200).json({
             message :'you passed an id'
         });
     }
});


module.exports = router;