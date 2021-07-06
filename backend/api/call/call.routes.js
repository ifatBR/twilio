const express = require('express');
const { saveCall, getCalls, deleteCall, getById } = require('./call.controller');
const router = express.Router();

router.get('/', getCalls);
router.get('/:id', getById);
router.post('/', saveCall);
router.put('/:id', saveCall);
router.delete('/:id', deleteCall);

module.exports = router;
