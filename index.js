const express = require('express');
const app = express();

const port = process.env.PORT || 3500;

const body_parser = require('body-parser');

app.listen(port, () => {
    console.log(`App listen on port ${port}`);
});