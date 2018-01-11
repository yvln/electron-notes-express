const express   			  = require('express');
const app       			  = express();
const port       				= process.env.PORT || 5000;

const notesController 	= require('./controllers/note.js');
const bodyParser				= require('body-parser');

const cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', notesController)


app.listen(port, () => {
	console.log(`Listening on port ${port}`);
})
