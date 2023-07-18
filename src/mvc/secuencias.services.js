const secuenciasControllers = require('./secuencias.controllers')

const createSecuence = (req, res) => {
    const { timestr, steps } = req.body
    secuenciasControllers.createSecuence({ timestr, steps })
        .then(data => {
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(404).json({ message: err.message })
        })
}

const getAllSecuences = (req, res) => {
    secuenciasControllers.getAllSecuences()
        .then(data => {
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(404).json({ message: err.message })
        })
}

const getCurrentSecuence = (req, res) => {
    secuenciasControllers.getCurrentSecuence()
        .then(data => {
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(404).json({ message: err.message })
        })
}

const getSecuence1 = (req, res) => {
    secuenciasControllers.getSecuence1()
        .then(data => {
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(404).json({ message: err.message })
        })
}

module.exports = {
    createSecuence,
    getAllSecuences,
    getCurrentSecuence,
    getSecuence1
}