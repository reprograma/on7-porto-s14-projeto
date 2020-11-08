const cursos = require('../models/cursos')

const getAll = (req, res) => {
    res.status(200).send({ message: "pegar todos os cursos"})
}

const getPorTurno = (req, res) => {
    const parametros = req.query
    console.log(parametros)
    res.status(200).send({ message: "pegar todos os cursos por turno"})
}

const getById = (req, res) => {
    res.status(200).send({ message: "pegar todos os cursos por id"})
}

const getBootcamps = (req, res) => {
    res.status(200).send({ message: "pegar todos os cursos por que são do tipo bootcamp"})
}

const getCursosGratuitos = (req, res) => {
    res.status(200).send({ message: "pegar todos os cursos que são gratuitos"})
}

const getCursosPagos = (req, res) => {
    res.status(200).send({ message: "pegar todos os cursos que são pagos"})
}

const postCurso = (req, res) => {
    res.status(200).send({ message: "registrar um curso"})
}

const deleteCurso = (req, res) => {
    res.status(200).send({ message: "remover um curso"})
}

const deleteCursosPorTurno = (req, res) => {
    const parametros = req.query
    console.log(parametros)
    res.status(200).send({ message: "deletar os cursos por turnos"})
}

const putCurso = (req, res) => {
    res.status(200).send({ message: "atualizar um curso"})
}

module.exports = {
    getAll,
    getPorTurno,
    getById,
    getBootcamps,
    getCursosGratuitos,
    getCursosPagos,
    postCurso,
    deleteCurso,
    deleteCursosPorTurno,
    putCurso
}