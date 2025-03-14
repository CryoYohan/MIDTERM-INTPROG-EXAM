import express from "express"

const app = express();

const port = 3000;

app.get('/test', (req,res) =>{
    res.json({message:"Express is working! CYRIL JOHN T. YPIL"})
});

app.listen(port, () =>{
    console.log(`Server is listening at http://localhost:${port}`)
});
