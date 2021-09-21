
import fetch from 'node-fetch';
const fetch=require('node-fetch')
// api url

  
// Defining async function
async function getapi() {
    console.log("I am here");
    const api_url = 
      "http://localhost:8000/";
    // Storing response
    const response = await fetch(api_url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(JSON.stringify(data)); 
   
}

module.exports.getapi=getapi;
