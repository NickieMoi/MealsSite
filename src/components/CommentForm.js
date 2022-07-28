import React, { Component, useEffect, useState } from "react";

function CommentForm(){
    const [setComment]=useState([])

    function handleNewComment(newComment){
    const serverOptions={
        method:"POST",
        header:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(newComment)
    }
    fetch('http://localhost:8080/comments/',serverOptions)
    .then(res=>res.json())
    .then(aComment=>setComment(comments=>[...comments,aComment]))
    .catch(err=>console.log(err))
}
    
        return(
            <div>
                <div>Comment form</div>
            </div>
        )
    }


export default CommentForm