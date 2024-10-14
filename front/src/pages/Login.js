import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(props){

    const navigate=useNavigate();

    const [nme,setnme]=useState("");
    const [pass,setpass]=useState("");

    function nhandler(e){
        setnme(e.target.value);

    }

    function phandler(e){
        setpass(e.target.value);

    }

    function clhandler(){

        

        const getUsr = async () => {
            try {
              const getU = await fetch(
                `http://localhost:4000/api/v1/getuser?name=${nme}&password=${pass}`,
                {
                  method: "GET",
                  headers: {
                    "Content-Type": "application/json",
                  },

                }
      
      
              );


              const usr=await getU.json();
              console.log("Response ",usr);
              console.log(usr.data);
              if(usr.data===0)
                {
                  alert("Login Failed !");
                  setpass("");
                  setnme("");
                }
      
                else{
                  console.log("redirecting");
                  alert("Login Success");
                  setpass("");
                  props.snavdata(true);
                  props.sethdnme(nme);
                  setnme("");
                  navigate("/posts");
      
      
                }
              
        
            } catch (error) {
              console.log(error);
            }
          };

          getUsr();

    }

    function shandler(){

        navigate("/signup");

    }
   


    return(
        <div>
            <h3>Login to Project Collab</h3>
        <div>
            <input type="text" value={nme} onChange={nhandler}/>
            <br/>
            <input type="password" value={pass} onChange={phandler} />
        </div>
        <button onClick={clhandler}>Login</button>
         <br/>
        <button onClick={shandler}>Sign Up</button>

        </div>
    )

}

export default Login;