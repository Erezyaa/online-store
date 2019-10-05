const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http')
const app = require('../src/server');


chai.use(chaiHttp);

describe('categories', () => {

    it('get all', (done) => {
        chai.request(app)
            .get('/api/category')
            .then(response => {
                expect(response.body).to.be.an('array');
                expect(response.body.length).to.equal(0);
                done();
            })
            .catch((err) => {
                throw err;
            });
    });
});