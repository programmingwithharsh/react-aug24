import styles from './title.module.css';
function Header() {
    return <div>
        <div className="message">This is Header Component - welcome css</div>
        <div className="header">This is Header Component - module css</div>
        <div className={styles.header}>This is Header Component - module css</div>
    </div>
}

export default Header;