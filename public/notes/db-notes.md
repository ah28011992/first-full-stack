// The DB

// Will store lots of unique info and will need to communicate with each other

// Tables...the dreaded rows and columns (I better start getting over my fear of excel and tables...:$)

//  Define the tables by the unique data we store on planning in app...makes the collection of tables (barf)

// fun tip - think of tables in nouns used in the app. e.g app with allow admin log in, edit a kennel / dog's info.
// From that sentence can pick out admin, kennels and dogs >> frame them as potential dbs


// Table interaction
// Think about how they interact / communicate
// 1. Primary keys
// When storing data in tables, we need to assign it a PRIMARY KEY *** IMPORTANT FOR RETRIEVEING DATA***
// It's common for primary keys to be id's. 
// In this project, the db we will use will allow us to add an autoincrememnt prop to an id val so when we submit our data, it autogenerate a unique numeric id relative to the vals already store in the table
// When defining primary keys - Can be used to form relationships with other pieces of data from other tables. Theres are 3 types: 
// 1. one to one 
// 2. one to many
// 3. Many to many 

// Create 1-1 or 1-many relationships, utilise objects primary key as a forign key by assigning a piece of dat's primary key to another object as a forign key. This creates connection between both data points 

// e.g 1-1 : kennels primary key being used as forin key with one of our admins ensuring that each kennel has only one admin and each admin only one kennel 

// e.g one to many 
//  kennels primary key with multiple dogs. Kennel can have multiple dogs linked but prevents a single dog being assigned to multiple kennels at one time.


// reeeeelational tables i.e. many to many
 
// two tables to share many data points, but unlike one to many, not limited to one

// we're assigning muliple dogs to single kennels 
// if we leg dogs be assigned to multiple kennels, it'd be a many to many relationship. Both sides can have multiple relations

// We must contruct a third table (Connection table or relational tables) which allow us to define connections between tables in many to many relationships i.e completing the handshake