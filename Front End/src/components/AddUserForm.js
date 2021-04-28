import {useEffect, useState} from 'react';
import {users} from '../usersData';
import {useParams} from 'react-router-dom';
import './AddUserForm.css';

const AddUserForm = ({status, callback})=> {

    const {id:eid}  = useParams();
    const [newUser, setNewUser] = useState({
        id: '',
        name: '',
        event: '',
        date: '',
        important: '',
    });
useEffect(()=>{
    
    if(status == "edit"){
        const  newUser = users.find((user)=> user.id === eid);
            setNewUser({...newUser});
        }  

},[]);
      

    console.log(newUser);

    const changeUser = (e)=>{
        const attar = e.target.name;
        const value = e.target.value;
        const user = {...newUser, [attar] : value}; 
        setNewUser(user);
    }

    const formSubmit=(e)=>{
        e.preventDefault();

        if(status == 'add'){
            callback(newUser);
            setNewUser({
                id: '',
                name: '',
                event: '',
                date: '',
                important: '',
            })

        }
        if(status == 'edit'){
            callback(newUser);
            setNewUser({
                id: '',
                name: '',
                event: '',
                date: '',
                important: '',
            })

        }
    }

    return (
        <div className="form">
            <form onSubmit={formSubmit}>
                <table>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td>ID</td>
                            <td>
                                <input type="number" name="id" value={newUser.id} onChange={changeUser}/> 
                            </td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>
                                <input type="text" name="name" value={newUser.name} onChange={changeUser}/> 
                            </td>
                        </tr>
                        <tr>
                            <td>Event</td>
                            <td>
                                <textarea type="text" name="event" rows = "10" cols = "30" value={newUser.event} onChange={changeUser} /> 
                            </td>
                        </tr>
                        <tr>
                            <td>Date</td>
                            <td>
                                <input type="text" name="date" value={newUser.date} onChange={changeUser}/> 
                            </td>
                        </tr>
                        <tr>
                            <td>Importent</td>
                            <td>
                                <input type="text" name="important" value={newUser.important} onChange={changeUser}/> 
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <button type="submit">Save</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}

export default AddUserForm;