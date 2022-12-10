const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Nerdom',
    description: 'An app for nerds',
  },
  host: '',
  schemes: [
    'http',
    'https'
  ],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./app.js'];


swaggerAutogen(outputFile, endpointsFiles, doc);