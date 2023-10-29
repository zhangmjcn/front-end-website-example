"use client"

// import {useEffect, useState} from "react";
import "./styles.css"
import Link from "next/link";

export default function JqueryPage() {

    const updateActiveTabView = (id = "tabContent1") => {
        let subItems = null;

        subItems = document.querySelectorAll("#tabContentGroup > .tabContentPane")
        subItems.forEach((element, index) => {
            console.log(element);
            if (element.id === id) {
                console.log(id)
                element.classList.add("active");
            } else {
                element.classList.remove("active");
            }
        })
    }

    return <div className="d-flex flex-column vw-100 vh-100 align-items-stretch">
        <div id="tabNav" className="jqNav " style={{height: "5em"}}>
            <div><Link href="#" onClick={() => {
                updateActiveTabView("tabContent1")
            }}>content-1</Link></div>
            <div><Link href="#" onClick={() => {
                updateActiveTabView("tabContent2")
            }}>content-2</Link></div>
        </div>
        <div id="tabContentGroup" className="d-flex flex-column w-100 h-100 bg-danger">
            <div id="tabContent1" className="tabContentPane active">
                Hello world
            </div>
            <div id="tabContent2" className="tabContentPane">
                <div className="d-flex w-100 h-100 justify-content-evenly align-items-center"
                     style={{backgroundColor: "yellowgreen"}}>
                    Good morning
                </div>
            </div>
        </div>

    </div>
}