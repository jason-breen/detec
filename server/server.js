const express = require('express');
const path = require('path');

const app = express();
const apiRouter = require('./routes/api');

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// * handle requests for static files
app.use(express.static(path.resolve(__dirname, '../build')));

// app.get('/', (request, response) => {
//   response.sendFile('../client/index.html')
// });

// Send API requests to apiRouter
app.use('/api', apiRouter);

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// Start the server
app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
