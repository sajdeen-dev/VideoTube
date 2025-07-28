const express = require('express');
const app = express();


const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, VideoTube!');
});

app.get('/about', (req, res) => {
  res.send('About VideoTube');
}); 


app.get('/login', (req, res) => {
  res.send('<h1>Login Page</h1><form action="/login" method="post"><input type="text" name="username" placeholder="Username"><input type="password" name="password" placeholder="Password"><button type="submit">Login</button></form>');
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}); 