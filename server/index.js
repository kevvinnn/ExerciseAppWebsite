
const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const { LoginRequire } = require('./controllers/security');
const usersCtrl = require('./controllers/users');
const usersModel = require('./controllers/users')
const postsCtrl = require('./controllers/posts');

const app = express();
const port = process.env.PORT || 3000;

app
    .use(express.json())
    .use(express.static('./docs'))

    .use((req, res, next)=>{

      const token = req.headers.authorization?.split(' ')[1];
      req.user = token && usersModel.FromJWT(token);
      next();
    })

    .use('/user', usersCtrl)
    .use('/posts', LoginRequire, postsCtrl)

    // All the way at the end of the pipeline. Return instead of not found
    .get('*', (req, res) => {
        res.sendFile( path.join(__dirname, '../docs/index.html' ) );
    })

    .use((error, req, res, next)=>{
      console.error(error);
      res.status(error.code || 500);
      res.send( { msg: error.msg});
    })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})