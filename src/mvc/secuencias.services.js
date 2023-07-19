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

const updateSecuence1 = (req, res) => {
    const steps = req.params.step
    // const id = req.params.id
    secuenciasControllers.updateSecuence1(steps)
        .then(data => {
            if (data[0]) {
                res.status(200).json({ message: `secuence with ID: ${1}, edited succesfully`, data: data })
            }
            else { res.status(200).json({ message: 'Invalid ID' }) }
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


const deleteSecuence = (req, res) => {
    secuenciasControllers.deleteSecuence(req.params.id)
        .then(data => {
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(404).json({ message: err.message })
        })
}

module.exports = {
    createSecuence,
    updateSecuence1,
    getAllSecuences,
    getCurrentSecuence,
    getSecuence1,
    deleteSecuence
}