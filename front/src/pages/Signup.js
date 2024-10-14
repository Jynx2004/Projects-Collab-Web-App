import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup(){

    const navigate=useNavigate();

    const [nm,setnm]=useState("");
    const [pas,setpas]=useState("");

    function nmhandler(e){
        setnm(e.target.value)
    }

    function pahandler(e){
        setpas(e.target.value)
    }

    function fhandler(){

        const storeUser = async () => {
            try {
              const Stpeople = await fetch(
                `${"http://localhost:4000/api/v1/createuser"}`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
      
                  body: JSON.stringify({
                    // Your data here
                    name:nm,
                    password:pas,
                  })
                }
      
      
              );
      
              console.log("Response ",Stpeople);
              console.log(Stpeople.status);
              if(Stpeople.status===200)
              {
                navigate("/");
              }
        
            } catch (error) {
              console.log(error);
            }
          };
      
          storeUser();
    }
    return(
        <div>
            <div>
                <div>
                 <p>Enter the login ID :</p>

                <input type="text" onChange={nmhandler} value={nm}/>
                </div>
                 <div>
                 <p>Enter the password :</p>
                <input type="password" onChange={pahandler} value={pas}/>
                </div>
                
            </div>

            <button onClick={fhandler}>Register</button>
        </div>
    )

}

export default Signup
