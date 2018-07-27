const express = require('express');
const bcrypt = require('bcrypt');

const db = require('../services/db');

/**
 * Login page
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
exports.signup = (req, res) => {
    const process = new Promise((resolve, reject) => {
        if (req.body.username && req.body.email && req.body.password) {
            const verification = {
                isUsernameError: !(req.body.username && req.body.username.length >= 3),
                isEmailError: !(req.body.email && req.body.email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)),
                isPasswordError: !(req.body.password && req.body.password.length >= 8),
            };

            if (!verification.isUsernameError && !verification.isEmailError && !verification.isPasswordError) {

            } else {
                reject("Inputs doesn't match the requirements.");
            }
        } else {
            reject('Please complete the form before sending it.');
        }
    });

    process
        .then(() => {
            res.end(JSON.stringify({
                success: true
            }));
        })
        .catch(err => {
            res.end(JSON.stringify({
                success: false,
                error: err
            }));
        });
};