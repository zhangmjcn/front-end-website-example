import Page1Carousel from "@/components/page1Carousel";

export default function TextFrame(children: React.ReactNode) {
    return <div id="page1Title" className=" d-flex flex-grow-1 px-2 w-100 justify-content-center align-top pt-5"
    >
        <div className="container-fluid">
            <div className="row d-flex justify-content-center">
                <div className="col-12 col-lg-8">
                    {children}
                </div>
            </div>
        </div>
    </div>
}