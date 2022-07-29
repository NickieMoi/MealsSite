import React, {useState } from "react";


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
                
                <form>
                    <h5>Title: </h5><input className="form-control"placeholder="Title"></input>
                    <h5>Comment: </h5><input className="form-control" name="comment"placeholder="Comment"></input>
                    <button type='button' className='btn btn-md btn-outline-success order'>Order</button>
                </form>
            </div>
        )
        }
    
export default CommentForm