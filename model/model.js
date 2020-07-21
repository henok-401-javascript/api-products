'use string';

const schema = require('./products.schema');

class Model{
  constructor(schema){
    this.schema = schema;
  }
  async readAll(){
   let result =  await this.schema.find();
   return result;
  }
  async create(val){
let result  = await this.schema.create(val);
return result;
  }
}

module.exports = {
  product:new Model(schema),
}