import Image from "next/image";
import styles from "./hero.module.css"

import {BaseNavBar} from "@/components/baseNavBar";

export default function Hero() {
    return <div id="Home" className="pageFrame d-flex vw-100 h-100">
        <div id={"heroNav"}
             className="w-100 align-items-baseline align-items-center justify-content-evenly" style={{height:"5em"}}>
            {BaseNavBar()}
        </div>
        <div id={"heroBg"} className={styles.heroBg + " "}>
            <Image src={"/pictures/hero-bg.png"} alt={"heroBg"}
                   width={1600} height={1521}
                   style={{
                       height:"auto", width:"100%",
                       objectPosition:"center top",
                       objectFit:"cover",
                   }}
            /></div>
    </div>
}