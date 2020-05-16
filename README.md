# Chapter notes
## Chapter 2: Hello World
**Chapter 2 notes and errors:**
- createElement(type, [props], [...children]): create the React element, return a React element which is a JavaScript object that represents what is shown on screen.
- render the Hello World React element:
	`ReactDOM.render(element, document.getElementById('content'));`
- JSX: can be used to construct an element or an element hierarchy and make it look very much like HTML.
- Babel: browsers' Javascript engines don't understand JSX. Babel can transform JSX into regular JS.
- nvm: Node Version Manager, makes installation and switching between multiple versions of Node.js easy.
- Express: the best way to run an HTTP server in the Node.js environment.An Express application is web server that listens on a specific IP address and port.
- Add entry point in package.json file
- All function implementations to supplement the missing implementation in older browsers are called polyfills. Babel provides these polyfills, which can just be included in the HTML file to make these funcitons available.
