'use strict';

exports.http = (request, response) => {
  response.status(200).send(this.squareSizeFor(request.url));
};

exports.squareSizeFor = (input) => {
  return Math.ceil(Math.sqrt(stripLeadingPath(input).length)).toString()
}

function stripLeadingPath(input) {
  return input.replace(/^\//, "");
}

exports.event = (event, callback) => {
  callback();
};