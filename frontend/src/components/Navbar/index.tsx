import './style.scss'
import Logo from '../../assets/img/logo.png'

const Navbar = () => {
  return <nav id='home-navbar'>
    <a className='logo'>
      <img src={Logo}  alt="logo ze-auto"/>
    </a>
    <a id='login-btn' className='btn'>Login</a>
    <a id='start-now-btn' className='btn'><b>Começe Agora</b></a>
  </nav>;
}
 
export default Navbar;