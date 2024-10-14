import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Pt from "../components/Pt";
import { useNavigate } from "react-router-dom";


function Posts(props){

    const navigate=useNavigate();

    const [posts,setposts]= useState([]);
    console.log(posts);

    function chandler(){
      props.snavdata(false);
      navigate("/");
    }

    useEffect(()=>{

        const getPosts = async () => {
            try {
              const getPeople = await fetch(
                `${"http://localhost:4000/api/v1/getposts"}`,
                {
                  method: "GET",
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
      
      
              );


              const D=await getPeople.json();
              setposts(D.data);
              console.log("Response ",D.data);
              
        
            } catch (error) {
              console.log(error);
            }
          };

          getPosts();

    },[])


    return(
       <div>
        <button onClick={chandler}>Logout</button>
        <br/>
        <br/>

        <div>
            {posts.map((pt)=>{
                return(
                    <Pt pname={pt}/>
                )
            })}
        </div>

       

      </div>
    )

}

export default Posts;