const express = require("express");
const htmlRoutes = require("./app/routing/htmlRoutes");
const apiRoutes = require("./app/routing/apiroutes");

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", htmlRoutes);
app.use("/", apiRoutes);
app.use(express.static("./app/public"));



app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
})