require('dotenv').config();
require('express-async-errors');

// extra security packages
const cors = require('cors')


const express = require('express');
const app = express();

//connectDB
const connectDB = require('./db/connect')


// const authenticateUser = require('./middleware/authentication')

// routers
const authRouter = require('./routes/auth')
const videoRouter = require('./routes/video')
// const jobsRouter = require('./routes/jobs')


// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');


app.use(express.json());

// extra packages
app.use(cors())


//home route 
app.get('/',(req,res)=>{
    // res.send('<h1>DocStream API</h1>')
    res.sendFile(__dirname + "/index.html");
  })
  
  // routes
  app.use('/api/v1/auth', authRouter)
  app.use('/api/v1/video', videoRouter)
//         // passing authenticateUser middleware to protect all job routes
//   app.use('/api/v1/jobs', authenticateUser, jobsRouter)
  
// // uploading video
// app.get('/init-video', function (req, res) {

  
// });

// // streaming video
// app.get("/mongo-video", function (req, res) {
  
// });


  app.use(notFoundMiddleware);
  app.use(errorHandlerMiddleware);
  
  const port = process.env.PORT || 3000;
  
  const start = async () => {
    try {
      await connectDB(process.env.MONGO_URI)
      app.listen(port, () =>
        console.log(`Server is listening on port ${port}...`)
      );
    } catch (error) {
      console.log(error);
    }
  };
  
  start();
  
