// npm start to start server ***
// Ctrl C to stop 

// The order should be 
// 1. Imports and express decleration 
//  2. 1st get request to store the route '/'
//  3. Port definitation 

// 2/3 are switched but for purpose of comment order, will be left.


// The party starters - invitations sent out, everyone knows it's about to happen, and it's going to be Express themed!

// The import - telling app we require express 

const express = require("express");

// Create the server > In docs as app = express () or .createServer in node js 

const server = express();

//  Telling the server to use a built in middleware (lies between OS and app running on it for comms and data management). that will allow us to read data we send back and forth
// tells back end to expect JSON and only parse JSON requests **IMPORTANT for passing data to database***

server.use(express.json())


// Now...port and run and tell to listen to connections 

// "hey server, run on this port and listen for an actions"


// define port variable
// Give two options
// 1: process.port for when deploy our server to hosting serving and allows host to configure servers port based on availabiliy 
// if not deployed, default to whatever we've defined in .env file..5000
const port = process.env.Port || 5000;
// instruct our server to listen for connections on that port

server.listen(port, () => console.log(`\n Running on port ${port}\n`))
// if server is outputting running on 5000, it's working even if browser say "cannot get"...issue is we haven't passed any meaningful information, defined route or provided content / data for server to render. 

//  NEXT ... build restful API and define routes for server to interact with . When API is built, (back end) contruct routes so the clientside can communicate and manage resources 

// We are now designing and wiring the routes our front-end needs to take to interact with our stored data

// create a route to route our root route "head scratch"... output more than a console log basically.

// route handler - takes defined route and perform action depending on HTTP request (our case CRUD request)


// firstly a simple message 
server.get('/', (req, res) => {
  res.send("Woof Woof!... Lily out the Pound")
})

//  The break down

// Server.get - server variable from before and .get is the http request
// '/' - route to our url so everytime we nav to our localhost: 5000, get call is fired.
// (req, res) - route handles pass two args(objs) when they're called.
// request(req) - send information from our client to our server
// response(res) send info to client
// res.send("") - Express comes with built in methods to help manage our res and req objects. WOOF WOOF string is hard coded but can be changed so that it's the data we will put from the DB


