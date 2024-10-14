import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";


function Header(props){
   return(
     <div>
       <h1 className="header">Project Collab</h1>

    {props.navdata &&  <nav>
        <ul>
            <li>
               <p>Welcome {props.headnme} !</p>
            </li>
            <li>
                <Link to="/posts">Posts</Link>

            </li>
            <li>
                <Link to="/postform">New Post</Link>

            </li>
        
        </ul>


       </nav>

    }

     </div>
    
   )
}

export default Header;