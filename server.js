import express from 'express';
import users from './routes/users.js';
import messages from './routes/messages.js';
import 'dotenv/config';
import './db/client.js';
import cors from 'cors';

//initializing the express app
const app = express();
//defining the port
const port = 8000;

app.use(cors());
//built in middleware function in Express starting from v4.16.0. It parses incoming JSON requests and puts the parsed data in req.body. Without this, req.body would be undefined.
app.use(express.json());

//appending the users route
app.use('/users', users);
//appending to messages route
app.use('/messages', messages);
//creating the initial route
app.get('/', (req, res) => {
	res.send('<h1>Connecting your MongoDB database with mongoose!</h1>');
});

app.listen(port, () => {
	console.log(`app is listening on the ${port}`);
});
