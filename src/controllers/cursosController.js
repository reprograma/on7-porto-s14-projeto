const cursos = require('../models/cursos')

const getAll = (req, res) => {
    cursos.find(function (err, cursos) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send(cursos)
        }
    })
}

const getPorTurno = (req, res) => {
    const parametros = req.query
    cursos.find(parametros, function (err, cursos) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send(cursos)
        }
    })
}

const getById = (req, res) => {
    const id = req.params.id
    cursos.find({ id }, function (err, cursos) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send(cursos)
        }
    })
}

const getBootcamps = (req, res) => {
    cursos.find({ bootcamp: true }, function (err, cursos) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send(cursos)
        }
    })
}

const getCursosGratuitos = (req, res) => {
    const estado = req.params.estado
    cursos.find({ estado, gratuito : true }, function (err, cursos) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send(cursos)
        }
    })
}

const getCursosPagos = (req, res) => {
    const estado = req.params.estado
    cursos.find({ estado, gratuito : false }, function (err, cursos) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send(cursos)
        }
    })
}

const postCurso = (req, res) => {
    let curso = new cursos(req.body)

    curso.save(function(err){
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(201).send({ message : "curso incluído com sucesso"})
        }
    })
}

const deleteCurso = (req, res) => {
    const id = req.params.id
    cursos.deleteMany({ id }, function(err){
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send({ message : "curso removido com sucesso"})
        }
    })
}

const deleteCursosPorTurno = (req, res) => {
    const parametros = req.query
    cursos.deleteMany(parametros, function(err){
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send({ message : "cursos removidos com sucesso"})
        }
    })
}

const putCurso = (req, res) => {
    const id = req.params.id
    cursos.updateMany({ id }, { $set : req.body }, { upsert : true }, function(err){
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send({ message : "curso atualizado com sucesso"})
        }
    })
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