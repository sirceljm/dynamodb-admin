const express = require("express");
const clc = require("cli-color");
const router = require("./router.js");

require("es7-object-polyfill");

console.log("dynamodb-admin");

if (process.env.NODE_ENV === "production") {
    console.error(clc.red("Do not run this in production!"));
    process.exit(1);
}

const app = express();

app.use("/", router);

const port = process.env.PORT || 8001;
app.listen(port, () => {
    console.log(`  listening on port ${port}`);
});
