import './style.scss'
import MainImg from './img/giving-car-keys.png'
import SecondaryImg from './img/car-health.png'
import RepairVector from './img/reapair-car-vector.png'
import RatingVector from './img/rating-vector.png'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import { Link } from "react-router-dom";

const StartNowBtn = () => {
  return <Link to="/register-choose-profile" className='start-now-btn'>Começe Agora {<MdOutlineKeyboardArrowRight/>}</Link>
}

const Home = () => {
  return <div className='home'>

    <div id='main-container'>
      <h1>Tenha o controle da saúde do seu automóvel de forma simples.</h1>
      <p>
        Com o sistema de histórico de manutenções do Zé Auto, 
        veja como fica fácil o reparo do seu veículo.
      </p>
      <StartNowBtn/>
      <img src={MainImg} alt='mecânico devolvendo chaves do carro ao cliente.'/>
    </div>


    <div id='secondary-container'>
      <h2>
        “Se hoje existem sistemas que armazenam o 
         histórico da nossa saúde, por que não de 
                nossos automóveis?”
      </h2>
      <div className='content'>
        <div className='paragraph'>
          <p>
            A nossa saúde está intrinsecamente ligada a dos veículos que usamos no dia a dia, 
            visto que  falhas mecânicas podem acarretar em acidentes de trânsito.
          </p>
          <p>
            Então, o Zé Auto tem como objetivo oferecer um sistema facilitador para manutenções de automóveis, 
            melhorando o trabalho de oficinas mecânicas e aumentando a segurança dos motoristas.
          </p>
        </div>
        <img src={SecondaryImg} alt='medico com estetoscópio frente um carro'/>
      </div>
    </div>


    <div className='container'>
      <img src={RepairVector}/>
      <div className='description'>
        <h2>
          Mais facilidade na manutenção.
        </h2>
        <p>
          O histórico do veículo proporciona ao mecânico - quando um cliente o pede algum serviço de manutenção - ver quais peças foram trocadas e quando, e quais reparos foram feitos.
        </p>
        <p>
          Com um melhor entendimento da situação do veículo, o mecânico pode mais rapidamente encontrar a raiz do problema e realizar um trabalho bem feito.
        </p>
      </div>
    </div>


    <div className='container'>
      <div className='description'>
        <h2>
          Encontre as melhores oficinas.
        </h2>
        <p>
          Descubra as oficinas mais bem avaliadas da sua região, e avalie as suas oficinas favoritas.
        </p>
      </div>
      <img src={RatingVector}/>
    </div>


    <div id='call-to-action-container'>
      <h2>Começe agora gratuitamente</h2>
      <StartNowBtn/>
    </div>


  </div>;
}
 
export default Home;