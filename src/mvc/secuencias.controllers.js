const { Op } = require("sequelize")
const Secuencias = require("./secuencias.model")

const digits = (num) => {
    let digit = num < 10 ? '0' + num : num + ''
    return digit
}

const createSecuence = async (data) => {
    const newSecuence = await Secuencias.create({
        timestr: data.timestr,
        steps: data.steps
    })
    return newSecuence
}

const updateSecuence1 = async (steps) => {
    const result = await Secuencias.update({ steps: steps }, {
        where: { id: 1 }
    })
    return result
}

const getAllSecuences = async () => {
    const data = await Secuencias.findAll({
    })
    return data
}

const getCurrentSecuence = async () => {
    const currentDay = new Date().toLocaleTimeString('es-EC', { timeZone: 'America/Guayaquil' })
    const currentTime = currentDay.substring(0, 2) + ':' + currentDay.substring(3, 5)
    // const currentTime2 = digits(currentDay.getHours()) + ':' + digits(currentDay.getMinutes())
    const data = await Secuencias.findOne({
        where: {
            timestr: { [Op.eq]: currentTime }
        }
    })

    return data ? data.steps : 0
    // return { currentTime: currentTime }
}

const getSecuence1 = async () => {
    const data = await Secuencias.findOne({
        where: { id: 1 },
        attributes: ['steps']
    })
    return data.steps
}

module.exports = {
    createSecuence,
    updateSecuence1,
    getAllSecuences,
    getCurrentSecuence,
    getSecuence1
}