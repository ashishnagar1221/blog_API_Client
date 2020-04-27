import React,{useState} from 'react';
import M from 'materialize-css'

const Test2 = () => {

  const [user,setUser] = useState("");
  const [password,setPassword] = useState("");

  const PostData = () =>{
    let url = "";
    url = url+"?name="+user+"&password="+password
    console.log(url)

    fetch(`https://blog-api-assign.herokuapp.com/post/valid${url}`)
    .then(res => res.text())
    .then(data => M.toast({html:data}))

  }


  return(
    <div>to check the valid user = pass user_name and password as a query parameter and check if the user exists
      <input type="text"
            placeholder ="user name"
            value ={user}
            onChange = {(e)=>setUser(e.target.value)}
            />
        <input type="password"
            placeholder = "password"
            value ={password}
            onChange = {(e)=>setPassword(e.target.value)}
            />  
        <button className="btn waves-effect wave-light"
        onClick = {()=>PostData()}>
            Check 
        </button>
   </div>
   )

 }

export default Test2