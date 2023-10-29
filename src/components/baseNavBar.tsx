import Image from "next/image";
import Link from "next/link";
import {motion} from "framer-motion";

function Logo() {
    const logoSize = 45;
    return <motion.div
        whileHover={{scale: 1.1}}
    ><Image
        src={"/icons/logo.png"} alt={"logo"} height={logoSize} width={logoSize}/></motion.div>
}

function NavBarLink(name: string, href: string) {
    return <li className="col-12 col-lg-3 text-center"><Link href={href}>{name}</Link></li>
}
function NavBarLinks() {
    return <ul className="container-fluid w-100">
        <div className="row justify-content-evenly">
            {NavBarLink("00.HOME", "#Home")}
            {NavBarLink("01.HISTORY", "#Page1")}
            {NavBarLink("02.TEAM", "#Page2")}
        </div>
    </ul>
}

export function BaseNavBar(navId: string = "heroNav") {
    return <div id={navId} className="NavSection">
        <div className="container-fluid row p-0 m-0 d-flex justify-content-evenly ">
            <div className="col-12 col-md-3 py-3 d-flex justify-content-center">
                {Logo()}
            </div>
            <div className="d-none d-md-flex col-md-1"></div>
            <div className="col-12 col-md-6 d-flex align-items-center"
            >{NavBarLinks()}</div>
        </div>
    </div>
}