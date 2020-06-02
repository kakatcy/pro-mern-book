# Chapter notes
## Chapter 5: Express and GraphQL
**Summary** 


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
1. The function should be `function issueValidate(issue)` instead of `function validateIssue(_, { issue })`    

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