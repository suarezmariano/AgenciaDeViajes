const express = require("express");
const app = express();
const path = require("path");

const publicFolderPath = path.resolve(__dirname,"./public");
app.use(express.static(publicFolderPath));

app.listen(process.env.PORT || 3000,() => {
    console.log("Servidor ok")
});

app.get("/", (req,res) => {
    res.sendFile(path.resolve(__dirname,"./views/index.html"));
});