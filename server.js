const express = require("express");
const htmlRoutes = require("./app/routing/htmlRoutes.js");

const app = express();
const PORT = 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', htmlRoutes);
app.use(express.static("./app/public"));



app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
})