import React, { useState } from "react";
import { usePosts } from "./PostContext";

const PostItem=()=>{
    const {deletePost,updatePost}=usePosts();
    const [isEdit,setIsEdit]=useState(false);
    const [editTitle,setEditTitle]=useState();

    const handleUpdate=()=>{
        updatePost((postMessage.id,{title:editTitle}));
        setIsEdit(false);
    }

    const cardStyle={
        backgroundColor:'#fff'
    }

    return(
        <div style={cardStyle}>
            {isEdit?(
                <>
            <input
            value={editTitle}
            onChange={(e)=>setEditTitle(e.target.value)}
            />
            <button onClick={handleUpdate}>Save</button>
            </>):(
                <>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <button onClick={()=>setIsEdit(true)}>Edit</button>
                <button onClick={()=>deletePost(post.id)}>Delete</button>
                </>
            )}
        </div>
        
    )
};

export default PostItem;