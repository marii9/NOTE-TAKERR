const fs = require('fs'); // Import the Node.js built-in file system module
const path = require('path'); // Import the Node.js built-in path module

const dataFilePath = path.join(__dirname, '../db/db.json'); // Construct the file path to db.json relative to the current directory (__dirname)

const fsUtils = {
  readJsonFile: function() {
    return new Promise((resolve, reject) => {
      fs.readFile(dataFilePath, 'utf-8', (err, data) => { // Read the file located at dataFilePath as a string in UTF-8 encoding
        if (err) {
          reject(err); // If there is an error, reject the promise with the error
        } else {
          resolve(JSON.parse(data)); // If successful, parse the JSON data and resolve the promise with the resulting object
        }
      });
    });
  },
}; // Define an object containing functions for reading and writing files, including a readJsonFile function that uses the above logic to read JSON data from a file.

const readFile = (filePath) => { // Define a function to read a file located at the given file path
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => { // Read the file at the given path as a string in UTF-8 encoding
      if (err) {
        reject(err); // If there is an error, reject the promise with the error
      } else {
        resolve(data); // If successful, resolve the promise with the file content as a string
      }
    });
  });
};

const writeJsonFile = (data) => { // Define a function to write a JSON object to the file located at dataFilePath
  return new Promise((resolve, reject) => {
    fs.writeFile(dataFilePath, JSON.stringify(data), (err) => { // Stringify the JSON data and write it to the file at dataFilePath
      if (err) {
        reject(err); // If there is an error, reject the promise with the error
      } else {
        resolve(); // If successful, resolve the promise with no value
      }
    });
  });
};

const writeFile = (filePath, content) => { // Define a function to write content to a file at the given file path
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, data, 'utf8', (err) => { // Write the content to the file at the given file path as a string in UTF-8 encoding
      if (err) {
        reject(err); // If there is an error, reject the promise with the error
      } else {
        resolve(); // If successful, resolve the promise with no value
      }
    });
  });
};

const appendFile = (filePath, content) => { // Define a function to append content to a file at the given file path
  return new Promise((resolve, reject) => {
    fs.appendFile(filePath, data, 'utf8', (err) => { // Append the content to the file at the given file path as a string in UTF-8 encoding
      if (err) {
        reject(err); // If there is an error, reject the promise with the error
      } else {
        resolve(); // If successful, resolve the promise with no value
      }
    });
  });
};

const removeFile = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.unlink(filePath, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

module.exports = {
  readFile,
  writeFile,
  appendFile,
  removeFile,
  writeJsonFile,
  fsUtils
  
};