const http = require("http");
const express = require("express");

const PORT = 3000;

const app = express();

app.get('/home', (request, response, next) => {
    response.setHeader("Content-Type", "text/html");
    response.write(`<html lang="pl">`);
    response.write(`
    <head>
        <meta charset="UFT-8">
        <meta name="viewport" content="width, initial-scale=1.0">
        <title>Home</title>
    </head>
    `);
    response.write(`
    <body>
        <p>Home</p>
    </body>
    `);
    response.write("</html>");
    response.end();
    next();
});

app.get('/student', (request, response, next) => {
    response.setHeader("Content-Type", "text/html");
    response.write(`<html lang="pl">`);
    response.write(`
    <head>
        <meta charset="UFT-8">
        <meta name="viewport" content="width, initial-scale=1.0">
        <title>Student</title>
    </head>
    `);
    response.write(`
    <body>
        <p>STUDENT</p>
    </body>
    `);
    response.write("</html>");
    response.end();
    next();
});

app.get('/add-student', (request, response, next) => {
    response.setHeader("Content-Type", "text/html");
    response.write(`<html lang="pl">`);
    response.write(`
    <head>
        <meta charset="UFT-8">
        <meta name="viewport" content="width, initial-scale=1.0">
        <title>ADD-STUDENT</title>
    </head>
    `);
    response.write(`
    <body>
        <p>ADD-STUDENT</p>
    </body>
    `);
    response.write("</html>");
    response.end();
    next();
});

app.listen(PORT, () => {
    console.log(PORT);
});