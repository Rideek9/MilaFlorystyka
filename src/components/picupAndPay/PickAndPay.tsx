import style from './pickup.module.sass'
import TextSection from "@/components/otherComponent/textSection/textSection";
import Icon from "@/components/IconSVG/Icon";

const pays = [
    {
        code: "money",
        text: "gotówka"
    },
    {
        code: "bank",
        text: "Przelew na konto"
    },
    {
        code: "blik",
        text: "blik"
    }
]
export default function PickAndPay() {

    return (
        <div id="dostawa-i-platnosc" className={style.wrapper}>
            <TextSection>dostawa i płatność</TextSection>
            <p className={style.text}>Wszystkie dostawy realizowane są na terenie Warszawy
                i okolic po
                uprzednim zamówieniu telefonicznym.<br/>
                Koszty dostawy zależne są od wielkości zamówienia oraz lokalizacji.
                Wartość dostawy podawana jest przy zamówieniu telefonicznym
            </p>
            <p className={style.text}>Pracownia nie gwarantuje możliwości dostawy, ze
                względu
                na ograniczoną ilość pojazdów.
            </p>

            <p className={style.payText}>Możliwe rodzaje płatności</p>

            <div className={style.contener}>
                {pays.map(pay => {

                    return (
                        <div key={pay.code} className={style.item}>
                            <Icon icon={pay.code} className={style.icon}/>
                            <p className={style.name}>{pay.text}</p>
                        </div>

                    )
                })}
            </div>
            <p className={style.text}>Więcej informacji dotyczących płatności pod nr
                telefonu
            </p>
        </div>
    )
}


