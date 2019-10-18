const express = require('express');
const app = express();

const db = require('./dataBase').getInstance();
db.setModels();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const {userRouter, houseRouter, authRouter, adminRouter} = require('./routes');

app.use('/users', userRouter);
app.use('/houses', houseRouter);
app.use('/auth', authRouter);
app.use('/admin', adminRouter);

app.all('*', (req, res)=> {
    res.status(404).end();
});


app.listen(3000, (err) => {
    if (err) console.log(err);
    else console.log('Listen 3000 ....')
});
