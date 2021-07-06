const dbService = require('../../services/db.service');
const externalService = require('../../services/external.service');
const ObjectId = require('mongodb').ObjectId;
const logger = require('../../services/logger.service');


async function query() {
    try {
        const collection = await dbService.getCollection('calls');
        const calls = await collection.find().toArray()
        return calls;
    } catch (err) {
        logger.error('cannot find calls', err);
        throw err;
    }
}

async function getById(callId) {
    try {
        const collection = await dbService.getCollection('calls');
        var call = await collection.findOne({ _id: ObjectId(callId) });
        return call;
    } catch (err) {
        logger.error('cannot find calls', err);
        throw err;
    }
}

async function remove(callId) {
    try {
        const collection = await dbService.getCollection('calls');
        await collection.deleteOne({ _id: ObjectId(callId) });
    } catch (err) {
        logger.error(`cannot remove call ${callId}`, err);
        throw err;
    }
}

async function save(call) {
    try {
        const collection = await dbService.getCollection('calls');
        if (call._id) {
            call._id = ObjectId(call._id); 
            await collection.updateOne({ _id: call._id }, { $set: call });
            return call;
        } else {
            const res = await collection.insertOne(call);
            return res.ops[0];
        }
    } catch (err) {
        logger.error('cannot insert call', err);
        throw err;
    }
}

function _buildCriteria(filterBy) {
    const criteria = {}
    if (filterBy.term) {
        const txtCriteria = { $regex: filterBy.term, $options: 'i' }
        criteria.$or = [
            {
                name: txtCriteria
            },
            {
                phone: txtCriteria
            }
        ]
    }
    // if (filterBy.minBalance) {
    //     criteria.balance = { $gte: filterBy.minBalance }
    // }
    return criteria
}

module.exports = {
    query,
    remove,
    save,
    getById,
};
