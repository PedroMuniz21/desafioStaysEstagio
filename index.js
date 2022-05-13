const express = require("express");
const app = express();

//View engine
app.set('view engine', 'ejs');

//Static
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.render("index")
});

app.listen(3000, () => {
    console.log("O servidor está rodando!")
})