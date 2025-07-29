import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
  res.send('server is Ready!');
});

app.get('/api/jokes', (req, res)=>{
    const jokes= [
    {
        id: 1,
        joke: "Why don't scientists trust atoms? Because they make up everything!"
    },
    {
        id: 2,
        joke: "Why did the scarecrow win an award? Because he was outstanding in his field!"
    },
    {
        id: 3,
        joke: "What do you call fake spaghetti? An impasta!"
    },
    {
        id: 4,
        joke: "Why did the bicycle fall over? Because it was two-tired!"
    },
    {
        id: 5,
        joke: "What do you call cheese that isn't yours? Nacho cheese!"
    }
]
res.json(jokes);

})
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})