'use strict';

exports.http = (request, response) => {
  response.status(200).send(this.normalise(request.url));
};


exports.normalise = (input) => {
  return stripNonAlphanumeric(stripLeadingPath(input)).toLowerCase()
}

exports.event = (event, callback) => {
  callback();
};

function stripNonAlphanumeric(input) {
  return input.replace(/[^a-z0-9]/gi, "");
}

function stripLeadingPath(input) {
  return input.replace(/^\//, "");
}