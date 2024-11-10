   import React from 'react';
   import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
   import Tooltip from './Tooltip'; // Adjust the import path as necessary

   function Home() {
     return <h2>Home Page</h2>;
   }

   function About() {
     return <h2>About Page</h2>;
   }

   function App() {
     return (
       <Router>
         <div>
           <nav>
             <ul>
               <li>
                 <Tooltip text="Go to Home Page">
                   <Link to="/home">Home</Link>
                 </Tooltip>
               </li>
               <li>
                 <Tooltip text="Learn more about us">
                   <Link to="/about">About</Link>
                 </Tooltip>
               </li>
             </ul>
           </nav>

           <Route path="/home" component={Home} />
           <Route path="/about" component={About} />
         </div>
       </Router>
     );
   }

   export default App;
   