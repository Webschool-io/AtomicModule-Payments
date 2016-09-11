
module.exports = (myEmitter) => {
  
  const PaymentRequest = {}
  myEmitter.emit('payments:makePayment', PaymentRequest)
  // myEmitter.emit('payments:makePayment:error', 'ERRRROOOOO')
}