import style from "./compositions.module.sass"
import temp from '../../../styles/templates.module.sass'
import TextSection from "@/components/otherComponent/textSection/textSection";
import Link from "next/link";


const url = "/assets/img/flowers/"

const photos = [
    {
        code: "WIE-001",

    },
    {
        code: "WIE-002",

    },
    {
        code: "WIE-003",

    },
    {
        code: "WIA-002",

    },
    {
        code: "WIA-003",

    },
    {
        code: "WIE-004",
    },
    {
        code: "WIE-005",

    },
    {
        code: "WIE-006",

    },

]
const Compositions = () => {

    return (
        <>
            <TextSection>przykładowe kompozycje</TextSection>
            <div className={style.container}>
                {photos.map((item, index) => {
                    const text = item.code.substring(0, 3)
                    let product: string = ""

                    switch (text) {
                        case "WIE":
                            product = 'Wieniec'
                            break
                        case "WIA":
                            product = 'Wiązanka'
                            break
                        case "LEZ":
                            product = 'Łezka'
                            break
                        case "WOP":
                            product = 'Półwieniec'
                            break

                    }

                    return (
                        <Link href="#" key={item.code}
                              className={`${style.item}`}>
                            <img src={`${url}${item.code}.jpg`} alt="test"
                                 className={style.photo}/>
                            <div className={style.textPhoto}>
                                <h4 className={`${temp.heading_2} ${style.textPhoto__product}`}>{product}</h4>
                                <p className={style.textPhoto__code}>{item.code}</p>

                            </div>
                        </Link>
                    )
                })}
                <Link href={"#"}
                      className={`${temp.btn} ${style.btn}`}>katalog</Link>
            </div>

        </>


    )
}

export default Compositions