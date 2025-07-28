const express = require("express");
const app = express();

const PORT = 3000;
const data = {"ip":"152.58.97.49","userAgent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36"}

app.get("/api/data", (req, res) => {
  res.json(data);
});


app.get("/", (req, res) => {
  res.send("Hello, VideoTube!");
});

app.get("/about", (req, res) => {
  res.send("About VideoTube");
});

app.get("/login", (req, res) => {
  res.send(
    '<h1>Login Page</h1><forum action="/login" method="post"><input type="text" name="username" placeholder="Username"><input type="password" name="password" placeholder="Password"><button type="submit">Login</button></form>'
  );
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


