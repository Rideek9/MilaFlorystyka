import style from './move.module.sass'
import template from "../../../styles/templates.module.sass";
import Link from "next/link";


const Move = () => {
    return (
        <div className={style.moveMain}>
            <div className={style.background}></div>
            <video autoPlay loop muted className={style.video}>
                <source src="/assets/movie/move-first.mp4"/>
            </video>
            <div className={style.sectionText}>
                <h2 className={`${style.sectionText__tesxt}`}>Wyrazimy
                    Twoje uczucia w
                    najpiękniejszy
                    sposób</h2>
                <Link href={"tel:+48507187527"} className={template.btn}>zadzwoń</Link>
            </div>

        </div>
    )
}

export default Move