
export default function PricingPlan() {
    const plans = [
        {
            name: "Day Care Regular",
            price: 127,
            image: "../../../public/Images/PricingPlan/price_info1.jpeg",
            services: [
                "Socialise Excercise", "Handscissor Finish", "Conditioning Treatment", "Surgical Extraction", "State And Federal Postings", "Second Description"
            ]
        },
        {
            name: "Day Care Standard",
            price: 127,
            image: "../../../public/Images/PricingPlan/price_info2.jpeg",
            services: [
                "Socialise Excercise", "Handscissor Finish", "Conditioning Treatment", "Surgical Extraction", "State And Federal Postings", "Second Description"
            ]
        },
        {
            name: "Day Care Special",
            price: 127,
            image: "../../../public/Images/PricingPlan/price_info3.jpeg",
            services: [
                "Socialise Excercise", "Handscissor Finish", "Conditioning Treatment", "Surgical Extraction", "State And Federal Postings", "Second Description"
            ]
        }
    ]
    return (
        <div id="pricing" className="bg-white px-4">
            <div className="max-w-7xl mx-auto py-20">
                <div className="">
                    <h3 className="text-2xl text-[#ff4880] mb-3 font-semibold">Our Pricing Plan</h3>
                    <h1 className="text-4xl md:text-[45px] text-[#002935] font-semibold leading-[50px]">Our High Quality Easy Price</h1>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-12">
                    {
                        plans?.map((plan, idx) =>
                            <div key={idx} className="bg-[#fff4f8] priceCard shadow-2xl rounded-md">
                                <div className="relative">
                                    <img className="h-60 md:h-80 lg:h-52 w-full rounded-t-md" src={plan?.image} alt="" />
                                    <div className="absolute top-0 h-60 md:h-80 lg:h-52 w-full bg-[#0b4a4a81] flex flex-col justify-center space-y-3 text-white pl-6 rounded-t-md">
                                        <h1 className="text-5xl font-medium">${plan?.price}</h1>
                                        <h1 className="text-3xl font-bold">{plan?.name}</h1>
                                    </div>
                                </div>
                                <ul className="list-disc list-inside p-5 text-xl text-[#747474] space-y-2">
                                    {
                                        plan?.services?.map((service, idx) =>
                                            <li key={idx}>{service}</li>
                                        )
                                    }
                                </ul>
                                    <button className="text-white text-lg bg-[#002935] py-3 px-10 rounded font-semibold duration-500 mx-5 mb-5 priceBtn">Get Started</button>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
