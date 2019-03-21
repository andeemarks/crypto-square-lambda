'use strict';

exports.http = (request, response) => {
  response.status(200).send('Normaliser!');
};

exports.event = (event, callback) => {
  callback();
};