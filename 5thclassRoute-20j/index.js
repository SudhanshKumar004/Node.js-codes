const express = require("express");
const app = express();
const empRoute = require("./routes/empRoute")
const prodRoute = require("./routes/prodRoute")

app.use("/employee", empRoute);
app.use("/products" , prodRoute);

app.listen(8002);