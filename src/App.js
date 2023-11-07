//dummy data api
//Task4
import React,{useState,useEffect} from "react";
import axios from "axios";
import User from './User.js'

function App(){
    let [product, updateproduct]=useState([]);
useEffect(()=>{
    data()
},[])
async function data(){
   let p = await axios.get('https://dummyjson.com/users?limit=4') ;
   let res = p.data.users
   console.log(res)
   updateproduct(res)
   
   
}

if(product.length===0){
    return(<h1>fetching..</h1>)
}


return(
    <>
    <div className="zero">
    <h1>Dummy data</h1>
    <div className="product">
        <table>
            <tr>
                <th>Sno</th>
                <th>Profile Pic</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>E-mail</th>
                <th>Username</th>
                <th>Domain</th>
                <th>IP</th>
                <th>University</th>
            </tr>
            
                {
                product.map((el)=>
                    <User {...el} key={el.id}></User>   
                
             )
                }
                </table>
                </div>
                </div>

    </>
)
}
export default App