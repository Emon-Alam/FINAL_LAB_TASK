
import {Link} from 'react-router-dom';

export default function User({name, id, event, date, important, deleteUser}){
	return (
		<div className='usermain'>
			<h3>Name: {name}</h3>
			<p>
				ID: {id} <br/>
				Event: {event} <br/>
				Date: {date} <br/>
				Important: {important} <br/>
			</p>			
			<button onClick={()=>deleteUser(id)}>Delete</button>
			<Link to={`/edit/${id}`}>Edit</Link>
		</div>
	)
};