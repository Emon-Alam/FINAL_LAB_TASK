import {Link} from  'react-router-dom';

const Navbar = ()=>{
    return (
        <div>
            <h1>Digital Diary</h1>
            <Link to='/'>Home</Link> |  
            <Link to='/add'>Create event</Link> | 
            <Link to='/userlist'>User list</Link>
        </div>
    );  
}
export default Navbar;