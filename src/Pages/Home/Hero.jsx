
export default function Hero() {
    return (
        <div id="home" className="bg-[#fff4f8] pt-24 min-h-screen relative flex justify-center items-center overflow-hidden">
            <img className="absolute left-0 top-28 lg:w-[800px]" src="./Images/hero/home-text-bg.png" alt="" />
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between z-40 px-4 relative">
                <div className="lg:w-[55%]">
                <h3 className="text-[#ff4880] text-2xl font-semibold mb-8">Pet Care Veterinary</h3>
                    <h1 className="text-[#002935] text-4xl md:text-[54px] font-bold mb-7 leading-[40px] md:leading-[70px]">We Are Veterinary Pet Care Service For Years.</h1>
                    <p className="text-[#747474] text-lg mb-10">Lorem ipsum dolor sit amet consectetuer adipiscing Phasellus hendrerit lorem dolor sit nibh nec urna. In nisi neque, aliquet vel dapibus</p>
                    <button className="text-white hover:text-lg bg-[#002935] hover:bg-[#ff4880] py-3 px-10 rounded font-semibold hover:relative hover:bottom-0.5 duration-500">Read More</button>
                </div>
                <div className="lg:w-2/5">
                    <img className="max-h-[540px] md:w-[525px] mx-auto" src="./Images/hero/hero-img.png" alt="" />
                </div>
            </div>
        </div>
    )
}
