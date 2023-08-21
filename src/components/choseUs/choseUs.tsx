import style from './choseUs.module.sass'
import Image from "next/image";
import TextSection from "@/components/otherComponent/textSection/textSection";
import Icon from "@/components/IconSVG/Icon";

const data = [
    {
        text: "Profesjonalizm i doświadczenie"
    },
    {
        text: "Indywidualne podejście"
    },
    {
        text: "Kwiaty wysokiej jakości"
    },
    {
        text: "Bogaty wybór wzorów"
    },
    {
        text: "Wsparcie emocjonalne"
    },
    {
        text: "Kreatywność i pasję"
    },

]
const ChoseUs = () => {

    return (
        <div className={style.wrapper}>
            <TextSection>wybierając nas otrzymujesz</TextSection>
            <div className={style.image}></div>
            <ul className={style.list}>
                {data.map(item => {
                    return (
                        <li key={item.text} className={style.item}>
                            <Icon icon={"check"} className={style.item__icon}/>
                            <p className={style.item__text}>{item.text}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}


export default ChoseUs