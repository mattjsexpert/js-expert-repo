const { errs } = require('./src/constants');
const File = require('./src/file');
const { rejects, deepStrictEqual } = require('assert');

(async () => {
    {
        const filePath = './mocks/emptyFile-invalid.csv'
        const rejection = new Error(errs.FILE_LENGTH_ERROR_MESSAGE)
        const result = File.csvToJson(filePath)
        await rejects(result, rejection)
    }

    {
        const filePath = './mocks/fourItems-invalid.csv'
        const rejection = new Error(errs.FILE_LENGTH_ERROR_MESSAGE)
        const result = File.csvToJson(filePath)
        await rejects(result, rejection) 
    }

    {
        const filePath = './mocks/fourItems-invalid.csv'
        const result = File.csvToJson(filePath)
        const expected = [
            {
              "id": 123,
              "name": "Erick Wendel",
              "profession": "JavaScript Instructor",
              "birthYear": 1998
            },
            {
              "id": 321,
              "name": "Xuxa da Silva",
              "profession": "JavaScript Specialist",
              "birthYear": 1953
            },
            {
              "id": 231,
              "name": "Joãozinho",
              "profession": "Java Developer",
              "birthYear": 1993
            }
          ]

          deepStrictEqual(JSON.stringify(result), JSON.stringify(expected));
    }
})()