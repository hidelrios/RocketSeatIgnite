const { request, response } = require("express");
const express = require("express")
const { v4: uuidv4 } = require("uuid")
const app = express();

app.use(express.json());

const customers = [];

//Middleware de Verificacao
function verifyIfExistsAccountCPF(request, response, next) {
  const { cpf } = request.headers;
  const customer = customers.find((customer) => customer.cpf === cpf);

  if (!customer) {
    return response.status(400).json({ error: "Customer not found" });
  }

  request.customer = customer;
  return next();

}

function getBalance(statement) {
  const balance = statement.reduce((acc, operation) => {
    if (operation.type === 'credit') {
      return acc + operation.amount

    } else {
      return acc - operation.amount

    }
  }, 0);

  return balance
}

//criar conta
app.post("/account", (request, response) => {
  const { cpf, name } = request.body;


  const customerAlredyExists = customers.some(
    (customer) => customer.cpf === cpf
  );

  if (customerAlredyExists) {
    return response.status(400).json({ error: "Customer alredy exists!" })
  }

  customers.push({
    cpf,
    name,
    id: uuidv4(),
    statement: []
  });
  return response.status(201).send()

});

//realizar deposito
app.post("/deposit", verifyIfExistsAccountCPF, (request, response) => {
  const { description, amount } = response.body;
  const { customer } = response;

  const statementOperation = {
    description,
    amount,
    created_date: new Date(),
    type: "credit"
  }

  customer.statement.push(statementOperation);

  return response.status(201).send();


});

//realizar saque
app.post("/withdraw", verifyIfExistsAccountCPF, (request, response) => {
  const { amount } = request.body;
  const { customer } = request;

  const balance = getBalance(customer.statement);

  if (balance < amount) {
    return response.status(400).json({ error: "Insufficient funds" })
  }
  const statementOperation = {
    description,
    amount,
    created_date: new Date(),
    type: "debit"
  }

  customer.statement.push(statementOperation)

  return response.status(201).send();

});

//obter extrato bancario
app.get("statement/", verifyIfExistsAccountCPF, (request, response) => {

  const { customer } = request

  return response.json(customer.statement)

});

//obter extrato bancario por data
app.get("statement/date", verifyIfExistsAccountCPF, (request, response) => {

  const { customer } = request;
  const { date } = request.query;

  const dateFormat = new Date(date + " 00:00")

  const statement = customer.statement.filter((statement) => statement.created_date.toDateString() === new Date(dateFormat).toDateString())


  return response.json(statement)

});

//atualizar conta
app.put("/account",verifyIfExistsAccountCPF,(request,response)=>{
  const {name} = request.body;
  const {customer} = request;

  customer.name = name;

  return response.status(201).send();

});
//obter dados da conta
app.get("/account",verifyIfExistsAccountCPF,(request,response)=>{
  const {customer} = request;
  return response.json(customer);

});

//deletar conta
app.delete("/account",verifyIfExistsAccountCPF,(request,response)=>{
  const {customer} = request;

  customers.splice(customer,1);
  return response.status(200).json(customers)

});

//obter balance
app.get("/balance",verifyIfExistsAccountCPF,(request,response)=>{
  const {customer} = request;
  const balance = getBalance(customer.statement);
  return response.json(balance)

});

app.listen(3333);