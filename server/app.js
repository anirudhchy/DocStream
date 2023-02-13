require('dotenv').config();
require('express-async-errors');

// extra security packages
const helmet = require('helmet')
const cors = require('cors')
const xss = require('xss-clean')
const rateLimiter = require('express-rate-limit')

const express = require('express');
const app = express();

//connectDB
const connectDB = require('./db/connect')


const authenticateUser = require('./middleware/authentication')

// routers
const authRouter = require('./routes/auth')
const videoRouter = require('./routes/video')
// const jobsRouter = require('./routes/jobs')


// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(rateLimiter({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
}))
app.use(express.json());

// extra packages
app.use(helmet())
app.use(cors())
app.use(xss())


//home route 
app.get('/',(req,res)=>{
    // res.send('<h1>DocStream API</h1>')
    res.sendFile(__dirname + "/index.html");
  })
  
  // routes
  app.use('/api/v1/auth', authRouter)
  app.use('/api/v1/video', authenticateUser, videoRouter)
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
  
