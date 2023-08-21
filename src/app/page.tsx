import Header from "../components/header/header"
import Container from "./container.module.sass"
import About from "../components/about/about";
import Move from "../components/move/move";
import ChoseUs from "@/components/choseUs/choseUs";
import Compositions from "@/components/compositions/compositions";
import PickAndPay from "@/components/picupAndPay/PickAndPay";


export default function Home() {

    return (
        <div className={Container.contener}>
            <Header/>
            <About/>
            <Move/>
            <ChoseUs/>
            <Compositions/>
            <PickAndPay/>
        </div>


    )
}
