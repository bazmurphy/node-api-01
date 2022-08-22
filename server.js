// we need to make sure it is included in this file specifically so we can use its methods. 
// In Node.js, when you want to use a package in another file, you must require it.
// To require Express, write the following inside server.js:
const express = require("express");

// To initialise our server, we need to call the express() function. 
// This will create an Express application for us to work with.
const app = express();

// we need to set a port for our server to listen to. 
// Think of a port as a door number; any requests that come to the server will come via that door. 
// Setting a port will allow us to find where our server is running.
// We use the app.listen method to do this. 
// This method takes two arguments: a port and a callback function telling it what to do once the server is running.
// We're going to run our server on port 3000, and add a simple console.log in the callback function. 
// app.listen(3000, function() {
//     console.log("Server is listening on port 3000. Ready to accept requests!")
// })

// TASK
// Try to use ES6 arrow functions instead of function.
app.listen(3000, () => console.log("Server is listening on port 3000. Ready to accept requests!"))

// Now that we've built the server, we need to communicate with it. 
// We are going to control the server with handler functions.
// What is a handler function?
// When a request reaches the server, we need a way of responding to it. 
// In comes the handler function. 
// The handler function is just a function which receives requests and handles them, hence the name.
// The handler function is always called with a request and response object. 
// The response object is what gets sent back to the client. 
// It contains the information that gets displayed in the web page. 
// You can decide what to send back in your response.
// What does a handler function look like in Express?
// The get() method is one of the methods used to define a handler function in Express. 
// It takes two parameters: 
// the endpoint at which to trigger an action (we'll explain more about this in the next step), 
// and the handler function that tells it exactly what to do.
// Here, we are telling our server to respond with "Hello World!" when someone tries to access the webpage.
// app.get("/", function(req, res) {
//     res.send("Hello World!");
// })


app.get("/", function(req, res) {
    console.log(req);
    // ::: Break Exercise Try to console.log the request object inside the handler function.
    res.send("Yay Node!");
})


// ROUTING

// At the moment our server only does one thing. When it receives a request from the / endpoint, it sends back the same response: "Yay Node!".

// Exercise
// Try typing http://localhost:3000/node and see what happens.

// Cannot GET /node

// However by making use of endpoints, we can make the server send different responses for different requests. 
// This concept is called routing.
// What is an endpoint?
// An endpoint is the part of the URL which comes after /. 
// For example: /chocolate is the "chocolate" endpoint. It's the URL to which you send a request.

// What is URL ?
// http://www.domain.com:1234/path/to/resource?a=b&x=y
// http = protocol
// www.domain.com  = host
// :1234 = port
// path/to/resource = resource path
// ?a=b&x=y = query

// Create your own endpoints and send different responses
// We're going to try sending different responses at different endpoints. Remember the app.get() method? 
// To set up routing in your server, we just need to repeat this method with different endpoints.

// Exercise
// Add some code so that your server sends one message when the endpoint is /node and another one when it's /codeyourfuture.

app.get("/node", function (req, res) {
    res.send("Hello this is the NODE endpoint!")
})

app.get("/codeyourfuture", function (req, res) {
    res.send("Hello this is the CodeYourFuture endpoint!")
})


// QUERY PARAMETERS

// In simple terms, a query string is the part of a URL (Uniform Resource Locater) after the question mark (?). 
// It is meant to send small amounts of information to the server via the url. 
// This information is usually used as parameters to query a database, or maybe to filter results. 
// It's really up to you what they're used for.
// Here is an example of a URL with query strings attached:
// https://stackabuse.com/?page=2&limit=3

// app.get("/", function (req, res) {
//     let searchQuery = req.query.search;
//     res.send("Hello World! You searched for " + searchQuery);
// });
//  http://localhost:3000?search=hello

// Exercise
// Add some code so that your server returns the amount of chocolate that you want from /chocolate endpoint. 
// For example
// http://localhost:3000/chocolate?amount=3

app.get("/chocolate", function (req, res) {
    let searchQuery = req.query.amount;
    res.send(`You want ${searchQuery} chocolate(s)`)
})
// http://localhost:3000/chocolate?amount=6
// You want 6 chocolate(s)