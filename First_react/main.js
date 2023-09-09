/*
    Code :

    const element=<h2>Hello Asif</h2>
    ReactDOM.render(element,document.getElementById("app"));

    Output:
    Error: 
    Uncaught SyntaxError: Unexpected token '<' (

*/

/*below code for creating one html element into javascript
    Code :

    const element1=React.createElement('div',{className:'asif'},'Hello World',React.createElement('h2',{className:'h2class'},'Shaik Asif'));
    ReactDOM.render(element,document.getElementById("app"));
    
    Output:
    No Error output will come clear

    Conclusion :
    this is to lenghty to create single html element so to overcome this 
    JSX introduced
   

*/

/* below is jsx code */
const element2=(
    <div>
        Hello World
        <h2>Shaik Asif</h2>
    </div>
);
ReactDOM.render(element2,document.getElementById("app"));
/*
    output:
    Uncaught SyntaxError: Unexpected token '<' (
    here babel compiler come to solve the error, 
    it will conver all html which is written in jsx code into the 
    React.createElement

        copy  below code from below link and put in index.html 
    
         https://babeljs.io/setup#installation
        <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
         <script type="text/babel" src="main.js"></script>

*/