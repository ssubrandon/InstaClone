'use strict';


module.exports = function(Subscriptions) {

  //req.app.models.account.findById(req.accessToken.userId, function(err, account) {

  Subscriptions.subscribers = function(cb){
    const token = cb && cb.accessToken;
    const userId = token && token.userId;
    //const user = userId ? 'user#' + userId : '<anonymous>';
    const user = 'user#' + userId;
    console.log(userId);
    var subscriptionsList;
    /*
    Subscriptions.find({where: {id: userId}}, function(err, account) {
      if (err) {
        //return next(err);
      }
      if (!account) {
        //return next(new Error('No subscriptions with this access token was found.'));
      }

      });
      */
      var t = "t";
      cb(null, user);
    };
  //  console.log('%s', responce);
  Subscriptions.remoteMethod(
      'subscribers', {
        http: {
          path: '/subscribers',
          verb: 'get'
        },
        returns: {
            arg: 'status',
            type: 'string'
        }
      }
  );
};
