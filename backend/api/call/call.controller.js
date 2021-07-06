const logger = require('../../services/logger.service');
const callService = require('./call.service');

async function getCalls(req, res) {
    try {
        const calls = await callService.query(req.query);
        res.send(calls);
    } catch (err) {
        logger.error('Cannot get calls', err);
        res.status(500).send({ err: 'Failed to get calls' });
    }
}

async function getById(req, res) {
    try {
        const call = await callService.getById(req.params.id);
        res.send(call);
    } catch (err) {
        logger.error('Failed to get call', err);
        res.status(500).send({ err: 'Failed to get call' });
    }
}

async function deleteCall(req, res) {
    try {
        await callService.remove(req.params.id);
        res.send({ msg: 'Deleted successfully' });
    } catch (err) {
        logger.error('Failed to delete call', err);
        res.status(500).send({ err: 'Failed to delete call' });
    }
}

async function saveCall(req, res) {
    console.log('saving');
    try {
        var call = req.body;
        savedCall = await callService.save(call);
    
        res.send(savedCall);
    } catch (err) {
        console.log(err);
        logger.error('Failed to add call', err);
        res.status(500).send({ err: 'Failed to add call' });
    }
}



module.exports = {
    getCalls,
    deleteCall,
    getById,
    saveCall,
};
