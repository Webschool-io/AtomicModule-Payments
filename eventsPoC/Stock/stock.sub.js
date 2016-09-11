// const myEmitter = require('./emitter.js')

module.exports = (myEmitter) => {

  const stockDarBaixaNoStock = function(PaymentRequest){
    console.log('stockDarBaixaNoStock', PaymentRequest)

    myEmitter.emit('stock:stockDarBaixaNoStock:success', 'foi q foi fioo')
  }

  const success = (msg) => {
    console.log('suuucessoooo')
  }
  // Eventos
  myEmitter.on('stock:stockDarBaixaNoStock', stockDarBaixaNoStock)
  myEmitter.on('stock:stockDarBaixaNoStock:success', success)
}