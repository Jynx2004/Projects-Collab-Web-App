import React from "react";

function Pt(props){

    const post=props.pname;

    console.log(post);

    return(
      
        <div>
            <div className="posts">
                <p>{post.name}</p>
                <a target="blank" href={post.githubL}>{post.githubL}</a>
            </div>

        </div>
    )
}

export default Pt;