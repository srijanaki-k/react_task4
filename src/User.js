//dummy data api
//Task4
import './App.css'
function User({firstName,lastName,gender,email,username,domain,ip,university,image,id}){
    return(
        <>
        
            <tr>
                <td>{id}</td>
                <td><img src={image} alt="img"/></td>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{gender}</td>
                <td>{email}</td>
                <td>{username}</td>
                <td>{domain}</td>
                <td>{ip}</td>
                <td>{university}</td>
            </tr>

        
        </>
    )
}
export default User