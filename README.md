# Chapter notes
## Chapter 7: Architecture and ESLint
**Summary**    



**Chapter 6 notes:**   
1. UI Server      
     - The UI server contains only the static middleware, it will be responsible for generating HTML pages by calling the API server's APIs to fetch the necessary data.     
     - The API server will be responsible for handling only the API requests, it will respond only to URLs matching /graphql in the path.     

2. Multiple Environments    
     - In this part, all hard-coded things were changed and keep them as variables that can be changed easily, like urls, ports.       
     - The package `dotenv` is used to convert variables stored in a file into environment variables. And it looks for a file called .env.      

3. Proxy-Based Architecture         
     - The Same-origin policy is to prevent malicious websites from gaining unauthorized access to the application. The gist of it is that since cookies set by one origin are automatically attached with any request to that origin, it is possible that a malicious website can make a call to the origin from the browser and the browser will attach the cookie.       

4. ESLint     
     - A linter checks for suspicious code that could be bugs and also check whether your code adheres to conventions and standards that you want to follow across your team to make the code readable.      
     - ESLint is a very flexible linter that lets you define the rules that you want to follow.        

5. ESLint for the Front-End     
     - Two ways to ignore patterns of files: (1) `npx eslint . --ignore-pattern public` (2) add them to a text file called .eslintignore.     

6. React PropTypes     
     - 





## Chapter 6: MongoDB
**Summary**    
In this chapter, firstly, I learned basic conceptions about MongoDB like the difference between MongoDB and traditional relational databases, installed it locally and tried to use the mongo shell and Node.js driver to do some basic operations including read, find update and delete in MongoDB. Secondly, I modified the Issue Tracker application to do read and write operation in the MongoDB which make the program persistently store the issue information.      


Here is the screenshot of my program:   
![image](readme_images/ch06.jpg)   


**Chapter 6 notes:**  
1. MongoDB Basics    
     - Documents    
       - Document databases can contain arrays and other objects in a nested manner and the contained objects don't have to be separated out into other documents.    
     - Collections   
       - A primary key is mandated in MongoDB, it has the reserved field name _id which is  a special type called ObjectId.    
     - Query Language    
       - MongoDB query language is made up of methods to achieve various operations, the main methods for read and write operations are the CRUD methods, other methods include aggregation, text search and geospatial queries.   
     - The Mongo Shell    
       - print() can print only strings, and printjson() can print objects as JSON.    

2. MongoDB CRUD Operations   
     - Create   
       - `db.employees.insertOne()`    
       - `db.employees.insertMany()`        
     - Read     
       - find method has two argument, filter and projection.    
       - `db.employees.findOne({ id:1})`    
       - `db.employees.find({ age:{$gte(lte) :30}})`    
       - with index, any query that uses a filter that has the field age in it will be significantly faster because MongoDB will use this index instead of scanning through all documents in the collection.    
       - `db.employees.createIndex({ id: 1 }, { unique: true })` create a unique index on id.     
     - Projection    
       - the project is the second argument of find method, it specifies which fields to include or exclude in the result to decrease the network bandwidth.     
       - the format is an object with one or more field names as the key and the value as 0 or 1, to indicate exclusion or inclusion.     
     - Update     
       - it has two arguments, one is a query filter, the second is an update specification if only some fields of the object need to be changed.    
       - `db.employees.updateOne()`     
       - `db.employees.updateMany()`     
       - `db.employees.replaceOne()`, all pervious info will be replaced by new info     
     - Delete    
       - `db.employees.deleteOne()`    
       - `db.employees.deleteMany()`    
     - Aggregate    
       - To group the aggregate by a field. We'll need to specify the name of the field(prefixed by a $) as the value of _id.        

3. Schema Initialization      
     - MongoDB doesn't enforce a schema, there is no schema initialization as in relational databases, the only thing that is really useful is the creation of indexes.    

4. Reading from MongoDB      
     - Since the issues from the database contain an _id in addition to the id field, don't forget include that in the GraphQL schema of the type Issue. Otherwise, clients who call the API will not able to access this field.      

