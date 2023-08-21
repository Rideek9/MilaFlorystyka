import TextSection from "@/components/otherComponent/textSection/textSection";
import style from './trustUs.module.sass'

const data = [
    {
        name: 'KGP',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRbKcwaYTrPM-Xur3TULsyyO4INp3iOp1c-WqULS2xRQ&s'
    },
    {
        name: 'KSP',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Policja_Warszawska.png'
    },
    {
        name: 'GROM',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Grom-logo.png'
    },
    {
        name: 'KGSG',
        logo: 'https://www.hako.com.pl/media/djcatalog2/images/item/4/sg3-emblemat-naramienny-strazy-granicznej-polish-border-guard-do-umundurowania-wyjsciowego.1_l.jpg'
    },
    {
        name: 'MF',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Logo_Ministerstwa_Finansów.svg/1200px-Logo_Ministerstwa_Finansów.svg.png'
    },
    

]

const TrustUs = () => {

    return (
        <div className={style.wrapper}>
            <TextSection>zaufali nam</TextSection>
            <div className={style.contener}>
                {data.map(item => {
                    return (
                        <div className={style.main} key={item.name}>
                            <img className={style.logo} src={item.logo} alt={item.name}/>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}


export default TrustUs