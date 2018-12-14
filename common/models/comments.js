'use strict';
var LoopBackContext = require('loopback-context');

module.exports = function(Comments) {

  Comments.CurrentUser = function(options){
  //  const token = options && options.accessToken;
    //const userId = token && token.userId;
  //  const user = userId ? 'user#' + userId : '<anonymous>';
    //responce = " subscribers has been called ";
    var ctx = LoopBackContext.getCurrentContext();
    var currentUser = ctx && ctx.get('currentUser');
    var test = options.signedCookies
  //var currentUser = ctx.get('currentUser');
    console.log('%s', test);
    options(null, test);
  };
  Comments.remoteMethod(
      'CurrentUser', {
        http: {
          path: '/CurrentUser',
          verb: 'get'
        },
        returns: {
            arg: 'status',
            type: 'string'
        }
      }
  );
};
