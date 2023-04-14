import Logo from '../../assets/img/logo.png';
import styles from './RegisterDriver.module.scss'
import InputPass from '../../components/input';
const RegisterDriver = () => {
    return(
        <div className={styles.register_container}>

            <img src={Logo} alt="logo ze-auto" />

            <form action="" id={styles.form_register_driver}>


                    <span>Informações Pessoais</span>

                    <label htmlFor="name">
                        Nome
                        <input type="text" name='name' id='name' />
                    </label>

                    <span>Informações de Login</span>

                    <label htmlFor="e-mail">
                        E-mail
                        <input type="text" name='e-mail' id='e-mail' />
                    </label>
                <div id={styles.passwords}>

                    <label htmlFor="password">Senha
                        <InputPass/>    

                    </label>

                    <label htmlFor="confirm-password">Confirme a senha
                        <InputPass/>    

                    </label>
                </div>
                <button id={styles.create_button} >Criar conta</button>

            </form>
            
        </div>
        
    ) 
} 
    

export default RegisterDriver;