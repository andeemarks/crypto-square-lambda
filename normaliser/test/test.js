var assert = require('assert');
var httpMocks = require('node-mocks-http');
const fn = require('../src/index');

describe('Normaliser', function () {
    describe('#normalise()', function () {
        it('should gracefully handle no input', function () {
            assert.equal("", fn.normalise("/"));
            assert.equal("", fn.normalise(""));
        });
        it('should make no changes to normal text', function () {
            assert.equal("abcd1234", fn.normalise("/abcd1234"));
        });
        it('should downcase all text', function () {
            assert.equal("abcde", fn.normalise("/aBcDe"));
        });
        it('should remove all spaces', function () {
            assert.equal("abcd", fn.normalise("/a+b+c+d"));
        });
    });
    describe('#http()', function () {
        it('should form a valid response from the request', function () {
            var request = httpMocks.createRequest({
                method: 'GET',
                url: '/abcd',
            });

            var response = httpMocks.createResponse();
            var expectedResponse = fn.normalise("/abcd");

            fn.http(request, response);
            assert.equal(200, response.statusCode);
            assert.equal(expectedResponse, response._getData());
        });
    });
});