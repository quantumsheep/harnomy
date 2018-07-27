const express = require('express');
const action = require('./action');

/**
 * Define all routes
 * 
 * @param {express.Express} app 
 */
module.exports = app => {
    action(app);

    /**
     * Page not found middleware
     */
    app.use((req, res, next) => {
        res.status(404).send('404 Not Found');
    });

    /**
     * Error middleware
     */
    app.use((err, req, res, next) => {
        console.error(err.stack);
        res.status(500).send('500 Server Error');
    });
}