const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, respond, body) {
    if (error) {
    callback(error, null);//if website doesn't work return error
    }
  
    const data = JSON.parse(body);//turn body into object
    if (data[0] === undefined) {
      callback(null,`${breedName} is not found`);//if name of cat is not available
    } else {
      callback(null,data[0]["description"]);//show description of cat in the database
    }
  });
};
module.exports = {fetchBreedDescription};