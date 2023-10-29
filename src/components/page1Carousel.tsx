import Image from "next/image";
import Link from "next/link";
import {useEffect} from "react";

const carouselSectionHeight = (r = 1) => 150* r;

type CarouselItem = {
    title: string,
    image1: string,
    image2: string,
    isActive: boolean
}

const carouselItems = [
    {title: "Story 1", image1: "/pictures/p1-ca-1.png", image2: "/pictures/p1-ca-2.png", isActive: true},
    {title: "Story 2", image1: "/pictures/p1-ca-4.png", image2: "/pictures/p1-ca-3.png", isActive: false},
]

function carouselImage(item: CarouselItem) {
    const imgWidth = 220;
    const imgHeight = 135;

    const imgAspRatio = imgWidth / imgHeight;
    const importHeight = carouselSectionHeight() * 0.6;
    const importWidth = importHeight * imgAspRatio;

    return <div
        className={"carousel-item " + (item['isActive'] ? " active" : "")}
    >
        <Image src={item['image1']} alt="img"
               sizes={"220px 135px"} className="px-1"
               width={importWidth} height={importHeight}
        />
        <Image src={item['image2']} alt="img"
               sizes={"220px 135px"} className="px-1"
               width={importWidth} height={importHeight}
        />

    </div>
}

function carouselButtons(items: CarouselItem[]) {
    const sz = 6;
    return <div
        className="d-flex flex-row justify-content-center "
    >
        {items.map((item, idx) => {
            return <div
                key={"c-" + idx} className={"px-1 " + ((idx == 0) ? "active" : "")}
                data-bs-target="#carouselIndicators" data-bs-slide-to={idx}
                aria-current={(idx == 0) ? "true" : "false"} aria-label={"Slide " + idx}
            >
                <Link href={"#"}>
                    <Image src="/icons/carousel-ellipse-1.png" alt={"dot"}
                           width={sz} height={sz}
                    />
                </Link>
            </div>
        })}
    </div>
}

export function Carousel() {
    return <div id="carouselIndicators" className="carousel slide p-2 align-items-center"
                style={{
                    width: "500px",
                    display: "inline-block", alignSelf: "end"
                }}
    >
        <div className="carousel-inner text-center"
        >
            {carouselImage(carouselItems[0])}
            {carouselImage(carouselItems[1])}
        </div>
        {carouselButtons(carouselItems)}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselIndicators"
                data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselIndicators"
                data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
}

export default function Page1Carousel() {
    useEffect(() => {
            require("bootstrap/dist/js/bootstrap.bundle.min.js");
        }
    )

    return (
        <div id="page1Carousel"
             className="defaultSectionFormat flex-grow-1 w-100 p-0 m-0"
             style={{
                 maxHeight: carouselSectionHeight(),
                 height: carouselSectionHeight(),
                 backgroundColor: "rgba(30,45,75,0.8)"
             }}>
            <div className="d-inline-block" style={{alignSelf:"flex-end"}} >
                {Carousel()}
            </div>
        </div>)
}