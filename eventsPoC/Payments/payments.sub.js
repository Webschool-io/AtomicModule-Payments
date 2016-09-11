// const myEmitter = require('./emitter.js')

module.exports = (myEmitter) => {

  const makePayment = function(PaymentRequest){
    const PaymentResponse = {
      idTransaction: 'bazinga', 
      status: 'bazinga',
      message: 'bazinga',
      code: 'bazinga' 
    }
    console.log('makePayment', PaymentRequest)
    myEmitter.emit('payments:makePayment:success', PaymentResponse)
  }
  const success = function(PaymentResponse){
  // do something
    console.log('payments:makePayment:success: ' + PaymentResponse)
    myEmitter.emit('order:paymentDone', PaymentResponse)
  }
  const error = function(msg){
  // do something
    console.log('error: ' + msg)
  }

  // Eventos
  myEmitter.on('payments:makePayment', makePayment)
  myEmitter.on('payments:makePayment:success', success)
  myEmitter.on('payments:makePayment:error', error)
}