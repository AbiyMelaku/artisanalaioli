import { passport, register, logout } from './authentication';
import { postBill, getOwnBills, getAllUsers, getFriends, addFriend } from '../db/controllers';

export default function routes(app, express) {
  app.post('/auth/register', register);
  app.post('/auth/login', 
    passport.authenticate('local', { successRedirect: '/',
                                     failureRedirect: '/auth/login',
                                     failureFlash: true })
  );
  app.post('/auth/logout', logout);
  app.post('/bills', postBill);
  app.get('/bills', getOwnBills); // get own bills
  app.get('/users', getAllUsers); // to use when adding friends
  app.get('/me/friends', getFriends);
  app.post('/me/friends', addFriend);

  /*
  Possible endpoints:
  /me --> get own bills (and debts and debtors) 
  */

}
