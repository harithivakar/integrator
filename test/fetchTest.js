const consume = require('../fetch/consume.js');
const expect = require('chai').expect;


describe('Return type of the returned data from API must be an JSON object', () => {
    it('An JSON Object', async () => {

        const result = await consume.fetchData();
        expect(result).to.be.an('array');
    });
});