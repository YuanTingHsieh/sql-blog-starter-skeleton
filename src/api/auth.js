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

      console.log('origin pass is '+password);
      console.log('User name is '+userName);
      console.log('User email is '+email);
  bcrypt.genSalt(10)
    //.then(res => hash(password, res))
    .then(res => { console.log('salt is '+res+' '+typeof(res)); console.log('pass is '+password+' '+typeof(password)); return bcrypt.hash(password, res); })
    .catch(err => console.log('genSalt failed!!'))
    .then(newpass => {
      console.log('hashed pass is '+newpass);
      console.log('User name is '+userName);
      console.log('User email is '+email);
      return User.create({
        email: email, 
        password: newpass,
        name:  userName,
      });
      }, err => console.log('hash failed!'))
    .then(user => res.json({
      createdId: user.id,
    }))
    .catch(err => console.log('Create user failed!'+err));

});

authRouter.post('/login', async (req, res) => {
  const { email, password, name } = req.body;
  
});

export default authRouter;
