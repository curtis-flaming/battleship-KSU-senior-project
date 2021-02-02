## This is the application I built for my senior project at Kansas State University.

This was my first attempt at a full stack stack React application. I chose to build a battleship clone because I wanted to try to build a React application with higher levels of interaction than I had done before in order to better understand the library. It also served as a starting point for my journey into the serverless realm. 

### The technologies I used:
Frontend: Just plain React. Originally, I had been using Redux for state management and Redux-Thunk to store my API calls, but I gave up as I was changing my implementation  often enough that refactoring everything related to Redux became more effort than it was worth.

Backend: I used AWS Amplify to provide my back end capabilities. I used the default Amplify API - a GraphQL endpoint attached to DynamoDB. I have a very simple, single table GraphQL schema to represent each game instance. I added a few custom subscriptions to handle specific game actions. I also used Cognito user pools to provide authentication to this app. 

### What I learned?
Specifications are kind of important going into a project. As I mentioned, I ended up refactoring a lot of code because I hadn't nailed down my specifications at the start. The project was intended to be a learning experience, though, so this wasn't completely unintended (or negative). 

Serverless is pretty simple to build simple things on. I gained experience building a full application experience, though at a fairly simplified scale. I really enjoyed learning GraphQL and interacting with DynamoDB in this process. 

Prop drilling is as tedious as they say. Since I ended up ditching Redux to get the true React experience, I learned how frustrating it can be having to pass every reference by hand through the component tree. This became even more tedious when I changed my structure a little. 

I prefer TypeScript to JavaScript. I hadn't done much TypeScript when I started this project, so I decided to go with plain JS. Having everything in plain JS forced me to have to ping-pong back and forth between files to see how all my data was exactly structured. 

Modularity is imortant (and difficult). I wanted to break my components up more than I did. Some of my components ended up pulling far too much weight. 

### Future Plans
I am working on rebuilding the app with TypeScript. I will also be using unauthenticated users in cognito so that no accounts will need to be set up in order to try out the app when it is live. 

Feel free to look through my presentation pdf to find out a little more about this project. Thank you!

