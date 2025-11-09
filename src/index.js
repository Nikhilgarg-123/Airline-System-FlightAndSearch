const express = require("express");
const bodyParser = require("body-parser");

const { port } = require("./config/serverConfig");
const { parse } = require("dotenv");

const setupAndStartServer = async () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.listen(port, () => {
        console.log(`Server started on port ${port}`);
    });

}

setupAndStartServer();