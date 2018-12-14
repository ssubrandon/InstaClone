var LoopBackContext = require('loopback-context');

module.exports = function(options) {
  return function storeCurrentUser(req, res, next) {
    if (!req.accessToken) {
      return next();
    }

    req.app.models.account.findById(req.accessToken.userId, function(err, account) {
      if (err) {
        return next(err);
      }
      if (!account) {
        return next(new Error('No account with this access token was found.'));
      }
      var loopbackContext = LoopBackContext.getCurrentContext();
      if (loopbackContext) {
        loopbackContext.set('currentUser', account);
      }
      next();
    });
  };
};
