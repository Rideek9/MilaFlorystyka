import Container from "@/app/container.module.sass";
import Header from "@/components/header/header";
import About from "@/components/about/about";
import Move from "@/components/move/move";
import ChoseUs from "@/components/choseUs/choseUs";
import Compositions from "@/components/compositions/compositions";
import PickAndPay from "@/components/picupAndPay/PickAndPay";

export default function Page404() {
    return (
        <div className={Container.contener}>
            <Header/>
            <h1>Strona nie istnieje 404</h1>
            <a href="/">Wróć</a>
        </div>
    )

}