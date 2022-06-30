'use strict';


module.exports = (app) => {
    const indexController = require('./../Settings/IndexController');
    const usersController = require('./../Settings/UsersController');
    app.route('/').get(indexController.index);
    app.route('/users').get(usersController.get);
}