const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Get

app.get('/', (req, res) => {
    const fruit = {
        product: "ada",
        price: 220
    }
    res.send(fruit)
  })

app.get("/fruit/banana", (req, res) => {
    res.send({name:"banana", quantity:1000, price:10000})
})

const users = ["Steven", "Smith", "Aston", "David", "Shakib"];

app.get("/user/:id", (req, res) => {
    const id = req.params.id;
    const name = users[id];
    res.send({id , name});
    // console.log(req.query.sort)
})

// Post

app.post("/addUser", (req, res) => {
    //save to database
    const user = req.body;
    user.id = 55;
    res.send(user)
})
  
app.listen(3000, () => console.log("Listening to port 3000"))