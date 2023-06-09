require('dotenv').config();
const app = require('./app');
const { categoriesRoute } = require('./routes/categories.rote');
const { loginRoute } = require('./routes/login.route');
const { userRoute } = require('./routes/user.route');
const { postRoute } = require('./routes/post.route');

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use('/login', loginRoute);
app.use('/user', userRoute);
app.use('/categories', categoriesRoute);
app.use('/post', postRoute);

app.listen(port, () => console.log('ouvindo porta', port));
