const express = require('express');
const bcrypt = require('bcrypt');

const AccountModel = require('../models/account');

/**
 * Login page
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
exports.signup = (req, res) => {
    /**
     * @type {Promise<string[]>}
     */
    const process = new Promise((resolve, reject) => {
        if (req.body.username && req.body.email && req.body.password) {
            const verification = {
                isUsernameError: !(req.body.username && req.body.username.length >= 3),
                isEmailError: !(req.body.email && req.body.email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)),
                isPasswordError: !(req.body.password && req.body.password.length >= 8),
            };

            if (!verification.isUsernameError && !verification.isEmailError && !verification.isPasswordError) {
                const findSimilarAccounts = AccountModel.find({
                    $or: [
                        { username: req.body.username },
                        { email: req.body.email },
                    ]
                });
                
                findSimilarAccounts.then(accounts => {
                    if (accounts) {
                        const errors = [];

                        accounts.forEach(account => {
                            if (account.username === req.body.username) {
                                errors.push('There is already an account with this username.');
                            }
                            
                            if (account.email === req.body.email) {
                                errors.push('There is already an account with this email.');
                            }
                        });

                        reject(errors);
                    } else {
                        bcrypt.hash(req.body.password, 10, (err, encryptedPassword) => {
                            const account = new AccountModel({
                                username: req.body.username,
                                email: req.body.email,
                                password: encryptedPassword,
                            });

                            account.save()
                                .then(() => {
                                    console.log(`New account: ${req.body.username} <${req.body.email}>`);
                                })
                                .catch(err => {
                                    console.log(err);
                                });
                        });

                        resolve();
                    }
                });
                
                findSimilarAccounts.catch(err => {
                    console.log(err);
                });
            } else {
                reject(["Inputs doesn't match the requirements."]);
            }
        } else {
            reject(['Please complete the form before sending it.']);
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
                errors: err
            }));
        });
};