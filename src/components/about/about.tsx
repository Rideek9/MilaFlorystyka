import Icon from "../IconSVG/Icon"
import styles from "./about.module.sass"
import typo from "../../../styles/templates.module.sass"
import TextSection from "@/components/otherComponent/textSection/textSection";


const data = [
    {
        title: "Zaufanie wielu klientów",
        description: "Od lat współpracujemy z zakładami pogrzebowymi oraz instytucjami" +
            " państwowymi, którzy zaufali nam w każdym detalu",
        icon: "handshake"
    },
    {
        title: "Wieloletnie doświadczenie",
        description: "Nasze doświadczenie w wyrobie kompozycji \n" +
            "pogrzebowych sięga 2004 roku.\n" +
            "Od 20 lat tworzymy produkty, które wyróżniają\n" +
            "się na ceremoniach pogrzebowych.",
        icon: "infinite"
    },
    {
        title: "Zamówienia",
        description: "Wszystkie nasze wyroby są wytwarzane \n" +
            "wyłącznie na zamówienie po uprzednim \n" +
            "zamówieniu telefonicznym.",
        icon: "old-phone"
    },
    {
        title: "Klient jest najważniejszy",
        description: "Jesteśmy przekonani, że każde pożegnanie\n" +
            " zasługuje na godne upamiętnienie.\n" +
            "W naszej pracowni oddajemy hołd nie tylko\n" +
            "przez piękno kwiatów, ale również przez\n" +
            "indywidualne zaangażowanie i wrażliwość.",
        icon: "street-view"
    },
    {
        title: "Elastyczne dostawy",
        description: "Dostawy naszych wyrobów, realizujemy na \n" +
            "terenie Warszawy i okolic.",
        icon: "truck"
    },
    {
        title: "Indywidualne zamówienia",
        description: "Tworzymy nie tylko wieńce i wiązanki\n" +
            "pogrzebowe, ale również dostosowane\n" +
            "indywidualne aranżacje spełniające \n" +
            "unikalne wymagania klienta",
        icon: "note"
    },
]


export default function About() {
    return (
        <div id="about" className={styles.about}>
            <TextSection>o nas</TextSection>
            {data.map(item => {
                return (
                    <div key={item.title} className={styles.about__item}>
                        <Icon icon={item.icon} className={styles.icon}/>
                        <h3 className={`${typo.heading_4} ${styles.about__header}`}>{item.title}</h3>
                        <p className={styles.about__text}>{item.description}</p>
                    </div>

                )
            })}
        </div>
    )

}