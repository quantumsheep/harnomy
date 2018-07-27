const express = require('express');
const action = require('../controllers/action');

/**
 * Index routes **(index, login, signup)**
 * 
 * @param {express.Express} app 
 */
module.exports = app => {
    app.post('/action/signup', action.signup);
}