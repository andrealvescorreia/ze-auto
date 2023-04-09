import {FaIdCard} from 'react-icons/fa'
import {HiWrenchScrewdriver} from 'react-icons/hi2'
import styles from './ChooseProfile.module.scss'
import { Link } from 'react-router-dom';

const ChooseProfile = () => {
  return <div id={styles.choose_profile}>
    <h1>Qual o seu perfil?</h1>
    <div className={styles.profiles}>
      <div className={styles.profile_container}  id={styles.driver_profile} >
        
        <Link to='/register-driver' className={styles.profile_card} >
          <div className={styles.description} >
            <h2>Motorista</h2>
            <p>Quero usar o Zé Auto para me auxiliar no controle das próximas manutenções de meu veículo.</p>
          </div>
          <FaIdCard />
        </Link>
      </div>

      <div className={styles.profile_container}  id={styles.mechanic_profile} >
        <Link to='/register/mechanic' className={styles.profile_card}>
          <HiWrenchScrewdriver />
          <div className={styles.description} >
            <h2>Oficina</h2>
            <p>Quero usar o Zé Auto para auxiliar meu trabalho de manutenção de veículos dos meus clientes, e expandir o meu negócio.</p>
          </div>
        </Link>
      </div>
    </div>

  </div>;
}
 
export default ChooseProfile;