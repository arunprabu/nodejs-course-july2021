// test suite
const chai = require('chai');
const { expect } = chai;
const chaiHttp = require('chai-http');

// setup chai-http plugin
chai.use(chaiHttp);

// npm i mocha -g 
// Refer package.json for test command
// try npm run test 

// block to have group of related test cases
describe('Testing Movies API', () => {
  
  // test case 
  it('should return status 200', (done) => { // mocha provides done
    chai.request('http://localhost:3001/movies')
      .get('/')
      .then((res) => {
        // test with api's such as expect, assert, should 
        expect(res).to.have.status(200);
        done();
      })
      .catch((err) => {
        throw (err);
      });
  });





});
