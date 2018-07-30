const express = require('express');
const action = require('../controllers/action');

/**
 * Action routes **(login, signup)**
 * 
 * @param {express.Express} app 
 */
module.exports = app => {
    app.post('/action/login', action.login);

    app.post('/action/signup', action.signup);
}