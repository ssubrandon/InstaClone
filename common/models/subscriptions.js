'use strict';

module.exports = function(Subscriptions) {


  Subscriptions.subscribers = function(cb){
    var responce;
    responce = " subscribers has been called ";
    cb(null, responce);
  };
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
