const myEmitter = require('./emitter.js')

// Subscribers
require('./Stock/stock.sub.js')(myEmitter)
require('./Orders/orders.sub.js')(myEmitter)
require('./Payments/payments.sub.js')(myEmitter)

// Publishers
require('./Payments/payments.pub.js')(myEmitter)