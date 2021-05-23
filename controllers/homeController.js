const {response} = require("express");

// responding
exports.sendRequestParameter = (request, response) => {
    response.send(`Successfully accessed!`);
};