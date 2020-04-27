import React,{useState} from 'react'
import M from 'materialize-css'


const Test4 = (props) => {

  const [user,setUser] = useState("");
  const [title,setTitle] = useState("");

  const PostData = () =>{
    let url = "";
    url = url+"?name="+user+"&title="+title
    console.log(url)

    fetch(`https://blog-api-assign.herokuapp.com/delete${url}`)
    .then(res => res.text())
    .then(data => M.toast({html:data}))

  }

  return(
    <div>modify and delete the blogpost= only if the blog is owned by the user
      <input type="text"
            placeholder ="user name"
            value ={user}
            onChange = {(e)=>setUser(e.target.value)}
            />
        <input type="text"
            placeholder = "post title"
            value ={title}
            onChange = {(e)=>setTitle(e.target.value)}
            />  
        <button className="btn waves-effect wave-light"
        onClick = {()=>PostData()}>
            Delete 
        </button>
   </div>
   )

 }

export default Test4