import Logo from '../../assets/img/logo.png';
import styles from './RegisterDriver.module.scss'
import { BsEyeSlash, BsEye } from "react-icons/bs";

const RegisterDriver = () => {
    return(
        <div className={styles.register_container}>

            <img src={Logo} alt="logo ze-auto" />

            <form action="" id={styles.form_register_driver}>


                    <span>Informações Pessoais</span>

                    <label htmlFor="name">Nome</label>
                    <input type="text" name='name' id='name' />

                    <span>Informações de Login</span>

                    <label htmlFor="e-mail">E-mail</label>
                    <input type="text" name='e-mail' id='e-mail' />
                <div id={styles.passwords}>

                    <label htmlFor="password">Senha
                        <div id={styles.input_box}>
                            <input type="text" name='password' id={styles.password}/>
                            {<BsEye id={styles.eye}/>} 
                        </div>
                    </label>

                    <label htmlFor="confirm-password">Confirme a senha
                        <div id={styles.input_box}>
                            <input type="text" name='confirm-password' id={styles.confirm_password}  /> 
                            {<BsEye id={styles.eye} />}
                        </div>
                    </label>
                    
                </div>
                    

            </form>
            
        </div>
        
    ) 
} 
    

export default RegisterDriver;