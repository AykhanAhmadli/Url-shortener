const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose')
const ShortUrl = require('./models/shortUrl')

const app = express();

app.use(bodyParser.json());
app.use(cors({origin:"*"}))

let users = []; // This will act as our "database" for this example

mongoose.connect('mongodb+srv://aykhan:419419419@cluster0.n8v2xb8.mongodb.net/',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

app.get('/', async (req, res) => {
    const shortUrls = await ShortUrl.find()
    res.json({shortUrls:shortUrls});
});

app.post('/shortUrls', async(req,res)=>{
    const response = await ShortUrl.create({full:req.body.fullUrl})
    res.json(response)
    
    
    // res.redirect('/')
})

app.get('/:shortUrl', async (req, res) => {
    const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl })

  
    res.json(shortUrl.full)
  })
// app.post('/', (req, res) => {
//     const user = req.body;
//     users.push(user);
//     res.status(201).json(user);
// });

// app.get('/users/:id', (req, res) => {
//     const { id } = req.params;
//     const user = users.find(u => u.id === id);
//     if (user) {
//         res.json(user);
//     } else {
//         res.status(404).json({ message: `User with id ${id} not found` });
//     }
// });

// app.put('/users/:id', (req, res) => {
//     const { id } = req.params;
//     const newUser = req.body;
//     const userIndex = users.findIndex(u => u.id === id);
//     if (userIndex > -1) {
//         users[userIndex] = newUser;
//         res.json(newUser);
//     } else {
//         res.status(404).json({ message: `User with id ${id} not found` });
//     }
// });

// app.delete('/users/:id', (req, res) => {
//     const { id } = req.params;
//     const userIndex = users.findIndex(u => u.id === id);
//     if (userIndex > -1) {
//         users.splice(userIndex, 1);
//         res.status(204).end();
//     } else {
//         res.status(404).json({ message: `User with id ${id} not found` });
//     }
// });

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
