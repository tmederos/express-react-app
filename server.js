const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

if (process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));  
}

app.get('/api/test', (req,res) => {
  res.json({
    message: 'Hello Trish Express!',
  })
});

app.listen(PORT, ()=>{
  console.log('Listening on port '+ PORT);
});