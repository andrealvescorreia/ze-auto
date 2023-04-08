import styles from './Navbar.module.scss';
import Logo from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return <nav id={styles.navbar}>
    <Link to='/' className={styles.logo}>
      <img src={Logo}  alt="logo ze-auto"/>
    </Link>
    <Link to='/login' id={styles.login_btn} className={styles.btn}>Login</Link>{/* login ainda nao foi implementado... */}
    <Link to='/register-choose-profile' id={styles.start_now_btn} className={styles.btn}><b>Começe Agora</b></Link>
  </nav>;
}
 
export default Navbar;