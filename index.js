const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ hi: "there @c19sn" });
})

const PORT = process.env.PORT || 5020
app.listen(PORT, console.log("Listenting @5020.."));