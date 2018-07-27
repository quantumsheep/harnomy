const db = require('../services/db');

const AccountSchema = new db.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
});

const AccountModel = db.model('Account', AccountSchema);

module.exports = AccountModel;