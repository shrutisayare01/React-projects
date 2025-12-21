import React, { createContext, useContext, useEffect, useState } from "react";

const PostsContext=createContext();

const PostContext=({children})=>{
    const [posts,setPosts]=useState([]);
    const [loading,setLoading]=useState(true);

    //Fetch API
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>res.json())
        .then((data)=>{
            setPosts(data.slice(0,20));
            setLoading(false);
        });
    },[])

    //Update post
    const updatePost=(id,updateData)=>{
        setPosts((prevPosts)=>prevPosts
        .map((post)=>(post.id===id?{...post,...updateData}:post)));
    };

    // Delete post

    const deletePost=(id)=>{
        setPosts((prevPosts)=>prevPosts.filter((post)=>post.id!==id));
    };
    
return(
    <PostsContext.Provider
    value={{posts,loading,updatePost,deletePost}}>
        {children}
    </PostsContext.Provider>
);
}

export const usePosts=()=>useContext(PostsContext);