# AtomicModule-Payments

Módulo atômico de pagamentos com Node.js

## Conceito

Esse módulo deverá executar pagamentos não importando qual meio de pagamento digital escolhido, logo para isso precisamos anteriormente definir quais são as funcionalidades básicas que serão implementadas para **TODOS** os meios de pagamento que possam ser utilizados por esse módulo.

## Funcionalidades

- escolher meio de pagamento
- fazer pagamento
- cancelar pagamento
- gerenciar pagamentos

## Interface

Aqui definimos a nomenclatura utilizada para cada funcionalidade, seus parâmetros e seu retorno:

### Escolher meio de pagamento

- nome: setPayment
- parâmetros: Object 
  - {name: 'PayPal', country: 'Brasil'}
- retorno: Boolean
  - true: quando o meio de pagamento foi definido
  - false: quando o meio de pagamento não existe

### fazer pagamento
### cancelar pagamento
### gerenciar pagamentos
