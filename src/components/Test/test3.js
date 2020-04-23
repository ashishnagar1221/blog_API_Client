import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import M from 'materialize-css'

const Test3 = () => {

  const history = useHistory();
  const [user,setUser] = useState("");
  const [title,setTitle] = useState("");
  const [postText,setPostText] = useState("");

  const PostData = () =>{
    fetch("/newpost",{
      method:"post",
      headers:{
        "Content-Type":"application/json",
        'Accept': 'application/json'
      },
      body:JSON.stringify({
        postedBy:user,
        title:title,
        postText:postText
      })
    }).then(res => res.json())
    .then(data => {
      if(data.error){
        return data.error
      }else{
        M.toast({html:"Posted succesfully"})
        history.push('/')
      }
    })
  }

  return(
    <div> add a blog post = add new blog corresponding to the username in the DB
      <input type="text"
            placeholder ="user name"
            value ={user}
            onChange = {(e)=>setUser(e.target.value)}
            />
        <input type="text"
            placeholder = "title"
            value ={title}
            onChange = {(e)=>setTitle(e.target.value)}
            />  
        <input type="text"
            placeholder = "Body"
            value ={postText}
            onChange = {(e)=>setPostText(e.target.value)}
            />  
        <button className="btn waves-effect wave-light"
        onClick = {()=>PostData()}>
            POST
        </button>
   </div>
   )

 }

export default Test3