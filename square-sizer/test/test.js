var assert = require('assert');
var httpMocks = require('node-mocks-http');
const fn = require('../src/index');

describe('Square Sizer', function () {
    describe("#squareSizeFor()", function () {
        it("should calculate the size correctly when the input is an exact square", function () {
            assert.equal(fn.squareSizeFor("/abcd"), 2)
        });
        it("should calculate the size correctly when the input is not an exact square", function () {
            assert.equal(fn.squareSizeFor("/abcde"), 3)
        });
    });
    describe('#http()', function () {
        it('should form a valid response from the request', function () {
            var request = httpMocks.createRequest({
                method: 'GET',
                url: '/abcdefgh',
            });

            var response = httpMocks.createResponse();
            var expectedResponse = fn.squareSizeFor("/abcdefgh");

            fn.http(request, response);
            assert.equal(response.statusCode, 200);
            assert.equal(expectedResponse, response._getData());
        });
    });
});