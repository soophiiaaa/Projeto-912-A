const express = require('express')
const bodyParser = require('body-parser')
const userRoutes = require('./routes/users');

const app = express()
const port = 3000

app.use(bodyParser.json());

app.use(userRoutes);
app.use(profileRoutes);
app.use(authRoutes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
