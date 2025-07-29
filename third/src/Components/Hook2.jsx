import { useEffect, useState } from "react";


function Fetchdata() {


    let[comments,setcomments]=useState([]);
    let url="https://dummyjson.com/comments";
    useEffect(() => {

        fetch(url).then((response) => {
            return response.json();
        }).then((v) => {
            console.log(v.comments);
            setcomments(v.comments);

        }).catch((e) => {
            console.log(e);
            
        })
    },[comments.length]) //dependacy array

    return(<>
    <h1> The Fetching of the data...</h1>
    {
        comments.map((comm)=>
        {
            return(
                <>
                <ol>
                    <li>Likes:{comm.likes}</li>
                    <li>ID:{comm.id}</li>
                    <li>postID:{comm.postId}</li>
                    <li>CommentBody:{comm.body}</li>
                </ol>
                </>
            )
        })
    }

    </>)



}

export {Fetchdata};









/**
 * 
 * 
 * body
: 
"This is some awesome thinking!"
id
: 
1
likes
: 
3
postId
: 
242
 * 
 * 
 * 
 */