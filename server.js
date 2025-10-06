const express = require("express")
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req,res) => {
    res.send("Halo dari Azure App Service, Ini testing awal");
})

app.get("/health", (req,res) => {
    res.status(200).json({status : "Ok"})
})

app.listen(PORT, () => {
    console.log(`Server jalan di port ${PORT}`);
})