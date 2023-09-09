

// using old version javascript 
function render(){
const element=`<div>
     <div> Hello world </div>
     <div> <input type='text'/> 
     ${new Date().toLocaleTimeString()}
     </div>

</div>`;

document.getElementById('app1').innerHTML=element;


// using react virtual dom
/*
by seeing this react virtual dom will work which component is updating that 
componet only will update
*/
const element2=React.createElement('div',null,
     React.createElement(
    'div',null,'Hello this is React.createElement')
    ,React.createElement('div',null,
    React.createElement('input',{type:'text'}),
    React.createElement('h2',{},new Date().toLocaleTimeString())

    )
    );

ReactDOM.render(element2,document.getElementById('app2'));
     }

setInterval(render,1000);