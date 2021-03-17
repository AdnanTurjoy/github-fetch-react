import React,{useState,useEffect} from 'react';

const urlAdnan ='https://api.github.com/users/AdnanTurjoy';

const GithubAdnan = () => {
    const [user , setUsers] =useState([]);
    const getUsers = async()=>{
        const response = await fetch(urlAdnan);
        const user = await response.json();
        setUsers(user);
        console.log(user);

    }
    useEffect(()=>{
        getUsers();
    },[])
    const { login, avatar_url,html_url, followers_url} = user;
    return ( 
        <div className=""> 
         <h3>Github of {user.login}</h3> 
         
         <ul className="users">
             { 
                <>
                
                  <img  src={avatar_url} alt={login}/>
                  <div>
                          <h4>{login}</h4>
                          <a style={{ marginRight: "10px"}} href={followers_url}>Followers</a>
                          <a href={html_url}>Profile</a>
                  </div>
                  </>
             }
          </ul>
        </div>
     );
}
 
export default GithubAdnan;