5. Writing to MongoDB     
     - update a counter and return the updated value by using `findOneAndUpdate()`, and we use the $inc operator to increment the current value.     


## Chapter 5: Express and GraphQL
**Summary** 
In this chapter, firstly, I learned the Express framework like routing, handler function and so on. Then I learned REST API which is very popular pattern but it is hard to use when different clients access the same set of APIs. So we used the GraphQL(an query language used to describe requests from a web client to a web server). I also used the tool Playground that developers can explore the API and learned how to change the date to a simpler format. Lastly I implemented input validation and display errors.       


Here is the screenshot of my program:   
![image](readme_images/ch05.jpg)   

**Chapter 5 notes:**  
1. Express      
     - Routing   
       - A route specification consists of an HTTP method(GET, POST, etc.), a path specification that matches the request URI, and the route handler. Example:   
       <p align="center">app.get('/hello',(req, res)=>{   
                         res.send('Hello World!');    
                    });    
       </p>      
     - Handler Function      
       - once a route is matched, the handler function is called
     - Middleware    
       - Middleware functions are those that have access to the request object(req), the response object, and the next middleware function in the application's request-response cycle.    
2. GraphQL    
     - Field Specification    
       - the properties of an object that need to be returned must be specified. It's invalid to request nothing   
     - Graph Based    
     - Strongly Typed     
3. The About API   
     - npm packages for graphql-tools, apollo-server, and the base package graphql `npm install graphql@0 apollo-server-express@2`    
     - has two special types that are entry points into the type system, called Query and Mutation. The subtle difference is query fields are executed in parallel, mutation fields are executed in series.    
     - default values are optional, values defined by ! after the type are mandatory    
     - initialize the GraphQL, construct an ApolloServer object defined in the apollo-server-express package.    
4. List API Integration   
     - add whatwg-fetch Polyfill   
     - construct a GraphQL query in loadData() method   
     - use `response.json()` to get the JSON data converted to a Javascript  
     - `setState()` to supply the list of issues to the state variable   
5. Custom Scalar Types   
     - define a type for the scalar using the `scalar` keyword instead of `type`    
     - add a top-level resolver for all scalar types    
6. The Create API   
     - have to use the `input` keyword instead of `type`, and define a new type(IssueInputs) as an object that has the fields we need for the input        
     - use the type IssueInputs as the argument type to the new issueAdd field under Mutation     
     - implement the parsers for receiving data values, there are two methods that need to be implemented in the GraphQLDate resolver: `parseValue` and `parseLiteral`    
7. Query Variables    
     - name the operations to use variables   
     - the input value has to be replaced with a variable name, variable names start with the $ character    
8. Input Validations   
     - detect input errors by checking if the constructed date object is a valid value, `isNaN(date)`   
    
**Chapter 5 errors:** 
1. The function should be `function issueValidate(issue)` instead of `function validateIssue(_, { issue })` in page 123 and 125    

## Chapter 4: React State
**Summary**  
In this chapter, I implemented a `Add` function by using State, which adds new issues according to user's inputs. Firstly, I set a timer to do state initialization. Then create a method to add a new issue to update state. In React, only parents can pass information down to children, so I had to lift the state up in my program. Finally I created the text inputs and add button to trigger the add event and also changed stateless components to simple functions.     

Here is the screenshot of my program:   
![image](readme_images/ch04.jpg)   

**Chapter 4 notes and errors:**  
1. Initial State   
     - `this.state` is a key-value pair in component's class, the key is a state variable name and the value is the current value of that variable.   
     - add constructor and set initialIssues as the initial state, and also you can have other state variables like `page:0`    
2. Async State Initialization
     - state can be modified only by calling `this.setState({issues: newIssues});`    
     - React provides many lifecycle methods to cater to situations where something needs to be done depending on the stage, or changes in the status of the component.    
          - componentDidMount(): is called as soon as the component's representation has been converted and inserted into the DOM.   
          - componentDidUpdate(): is invoked right after an update occurs, not for initial render.    
          - componentWillUnmount(): is useful for cleanup such as cancelling timers and pending network requests.    
          - shouldComponentUpdate(): optimize and prevent a rerender in case there is a change in the props or state that really doesn't affect the output or the view(rarely used).    
