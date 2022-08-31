const express = require('express');
const cors = require('cors');
const app = express();

const authRouter = require('./routes/auth.routes.cjs');
const userRouter = require('./routes/user.routes.cjs');

app.use(express.json());
app.use(cors());

app.use('/auth', authRouter);
app.use('/user', userRouter);

app.get('/', (request, response) => {
    response.json({
        message: 'Server running...',
    });
});

module.exports = app;
