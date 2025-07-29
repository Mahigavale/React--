

  fetch("https://dummyjson.com/comments").then((response)=>
{
    return response.json();
}).then((v)=>
{
    console.log(v.comments);
    
}).catch((e)=>
{
   
     
    
})