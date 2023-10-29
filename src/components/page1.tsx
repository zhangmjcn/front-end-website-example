"use client";
import Image from "next/image";
import Page1Carousel from "@/components/page1Carousel";
import TextFrame from "@/components/textFrame";
import PageNavBar from "@/components/pageNavBar";

function Page1Text() {
    return <div className="flex-column w-100">
        <div className="flex pt-5">
            <Image src={"/pictures/p1-01-hist-text.png"} alt={"title"} height={250} width={150}
                   style={{width: "auto", height: "auto"}}
            />
        </div>
        <div id="page1Text" className="px-5 mx-2 justify-content-evenly">
            <p>
                Jay is an accomplished full stack developer with over 30 years of programming experience. He has spent
                the last 10 years focusing on full stack development, gaining expert proficiency in both front-end and
                back-end web development.
            </p>
        </div>
    </div>
}


function Page1Bg() {
    return <div id={"Page1"} className="d-flex flex-column vw-100 h-100 p-0"
                style={{
                    zIndex: 1, alignItems: "stretch",
                    backgroundImage: "url('/pictures/p1-bg.png')",
                    backgroundPosition: "center top",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",

                }}
    >
        {TextFrame(Page1Text())}
        {Page1Carousel()}
    </div>
}


export default function Page1() {
    return Page1Bg()
}