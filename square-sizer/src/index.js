'use strict';

exports.http = (request, response) => {
  response.status(200).send('Square sizer!');
};

exports.event = (event, callback) => {
  callback();
};