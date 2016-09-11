// const myEmitter = require('./emitter.js')

module.exports = (myEmitter) => {

  const paymentDone = function(PaymentRequest){
    console.log('paymentDone', PaymentRequest)
    myEmitter.emit('stock:stockDarBaixaNoStock', 'de a baixa ai safadooo')
  }
  myEmitter.on('order:paymentDone', paymentDone)
}