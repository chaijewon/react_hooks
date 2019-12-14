import React from 'react';
import logo from './logo.svg';
import './App.css';
/*
     index.js => webpack
     ======== (main)
     ReactDOM.render(<App/>,docuement.getElementById('root'))
       <App/> => return값 ==> <div>Hello</div> ==> innerHTML
     function App()
     {
        return (
           <div>Hello</div>  => jsx

        )
     }
     index.html
       <html>
         <body>
           <div id="root"><div>Hello</div></div>
         </body>
       </html>

     index.html
     <html>
       <head>
         <script src="http://~~/ajax/react.js"></script>
         <script type="text/babel">
          function App()
          {
          }
          ReactDOM.render(<App/>,docuement.getElementById('root'))
         </script>
         <script type="text/babel">
          class App extends React.Component{

          }
         </script>

       </head>
     </html>
 */
/*const App=()=>{
  return (
  <div>Hello!!</div>
  )
}
const App1=()=>(
    <div>Hello~~</div>
)*/
import TextInput from "./TextInput";
function App() {
  return (
    <TextInput/>
  );
}

export default App;
