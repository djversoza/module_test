const redis = require('redis');
const RedisSMQ = require("rsmq");

exports.testQueue = function() {
  let rsmq = new RedisSMQ();
  rsmq.createQueue({qname:"myqueue"}, function (err, resp) {
    console.log('creating queue')
		if (resp===1) {
      console.log("queue created")
		} else if (err) {
      console.log(err)
    }
});
  }

exports.checkQueue = function () {
  let rsmq = new RedisSMQ();
  rsmq.listQueues( function (error, queues) {
    if( error ){
      console.error( error )
      return
    }
    console.log("Active queues: " + queues.join( "," ) )
  });
} 