const express = require('express');
const {resolve} = require('path');
const fileUpload = require('express-fileupload');
const app = express();

const db = require('./dataBase').getInstance();
db.setModels();

app.use(fileUpload({}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(resolve(__dirname, 'public')));
global.appRoot = __dirname;

const {userRouter, houseRouter, authRouter, adminRouter} = require('./routes');

app.use('/users', userRouter);
app.use('/houses', houseRouter);
app.use('/auth', authRouter);
app.use('/admin', adminRouter);

app.all('*', (req, res) => {
    res.status(404).end();
});


app.listen(3000, (err) => {
    if (err) console.log(err);
    else console.log('Listen 3000 ....')
});
