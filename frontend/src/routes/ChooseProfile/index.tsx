import {FaIdCard} from 'react-icons/fa'
import {HiWrenchScrewdriver} from 'react-icons/hi2'
import './styles.scss'

const ChooseProfile = () => {
  return <div id="choose-profile">
    <h1>Qual o seu perfil?</h1>
    <div className='profiles'>
      <div className="profile-container"  id='driver-profile'>
        
        <a className='profile-card'>
          <div className='description'>
            <h2>Motorista</h2>
            <p>Quero usar o Zé Auto para me auxiliar no controle das próximas manutenções de meu veículo.</p>
          </div>
          <FaIdCard />
        </a>
      </div>

      <div className="profile-container" id='mechanic-profile'>
        <a className='profile-card'>
          <HiWrenchScrewdriver />
          <div className='description'>
            <h2>Oficina</h2>
            <p>Quero usar o Zé Auto para auxiliar meu trabalho de manutenção de  veículos dos meus clientes, e expandir o meu negócio.</p>
          </div>
        </a>
      </div>
    </div>

  </div>;
}
 
export default ChooseProfile;