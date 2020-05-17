# Chapter notes
## Chapter 2: Hello World
**Summary**  
In this chapter, I learned the basics of how React applications can be built. I wrote some simple code in React JSX and then used Babel to transform JSX into pure JavaScript to support old browsers.
![image](readme_images/ch02.jpg)

**Chapter 2 notes and errors:**   
1.Server-Less Hello World
   - createElement(type, [props], [...children]): create the React element, return a React element which is a JavaScript object that represents what is shown on screen.
   - render the Hello World React element:
	`ReactDOM.render(element, document.getElementById('content'));`
2.JSX
   - JSX: can be used to construct an element or an element hierarchy and make it look very much like HTML.
   - Babel: browsers' Javascript engines don't understand JSX. Babel can transform JSX into regular JS.
3.Project Setup
   - nvm: Node Version Manager, makes installation and switching between multiple versions of Node.js easy.
   - Express: the best way to run an HTTP server in the Node.js environment.An Express application is web server that listens on a specific IP address and port.
   - Add entry point in package.json file
4.Older Browsers Support
   - All function implementations to supplement the missing implementation in older browsers are called polyfills. Babel provides these polyfills, which can just be included in the HTML file to make these functions available.
5.Automate
   - We can add scripts for start, transforms and other functions
   - command "nodemon" restarts Node.js with the command specified whenever there is a change in a set of files 