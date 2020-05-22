# Chapter notes
## Chapter 4: React State
**Summary**  


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
4.   



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