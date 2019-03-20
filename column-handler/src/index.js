'use strict';

exports.http = (request, response) => {
  response.status(200).send('Column handler!');
};

exports.event = (event, callback) => {
  callback();
};