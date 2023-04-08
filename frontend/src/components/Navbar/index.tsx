import './style.scss'
import Logo from '../../assets/img/logo.png'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return <nav id='home-navbar'>
    <a className='logo'>
      <img src={Logo}  alt="logo ze-auto"/>
    </a>
    <a id='login-btn' className='btn'>Login</a>
    <Link to='/register-choose-profile' id='start-now-btn' className='btn'><b>Começe Agora</b></Link>
  </nav>;
}
 
export default Navbar;