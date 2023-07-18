const router = require('express').Router()

const { getCurrentSecuence } = require('./secuencias.controllers')
const secuenciasServices = require('./secuencias.services')

router.post('/',
    secuenciasServices.createSecuence
)

router.get('/', secuenciasServices.getAllSecuences)

router.get('/a', secuenciasServices.getCurrentSecuence)
router.get('/m', secuenciasServices.getSecuence1)

module.exports = router