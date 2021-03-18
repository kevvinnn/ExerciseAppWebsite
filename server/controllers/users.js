const express = require('express');
const model = require('../models/users');

const app = express.Router();

    app
        .get('/', (req, res)=> res.send(model.GetAll()))
        .get('/:user_id', (req, res)=> res.send(model.Get(req.params.user_id)))
        .post('/', (req, res)=> {
        res.send(model.Add({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            handle: req.body.handle,
            pic: req.body.pic,
        }));
        console.log(req.headers);       
    })
        .patch('/:user_id', (req, res)=> res.send(model.Update(
            req.params.user_id,
            {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            handle: req.body.handle,
            pic: req.body.pic,
        })))
        .delete('/:user_id', (req, res)=> res.send(model.Delete(req.params.user_id)))

module.exports = app;