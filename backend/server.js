const express = require('express');
const helmet = require('helmet');
const routes = require('./routes');
const cors = require('cors'); // For frontend-backend communication

const app = express();

app.use(helmet());
app.use(express.json());
app.use(cors());
app.use('/', routes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
