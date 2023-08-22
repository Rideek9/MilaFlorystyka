import styles from "./header.module.sass"
import template from "../../../styles/templates.module.sass"
import LogoMila from "../../../public/assets/SVG/mila-florystyka.svg"


import Link from "next/link";


export default function Header() {

    return (
        <div className={styles.header}>
            <div className={styles.header__navigation}>
                <ul className={styles.header__menu}>
                    <Link className={styles.header__item} href="#about">o
                        nas</Link>
                    <Link className={styles.header__item} href="#">katalog</Link>
                    <Link className={styles.header__item} href="#dostawa-i-platnosc">dostawa
                        i
                        płatność</Link>
                    <Link className={styles.header__item} href="#">kontakt</Link>
                </ul>
                <LogoMila className={styles.header__logo}/>
                
            </div>
            <section className={styles.header__element}>
                <h1 className={`${template.heading_2} ${styles.header__motto}`}>Kompozycje,
                    które mówią wiecej niż słowa</h1>
                <Link href={"#"} className={template.btn}>Sprawdź</Link>
            </section>

        </div>
    )
}