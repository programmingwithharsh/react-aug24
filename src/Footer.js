import styles from './title.module.css';
const Footer = () => {
    return <div>
        <div className="message">This is Footer Component - welcome css class</div>
        <div className="footer">This is Footer Component - module css</div>
        <div className={styles.footer}>This is Footer Component - module css</div>
    </div>
}

export default Footer;