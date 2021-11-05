const request = require('request');
const argv = process.argv.slice(2);


const fetchBreedDescription = function(breedName, callback) {
request(`https://api.thecatapi.com/v1/breeds/search?q=${argv[0]}`, function(error, respond, body) {
  const data = JSON.parse(body);//turn body into object
  
  if (error) {
    callback(`Request not found`,error);//if website doesn't work return error
  }
  
  if (data[0] === undefined) {
    callback(`${argv} is not found`);//if name of cat is not available
  } else {
    callback(data[0]["description"]);//show description of cat in the database
  }
});
};
