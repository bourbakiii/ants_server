const express = require('express');
const body_parser = require('body-parser');
const app = express().use(body_parser.urlencoded({extended: true})).use(body_parser.json());

const port = process.env.PORT || 3500;

const routes = require('./Settings/routes');
routes(app);

app.listen(port, () => {
    console.log(`App listen on port ${port}`);
});