3. Updating State     
     - you can't push issue into issues directly, because the variable this.state in the component should always be treated as immutable, you have to make a copy of an array: `issues = this.state.issues.slice();`    
4. Lifting State Up    
     - In React, only parents can pass information down to children, so if we have to pass info among siblings, we have to lift the state and all the methods up to common parent    
     - bind the method createIssue in the constructor of IssueList to avoid the confusing meaning of "this" `this.createIssue = this.createIssue.bind(this);`    
5. Event Handling   
     - In order to prevent the form from being submitted when the Add button is clicked, we need to call the `preventDefault()` function on the event. The new issue can't add into the form if I delete this clause.    
     - In order to persist the changes, we could either save the issues in local storage on the browser or save it in the server.   
6. Stateless Components    
     - For performance reasons and clarity of code, change stateless components to pure functions    
7. Designing Components   
     - State vs. Props    
           - both hold model information, but props are immutable, state is not    
           - State belongs to the component, props belongs to an ancestor, the component gets a read-only copy     
     - Communication    
           - Parents communicate to children via props, when state changes, the props automatically change,Children communicate to parents via callbacks     
           - Siblings and cousins can't communicate with each other, the info has to go up the hierarchy and then back down    


## Chapter 3: React Components
**Summary**  
In this chapter, I implemented a main page of the Issue Tracker, which shows basic information of issues like ID, Status, Owner and so on. Firstly, I learned to use React classes which can be reused within other components and handle events. Then by using composing components, the UI split into smaller independent pieces so that each piece can be coded and reasoned in isolation. Lastly I passed data among these components by using properties and children and showed these data on the Issue Tracker page.     

The Heroku link:   
https://pro-mern-stack-2.herokuapp.com/     

Here is the screenshot of my program:   
![image](readme_images/ch03.jpg)   
  
**Chapter 3 notes and errors:**  
1. React Classes   
     - React classes are created by extending React.Component which all custom classes must be derived.   
     - `npm run watch` and `npm start` to run the program
2. Composing Components   
     - By using component composition, the UI can be split into smaller independent pieces so that each piece can be coded and reasoned in isolation.   
3. Passing Data Using Properties   
     - The easiest way to pass data to child components is using an attribute when instantiating a component. For example `<IssueRow issue_title="Title of the first issue" />`, then within the render() method of the child, we can display it by using `<td>{this.props.issue_title}</td>`    
4. Passing Data Using Children   
     - In the child component, use a special field of `this.props.children`   


## Chapter 2: Hello World
**Summary**  
In this chapter, I learned the basics of how React applications can be built. I wrote some simple code in React JSX and then used Babel to transform JSX into pure JavaScript to support old browsers.   
 
The Heroku link:   
https://pro-mern-stack-2.herokuapp.com/

Here is the screenshot of my program:   
![image](readme_images/ch02.jpg)

**Chapter 2 notes and errors:**   
1. Server-Less Hello World   
     - createElement(type, [props], [...children]): create the React element, return a React element which is a JavaScript object that represents what is shown on screen.   
     - render the Hello World React element:
	`ReactDOM.render(element, document.getElementById('content'));`   
2. JSX   
     - JSX: can be used to construct an element or an element hierarchy and make it look very much like HTML.   
     - Babel: browsers' Javascript engines don't understand JSX. Babel can transform JSX into regular JS.       
3. Project Setup   
     - nvm: Node Version Manager, makes installation and switching between multiple versions of Node.js easy.   
     - Express: the best way to run an HTTP server in the Node.js environment.An Express application is web server that listens on a specific IP address and port.   
     - Add entry point in package.json file      
4. Older Browsers Support   
     - All function implementations to supplement the missing implementation in older browsers are called polyfills. Babel provides these polyfills, which can just be included in the HTML file to make these functions available.     
5. Automate   
     - We can add scripts for start, transforms and other functions   
     - command "nodemon" restarts Node.js with the command specified whenever there is a change in a set of files   