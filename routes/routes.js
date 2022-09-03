const express = require('express');

const router = express.Router();

const controller = require('../kafka/producer')
const conController = require('../kafka/consumer')

router.post('/producer', controller.createProducer);
router.get('/:topic', conController.createConsumer);

module.exports = router;