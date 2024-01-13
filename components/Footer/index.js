import styles from './Footer.module.css'

export default function Footer() {
    return(
        <footer className={styles.footer}>
            <a className={styles.a}>
                <span>About</span>
            </a>
            <a className={styles.a}>
                <span className={styles.footer_ul}>Download the X app</span>
            </a>
            <a className={styles.a}>
                <span className={styles.footer_ul}>Help Center</span>
            </a>
            <a className={styles.a}>
                <span className={styles.footer_ul}>Terms of Service</span>
            </a>
            <a className={styles.a}>
                <span className={styles.footer_ul}>Privacy Policy</span>
            </a>
            <a className={styles.a}>
                <span className={styles.footer_ul}>Cookie Policy</span>
            </a>
            <a className={styles.a}>
                <span className={styles.footer_ul}>Accessibility</span>
            </a>
            <a className={styles.a}>
                <span className={styles.footer_ul}>Ads info</span>
            </a>
            <a className={styles.a}>
                <span className={styles.footer_ul}>Blog</span>
            </a>
            <a className={styles.a}>
                <span className={styles.footer_ul}>Status</span>
            </a>
            <a className={styles.a}>
                <span className={styles.footer_ul}>Careers</span>
            </a>
            <a className={styles.a}>
                <span className={styles.footer_ul}>Brand Resources</span>
            </a>
            <a className={styles.a}>
                <span className={styles.footer_ul}>Advertising</span>
            </a>
            <a className={styles.a}>
                <span className={styles.footer_ul}>Marketing</span>
            </a>
            <a className={styles.a}>
                <span className={styles.footer_ul}>X for Business</span>
            </a>
            <a className={styles.a}>
                <span className={styles.footer_ul}>Developers</span>
            </a>
            <a className={styles.a}>
                <span className={styles.footer_ul}>Directory</span>
            </a>
            <a className={styles.a}>
                <span className={styles.footer_ul}>Setting</span>
            </a>
            <a className={styles.a}>
                <span className={styles.footer_ul}>© 2024 X Corp.</span>
            </a>
        </footer>
    )
}