const db = require('../services/db');

const AccountSchema = new db.Schema({
    status: { type: Boolean, default: true },
    title: { type: String, required: true },
    publisher: { type: db.Schema.Types.ObjectId, required: true },
    content: { type: String, required: true },
    posted: { type: Date, required: true },
    categories: { type: [db.Schema.Types.ObjectId] }
});

const AccountModel = db.model('Account', AccountSchema);

module.exports = AccountModel;