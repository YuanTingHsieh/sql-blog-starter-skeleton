import { Router } from 'express';
import bcrypt from 'bcryptjs';
//import thenify from 'thenify';

import models from '../models';

const { User } = models;

//const genSalt = thenify(bcrypt.genSalt);
//const hash = thenify(bcrypt.hash);

const authRouter = new Router();

authRouter.post('/signup', async (req, res) => {
  const { email, password, userName } = req.body;

  bcrypt.genSalt(10)
    .then(res => { return bcrypt.hash(password, res); })
    .catch(err => console.log('genSalt failed!!'))
    .then(newpass => {
      return User.create({
        email: email, 
        password: newpass,
        name:  userName,
      });
      }, err => console.log('hash failed!'))
    .then(user => {
      console.log('User id is '+user.id);
      res.json({ createdId: user.id });
    })
    .catch(err => console.log('Create user failed!'+err))
});

authRouter.post('/login', async (req, res) => {
  const { email, password, name } = req.body;
  
});

export default authRouter;
