import { Router } from 'express';
import bcrypt from 'bcryptjs';
import thenify from 'thenify';

import models from '../models';

const { User } = models;

const genSalt = thenify(bcrypt.genSalt);
const hash = thenify(bcrypt.hash);

const articleRouter = new Router();

articleRouter.post('/signup', async (req, res) => {
  const { email, password, name } = req.body;

  genSalt(10)
  .then(res => hash(password, res))
  .then(newpass => {
    const user = User.create({
      email, newpass, name,
    });
    resolve(user)
  })
  .then(user => res.json({
    createdId: user.id,
  }))


});

export default articleRouter;
