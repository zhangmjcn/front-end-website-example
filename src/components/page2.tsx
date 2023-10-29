import Image from "next/image";
import Link from "next/link";
import {ReactNode, useEffect, useState} from "react";
import {motion} from "framer-motion";
import TextFrame from "@/components/textFrame";

function Page2Text() {
    return (
        <div className="d-flex flex-row flex-wrap w-100">
            <div className="" style={{display: "inline-block", width: "250px", marginRight:"1em"}}>
                <Image src={"/pictures/p2-02-climb-text.png"} alt={"title"} height={250} width={150}
                       style={{width: "250px", height: "auto", objectFit: "cover"}}
                />
            </div>
            <div className="d-inline-flex align-self-end pt-2" style={{maxWidth: "40em"}}>
                Jay is highly skilled in JavaScript, TypeScript, React, Node.js, and other popular frameworks and
                libraries. He has implemented robust full stack solutions for companies in various industries, including
                fintech, e-commerce, and SaaS.
                {/*Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis hendrerit ac,*/}
                {/*tristiqueut*/}
                {/*quam. Vivamus suscipit dignissim tortor nec congue.*/}
            </div>
        </div>
    )
}

type TabItem = {
    name: ReactNode,
    content: ReactNode,
}


function tabContentLine(txt1: string, txt2: ReactNode) {
    return <div className="d-flex flex-row py-2 justify-content-start">
        <div className="d-flex flex-nowrap" style={{width: "40%"}}>{txt1}</div>
        <div className="d-flex flex-grow-1">{txt2}</div>
    </div>
}


function tabContentBoxHtml1() {
    return <div className="">
        {tabContentLine("25 Nov 2023", "Hello, this is Jay")}
        {tabContentLine("26 Nov 2023", <Link href="mailto:zhangmjcn@gmail.com">zhangmjcn@gmail.com</Link>)}
        {tabContentLine("10 Dec 2023", <Link href="https://www.jay-zhang.com">https://www.jay-zhang.com</Link>)}
        {tabContentLine("17 Dec 2013", "See you later")}
    </div>;
}

function tabContentBoxHtml2() {
    return <div>
        {tabContentLine("1 Jan 2024", "Vestibulum viverra")}
        {tabContentLine("7 Jan 2023", "Vestibulum viverra")}
        {tabContentLine("12 Jan 2023", "Vestibulum viverra")}
        {tabContentLine("8 Feb 2013", "Vestibulum viverra")}
    </div>;
}


function tabContentBox(contentLines: ReactNode) {
    return <div className="d-flex position-absolute vw-100 h-100 flex-row"
    >
        <div className="d-flex" style={{width: "20%"}}></div>
        <div className="d-flex flex-column flex-grow-1" style={{width: "20%", maxWidth: "450px"}}>
            <div className="d-flex" style={{height: "5em"}}></div>
            <motion.div
                className="d-flex w-100" style={{height: "20em", backgroundColor: "rgba(255,255,255,0.7)"}}
                whileHover={{scale: 1.1}}
                transition={{duration: 1}}
            >
                <div className="d-flex flex-column ps-5 pe-2 py-4 w-100">
                    <div className="tabScheduleTitleFont">SCHEDULE</div>
                    {contentLines}
                </div>
            </motion.div>
            <div className="d-flex" style={{height: "5em"}}></div>
        </div>
        <div className="d-flex" style={{}}></div>
        <div className="d-flex" style={{width: "20%"}}></div>
    </div>
}

const tabContent1 = <div className="d-flex h-100 position-relative justify-content-center align-items-center">
    {tabContentBox(tabContentBoxHtml1())}
    <div className="position-absolute d-flex vw-100 h-100" style={{zIndex: -10}}>
        <Image src={"/pictures/p2-tab1-bg.png"} alt={"pic"} fill={true} sizes={"100vw"}
               style={{zIndex: -1, top: "0px", objectFit:"cover"}}/>
    </div>
</div>


const tabContent2 =
    <div className="d-flex h-100 position-relative justify-content-center align-items-center">
        {tabContentBox(tabContentBoxHtml2())}
        <div className="position-absolute d-flex vw-100 h-100">
            <Image src={"/pictures/p2-tab2-bg.png"} alt={"pic"} fill={true} sizes={"100vw"}
                   style={{zIndex: -1, top: "0px", objectFit:"cover"}}/>
        </div>
    </div>


const tabItems = [
    {name: "MOUNTAIN 1", content: tabContent1},
    {name: "MOUNTAIN 2", content: tabContent2}
]


export default function Page2() {

    let [currentTab, setCurrentTab] = useState(tabItems[0]['name']);

    function setTabContent(name: string) {

        const contentItems = document.getElementById("tabContentGroup")?.getElementsByClassName("tabContent");
        if (contentItems === undefined) {
            return;
        }
        for (let i = 0; i < contentItems?.length; i++) {
            const item = contentItems[i];
            const id = item.id;
            const idName = id.split("-")[1];
            if (idName === name) {
                console.log(item)
                item.classList.add("d-flex");
                item.classList.remove("d-none");
            } else {
                item.classList.add("d-none");
                item.classList.remove("d-flex");
            }
        }

        console.log(contentItems)
    }

    function TabButton(item: TabItem) {
        const btnName = "" + item['name']
        const btnId = "btn-" + item['name'];
        const classVisi = (item['name'] === currentTab) ? " active" : "";
        const btnOnclick = () => {
            setCurrentTab(btnName);
            setTabContent(btnName);
        }

        return <button id={btnId} key={btnId} onClick={btnOnclick}
                       className={"tabButton " + classVisi}>{item['name']}</button>
    }

    function TabButtonGroup() {
        return <div id="idTabButton" className="tabButtonContainer">
            {
                tabItems.map((item: TabItem) => {
                    return TabButton(item)
                })
            }
        </div>
    }

    function TabSection() {
        return <div className="">
            <div id="tabBar" className="d-flex flex-row baseColor" style={{height: "2.5em"}}>
                <div style={{width: "20%"}}></div>
                <div className="h-100" style={{width: "60%"}}>
                    <div className="d-flex flex-row h-100 align-items-center justify-content-center">
                        {TabButtonGroup()}
                    </div>
                </div>
                <div style={{width: "20%"}}></div>
            </div>
        </div>
    }


    return <div id="Page2" className="pageFrame d-flex flex-column h-100 position-relative w-100">
        <div className="d-flex align-items-end w-100 mb-3" style={{backgroundColor: "#fff"}}>
            <div className="d-flex" style={{height: "14em"}}></div>
            {TextFrame(Page2Text())}
        </div>
        {TabSection()}
        <div id="tabContentGroup" className="d-flex h-100 flex-row">
            {
                tabItems.map((item: TabItem, idx) => {
                    const flexString = (item['name'] === currentTab) ? " d-flex" : "";
                    return <motion.div id={"cnt-" + item['name']} className={"tabContent " + flexString} key={idx}
                    >
                        {item['content']}
                    </motion.div>
                })
            }

        </div>
    </div>
}