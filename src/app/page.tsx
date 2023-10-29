'use client'
import Image from 'next/image'
import Hero from '../components/hero'
import Page1 from '../components/page1'
import Page2 from '../components/page2'
import Footer from "@/components/footer";
import {Carousel} from "@/components/page1Carousel";
import PageNavBar from "@/components/pageNavBar";
import Link from "next/link";

function Page(children: React.ReactNode, vh:number=100) {
    return <div className="d-flex vw-100 min-vh-100 justify-content-center" style={{height:vh+"vh"}}>{children}</div>
}
export default function Home() {
    return (<div className="h-100">
            {Page(<Hero />)}
            {PageNavBar()}
            {Page(<Page1 />)}
            {Page(<Page2 />)}
            {Footer()}
        </div>
    )
}
