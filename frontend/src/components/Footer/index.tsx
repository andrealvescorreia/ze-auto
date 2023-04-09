import styles from './Footer.module.scss'

const Footer = () => {
  return <footer id={styles.homeFooter}>
    <p>UEPB - Engenharia de Software II</p>
    <p id={styles.footerCopyright}>© 2023-Zé auto</p>
  </footer>;
}
 
export default Footer;