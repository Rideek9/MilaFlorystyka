import style from "./section.module.sass"

const TextSection = ({children}: any) => {

    return (
        <div className={style.main}>
            <p className={style.main__text}>{children}</p>
            <div className={style.main__circle}></div>
        </div>
    )
}

export default TextSection