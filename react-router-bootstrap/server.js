import express from 'express';
import path from 'path';
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', function(req, res, next) {
  console.log('Request: [GET]', req.originalUrl)
  res.sendFile(path.resolve(__dirname, 'index.html'));
});


const port = 3000;
app.listen(port);

console.log('localhost:' + port);
