// import required files
// Express.js setting
const express = require("express");
const app = express();

// setting for middle-ware
app.use(express.urlencoded({
    extended: false,
}));
app.use(express.json());
app.use("/", require("./routes/routes"));

// listen
const port = 8888;
let server = app.listen(port, () => {
    console.log(`Express.js server has started!\nPort number: ${port}`);
});