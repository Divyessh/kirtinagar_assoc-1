import Image from "next/image";
import galleryBanner from "../../assets/png/galleryImage.jpeg";


const GallerySection = () => {
    return(
        <div className="bg-primary">
            <header className="flex items-center justify-center md:justify-between md:items-between">
            <div className="text-black text-2xl text-start h-full pl-4">
                <h1 className="">
                Gallery
                </h1>
                <h1>
                KIRTI NAGAR TIMBER AND FURNITURE MARKET
                </h1>
            </div>
            <div >
            <Image src={galleryBanner} alt="galleryBanner" height={391} width={800} className="rounded-bl-[400px]"/>
            </div>
            </header>
        </div>
    )
}
export default GallerySection;