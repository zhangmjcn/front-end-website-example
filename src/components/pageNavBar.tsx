'use client'

import styles from "./pageNavBar.module.css"
import {BaseNavBar} from "@/components/baseNavBar";
import {useEffect} from "react";

export default function PageNavBar() {

    return <div id="pageNavContainer" className="w-100 sticky-top" style={{backgroundColor: "rgba(240,240,240,0.6)", zIndex: 9}}>
            {BaseNavBar("pageNav")}
        </div>

};