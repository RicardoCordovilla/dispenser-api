const router = require('express').Router()

const { getCurrentSecuence } = require('./secuencias.controllers')
const secuenciasServices = require('./secuencias.services')

router.post('/',
    secuenciasServices.createSecuence
)

router.get('/', secuenciasServices.getAllSecuences)
router.delete('/delete/:id', secuenciasServices.deleteSecuence)

router.patch('/u/:step', secuenciasServices.updateSecuence1)

router.get('/a', secuenciasServices.getCurrentSecuence)
router.get('/m', secuenciasServices.getSecuence1)

module.exports = router