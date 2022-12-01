require('dotenv').config();
const app = require('./app');
const { loginRoute } = require('./routes/login.route');

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use('/login', loginRoute);

app.listen(port, () => console.log('ouvindo porta', port));
