// ********************** Initialize server **********************************

const server = require('../src/index.js'); //TODO: Make sure the path to your index.js is correctly added

// ********************** Import Libraries ***********************************

const chai = require('chai'); // Chai HTTP provides an interface for live integration testing of the API's.
const chaiHttp = require('chai-http');
chai.should();
chai.use(chaiHttp);
const {assert, expect} = chai;

// ********************** DEFAULT WELCOME TESTCASE ****************************

describe('Server!', () => {
  // Sample test case given to test / endpoint.
  it('Returns the default welcome message', done => {
    chai
      .request(server)
      .get('/welcome')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals('success');
        assert.strictEqual(res.body.message, 'Welcome!');
        done();
      });
  });
});

// *********************** TODO: WRITE 2 UNIT TESTCASES **************************

// Example Positive Testcase :
// API: /add_user
// Input: {id: 5, name: 'John Doe', dob: '2020-02-20'}
// Expect: res.status == 200 and res.body.message == 'Success'
// Result: This test case should pass and return a status 200 along with a "Success" message.
// Explanation: The testcase will call the /add_user API with the following input
// and expects the API to return a status of 200 along with the "Success" message.

describe('Testing Register API', () => {
    it('positive : /register', done => {
      chai
        .request(server)
        .post('/register')
        .send({username: 'John Doe', password: 'testpassword'})
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.message).to.equals(`User credentials entered: John Doe, testpassword`);
          done();
        });
    });
    it('Negative : /register. Checking invalid id', done => {
        chai
        .request(server)
        .post('/register')
        .send({username: 10, password: 23})
        .end((err, res) => {
            expect(res).to.have.status(400);
            expect(res.body.message).to.equals('ERROR: credentials in incorrect format');
            done();
        });
    });
  });



// ********************************************************************************