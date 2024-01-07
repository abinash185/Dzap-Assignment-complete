const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;
const Route = require('./routes/route.js')
const validateFormData = require('./middleware/validationMiddleware.js');

app.use(bodyParser.json());
app.use(cors());
app.use('/',Route);
app.use(validateFormData); 

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
