import './Login.css';
import logoImg from '../Images/logo.png';
import LoginForm from '../../forms/login-form';


const Login = () => {
    return (
        <>
            <div className="container">
                <div>
                    <p>Welcome to</p>
                    <h1><span id="m">M</span>usic</h1>
                    <h1><span id="f">F</span>rom</h1>
                    <h1><span>N</span>othing</h1>
                </div>

                <div className="logo"><img src={logoImg} alt="logo" /></div>
                  
                <div className="login-form-all">
                    <LoginForm/>
                </div>
            </div>           
        </>
    );
}

export default Login;