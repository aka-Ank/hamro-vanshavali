const cors = require('cors');
const express = require('express');
const app = express();
app.use(cors());
const PORT = 5000;
app.get("/api/test", (req, res) =>{
    res.json(
        {message:"Backend Working",

        });
        
});

app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`);
});