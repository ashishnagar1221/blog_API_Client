import React,{useState} from 'react';
import {Link,useHistory} from 'react-router-dom'

/**
* @author
* @function Test2
**/

const Test2 = () => {

  const history = useHistory();
  const [user,setUser] = useState("");
  const [password,setPassword] = useState("");

  const PostData = () =>{

    console.log(user+ " "+ password)
    
    
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