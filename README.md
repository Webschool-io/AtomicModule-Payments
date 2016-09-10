# AtomicModule-Payments

Módulo atômico de pagamentos com Node.js

## Conceito

Esse módulo deverá executar pagamentos não importando qual meio de pagamento digital escolhido, logo para isso precisamos anteriormente definir quais são as funcionalidades básicas que serão implementadas para **TODOS** os meios de pagamento que possam ser utilizados por esse módulo.

## Funcionalidades

- escolher meio de pagamento
- fazer pagamento
- cancelar pagamento
- gerenciar pagamentos
- verifica/valida dados

## Interface

Aqui definimos a nomenclatura utilizada para cada funcionalidade, seus parâmetros e seu retorno:

### Escolher meio de pagamento

- nome: setPayment
- parâmetros: Object 
  - {name: 'PayPal', country: 'Brasil'}
- retorno: Boolean
  - true: quando o meio de pagamento foi definido
  - false: quando o meio de pagamento não existe

### Fazer pagamento

Essa é a funcionalidade principal, por isso vamos nos basear, por exemplo, na [API do PagSeguro](https://pagseguro.uol.com.br/v2/guia-de-integracao/api-de-pagamentos.html#!rmcl):

```
curl https://ws.pagseguro.uol.com.br/v2/checkout/ -d\
	"email=suporte@lojamodelo.com.br\
	&token=95112EE828D94278BD394E91C4388F20\
	&currency=BRL\
	&itemId1=0001\
	&itemDescription1=Notebook Prata\
	&itemAmount1=24300.00\
	&itemQuantity1=1\
	&itemWeight1=1000\
	&itemId2=0002\
	&itemDescription2=Notebook Rosa\
	&itemAmount2=25600.00\
	&itemQuantity2=2\
	&itemWeight2=750\
	&reference=REF1234\
	&senderName=Jose Comprador\
	&senderAreaCode=11\
	&senderPhone=56273440\
	&senderEmail=comprador@uol.com.br\
	&shippingType=1\
	&shippingAddressStreet=Av. Brig. Faria Lima\
	&shippingAddressNumber=1384\
	&shippingAddressComplement=5o andar\
	&shippingAddressDistrict=Jardim Paulistano\
	&shippingAddressPostalCode=01452002\
	&shippingAddressCity=Sao Paulo\
	&shippingAddressState=SP\
	&shippingAddressCountry=BRA"
	```

Nisso percebemos que para fazer 1 pagamento devemos enviar todos os dados necessários, que são:

Dados básicos:

- email
- token
- currency

Dados do produto:

- itemId{n}
- itemDescription{n}
- itemAmount{n}
- itemQuantity{n}
- itemWeight{n}
- reference

Dados do cliente:

- senderName
- senderAreaCode
- senderPhone
- senderEmail

Dados de envio do produto:

- shippingType
- shippingAddressStreet
- shippingAddressNumber
- shippingAddressComplement
- shippingAddressDistrict
- shippingAddressPostalCode
- shippingAddressCity
- shippingAddressState
- shippingAddressCountry

Com isso podemos criar então 3 **tipos** diferentes de objetos que compõe essa requisição:

- BasicDataType
- SenderDataType
- ShippingDataType

E criando 1 objeto completo com os 3 objetos teremos 1 tipo composto que podemos chamar de:

- PaymentRequestType

Agora sim podemos definir nossa Interface:

- nome: makePayment
- parâmetros: Object do tipo PaymentRequestType
- retorno: Object do tipo PaymentResponseType

### cancelar pagamento

- nome: cancelPayment
- parâmetros:
- retorno:


### gerenciar pagamentos
