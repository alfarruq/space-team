

import { Link } from 'react-router-dom';
import './style.css'



function Login() {
    return ( 
        <div className="wrapper-login" >
                <h3 className='login-logo' >Space Team Login</h3>
                <form action="">
                    <input placeholder='login..' type="text" />
                    <input placeholder='password' type="password" />
                    <button>Login</button>
                </form>
                <div className='registor' >
                   <Link to='/auth/signup' >Sign up</Link>
                </div>
        </div>
     );
}

export default Login;