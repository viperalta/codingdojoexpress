const express = require("express");
const { datatype } = require("faker");
const faker=require("faker");
const app = express();

class User {
  constructor(){
    this.carnet=faker.datatype.uuid();
    this.firstname = faker.name.firstName();
    this.lastname = faker.name.lastName();
    this.phone = faker.phone.phoneNumberFormat();
    this.email = faker.internet.email();
    this.password = faker.internet.password();
  }
}

class Empresa {
  constructor(){
    this.carnet=faker.datatype.uuid();
    this.name=faker.company.companyName();
    this.calle=faker.address.streetName();
    this.ciudad=faker.address.city();
    this.estado=faker.address.state();
    this.codigopostal=faker.address.zipCode();
    this.pais=faker.address.country();
  }
}

app.get("/api", (req, res) => {
  res.send("Our express api server is now sending this over to the browser");
});

app.get("/api/user/new", (req, res) => {
  usernew =  new User();
  res.json(usernew);
});

app.get("/api/companies/new", (req, res) => {
  companynew =  new Empresa();
  res.json(companynew);
});

app.get("/api/user/company", (req, res) => {
  usernew =  new User();
  companynew =  new Empresa();
  array=[usernew,companynew];
  res.json(array);
});

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.send("Our express api server is now sending this over to the browser");
});

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
