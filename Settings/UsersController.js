'use strict';

const response = require("../response");
const users = [{id: 1, name: "Анаида"}, {id: 2, name: "Мария"}];

exports.get = (req, res) => {
    response.status(users, res);
}