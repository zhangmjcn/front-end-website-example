import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return <div className="footer d-flex flex-row">
        <div className="d-flex h-100 align-items-center justify-content-start">
            <Image src="/pictures/footer-logo.png" alt="logo"  width={163} height={43}
            />
        </div>
        <div className="d-flex copyright">COPYRIGHT 2023. ALL RIGHTS RESERVED.</div>
    </div>
}