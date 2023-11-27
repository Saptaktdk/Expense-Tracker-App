const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();


dotenv.config();

//? To accept data from frontend
app.use(express.json());

//? To access the server from a different domain
app.use(cors({}))

const PORT = process.env.PORT || 8080;

//? Listen to port 5000
app.listen(PORT, console.log(`Server listening on port ${PORT}`));