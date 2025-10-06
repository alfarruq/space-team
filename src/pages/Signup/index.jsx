

import { Link } from 'react-router-dom';
import './style.css'



function Signup() {
    return ( 
        <div className="wrapper-login" >
                <h3 className='login-logo' >Space Team Signup</h3>
                <form action="">
                    <input placeholder='login..' type="text" />
                    <input placeholder='password' type="password" />
                    <button>Login</button>
                </form>
                <div className='registor' >
                   <Link to='/login' >Login</Link>
                </div>
        </div>
     );
}

export default Signup;