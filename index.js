const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('my smarty node experiment with nodemon');
});

const users = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "email": "Sincere@april.biz",
        "phone": "1-770-736-8031",
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "email": "Shanna@melissa.tv",
        "phone": "1-010-692-6593",
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "email": "Nathan@yesenia.net",
        "phone": "1-463-123-4447",
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "email": "Julianne.OConner@kory.org",
        "phone": "1-493-170-9623",
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "email": "Lucio_Hettinger@annie.ca",
        "phone": "1-254-954-1289",
    },
    {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "email": "Karley_Dach@jasper.info",
        "phone": "1-477-935-8478",
    },
    {
        "id": 7,
        "name": "Kurtis Weissnat",
        "email": "Telly.Hoeger@billy.biz",
        "phone": "1-210-067-6132",
    }
]

app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matchedUser = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(matchedUser);
    }
    else {
        res.send(users);
    }
})
app.get('/user/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);
    res.send(user);
})
app.post('/user', (req, res) => {
    console.log(req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.listen(port, () => {
    console.log(`Listen to port: ${port}`);
});