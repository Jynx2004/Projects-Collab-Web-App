import React from "react";
import { useState } from "react";
import "./Pform.css";

function PForm(props){

   const postsender=props.hnme;

    const [name,setname]=useState("");
    const[desc,setdesc]=useState("");
    const [gith,setgith]=useState("");
    const [lived,setlived]=useState("");

    function nhandler(e){
        setname(e.target.value);

    }

    function phandler(e){
        setgith(e.target.value);

    }

    function lhandler(e){
        setlived(e.target.value);

    }

    function dhandler(e){
      setdesc(e.target.value);
    }

    function chandler(){

        const getAllData = async () => {
            try {
              const getPeople = await fetch(
                `${"http://localhost:4000/api/v1/createpost"}`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
      
                  body: JSON.stringify({
                    // Your data here
                    name:name,
                    postSender:postsender,
                    description:desc,
                    githubL:gith,
                    livedemoL:lived,
                  })
                }
      
      
              );
      
              console.log("Response ",getPeople);
              alert("Project Shared");
        
            } catch (error) {
              console.log(error);
            }
          };
      
          getAllData()

    }

    

    return(
        <div>
            <div className="inputsection">
            <input type="text" value={name} onChange={nhandler}/>
            <input type="text" value={gith} onChange={phandler}/>
            <input type="text" value={lived} onChange={lhandler}/>
            <textarea type="text" value={desc} onChange={dhandler}/>
            </div>

            <button onClick={chandler}>Click to Post</button>
        </div>
    )


}
export default PForm;