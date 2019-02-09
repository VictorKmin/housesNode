const express = require('express');
const app = express();

const dataBase = require('./dataBase').getInstance();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE,PATCH");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});
dataBase.setModels();

app.use(express.json());
app.use(express.urlencoded({extends: true}));

const userRouter = require('./router/userRouter');
const houseRouter = require('./router/houseRouter');

app.use('/user', userRouter);
app.use('/house', houseRouter);


app.listen(3000, (err) => {
    if (err) console.log(err)
    else console.log('Listen 3000 ....')
});
