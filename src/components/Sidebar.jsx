import styles from './Sidebar.module.css';
import Logo from './Logo';
import AppNav from './AppNav';

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <p>List of Cities</p>
      <footer className={styles.footer}>
        <p className={styles.copyright}>&copy; Copyright {new Date().getFullYear()} by Worldwise Inc.</p>
      </footer>
    </div>
  );
}