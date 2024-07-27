import { BsCheck2Circle } from "react-icons/bs";

export default function Bringing() {
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-20 px-4 flex justify-between">
                <img className="h-[500px]" src="./Images/sectionImage/Bringing.png" alt="" />
                <div className="pl-10">
                    <h1 className="text-[#002935] text-[45px] font-medium mb-7 leading-[50px]">Bringing a Independence To little Closer to Home.</h1>
                    <p className="text-[#747474] text-lg">We are a team of experienced professionals dedicated to providing you with the best possible real estate services. Our passion for real estate, combined with our expertise and knowledge of</p>
                    <div className="flex items-center justify-between">
                        <ul className="space-y-1">
                            <li className="flex items-center text-lg text-[#002935] hover:text-[#ff4880] font-semibold tracking-[0.3px]"><BsCheck2Circle className="mr-3 text-[#f07399]" /> The grooming and hygiene.</li>
                            <li className="flex items-center text-lg text-[#002935] hover:text-[#ff4880] font-semibold tracking-[0.3px]"><BsCheck2Circle className="mr-3 text-[#f07399]" /> Creating a good medic-sets.</li>
                            <li className="flex items-center text-lg text-[#002935] hover:text-[#ff4880] font-semibold tracking-[0.3px]"><BsCheck2Circle className="mr-3 text-[#f07399]" /> Get good and delicious meal</li>
                            <li className="flex items-center text-lg text-[#002935] hover:text-[#ff4880] font-semibold tracking-[0.3px]"><BsCheck2Circle className="mr-3 text-[#f07399]" /> Giving medication administration.</li>
                            <li className="flex items-center text-lg text-[#002935] hover:text-[#ff4880] font-semibold tracking-[0.3px]"><BsCheck2Circle className="mr-3 text-[#f07399]" /> Best Veterinarian's</li>
                        </ul>
                        <img className="w-1/2" src="./Images/sectionImage/Bringing-dog.png" alt="" />
                    </div>
                    <button className="text-white bg-[#002935] hover:bg-[#ff4880] py-3 px-10 rounded font-semibold hover:relative hover:bottom-0.5 mt-7">Read More</button>
                </div>
            </div>
        </div>
    )
}
