import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import connect from './database/conn.js';
import router from './router/route.js';


const app = express()

/**  middleware */
app.use(express.json());

app.use(cors());

app.use(morgan('tiny'));

app.disable('x-powered-by');

const port = 9000;

/** HTTP GET Request */
  app.get('/', (req, res) => {
    res.status(201).json("Home GET Request");
});
 

/** api routes start here */
 app.use('/api', router)

connect().then(() => {

    try {

        app.listen(port, () => {

            console.log(`server connected to http://localhost:${port}`);
        })

    }catch(error) {

        console.log('cannot connect to the server')
    }
    
    }).catch(error=>{
    console.log("Invalid database connection..!")
      })


      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

