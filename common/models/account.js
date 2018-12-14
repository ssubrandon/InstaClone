'use strict';
var admin = require('firebase-admin');
var serviceAccount = require('../../server/serviceAccountKey.json');
admin.initializeApp({
type: "service_account",
credential: admin.credential.cert(serviceAccount),
});

var LoopBackContext = require('loopback-context');


module.exports = function(Account) {
  Account.afterRemote('login', function(ctx){
      ctx.res.cookie('access_token', ctx.result.id, { signed: true, maxAge: ctx.result.ttl * 1000 });
      return Promise.resolve();
    });

    Account.afterRemote('logout', function(ctx){
      ctx.res.clearCookie('access_token');
      return Promise.resolve();
    });
};
