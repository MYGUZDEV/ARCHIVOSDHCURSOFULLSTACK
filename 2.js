const express = require('express');
const router = express.Router();
const OldController = require('../controllers/OldController');

function redirigir ( req , res , next ) {
    res.redirect('/')
}

router.get('/ruta-en-desuso', redirigir, OldController.index); 
//Agregá la función redirigir como segundo parámetro de tu ruta