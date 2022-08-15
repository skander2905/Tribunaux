const express = require('express');
const { AddTribunal, FindAllTribunaux, findSingleTribunal, UpdateTribunal, DeleteTribunal } = require('../controllers/Tribunaux.controller');
const router = express.Router()

router.post('/Tribunaux', AddTribunal)

router.get('/Tribunaux', FindAllTribunaux)

router.get('/Tribunaux/:id', findSingleTribunal)

router.put('/Tribunaux/:id', UpdateTribunal)

router.delete('/Tribunaux/:id', DeleteTribunal)


module.exports = router;