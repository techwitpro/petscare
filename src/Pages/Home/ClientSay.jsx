import { FaStar } from "react-icons/fa6"

export default function ClientSay() {
    const clients = [
        {
            name: "Jackson Mateo",
            profession: "Vaterniary Assistant",
            image: "./Images/sectionImage/Doctors/doctor_9.jpeg",
            review: "We are one of the best service provider and we will make a best offer for our dedicated customer. We have some and initial offers for our delicate customer. This is really effective for us. You can",
            rating: 5
        },
        {
            name: "Evelynne Mirando",
            profession: "Eye Specialist",
            image: "./Images/sectionImage/Doctors/doctor_8.jpeg",
            review: "We are one of the best service provider and we will make a best offer for our dedicated customer. We have some and initial offers for our delicate customer. This is really effective for us. You can",
            rating: 5
        }
    ]
    return (
        <div className="bg-[#fff4f8] pt-24 relative flex justify-center items-center px-4 overflow-hidden py-28">
            <img className="absolute left-0 bottom-0" src="./Images/Background/accordian_shape1.png" alt="" />
            <img className="absolute right-0 top-0" src="./Images/Background/accordian_shape2.png" alt="" />
            <div className="max-w-7xl mx-auto z-40">
                <div className="text-center max-w-3xl mx-auto">
                    <h3 className="text-2xl text-[#ff4880] mb-3 font-semibold">What Client's Say</h3>
                    <h1 className="text-4xl md:text-[45px] text-[#002935] font-semibold leading-[50px]">Valueable Words From Customers</h1>
                </div>
                <div className="grid lg:grid-cols-2 gap-10 mt-14">
                    {
                        clients?.map((client, idx) =>
                            <div key={idx} className="p-10 bg-white rounded-lg hover:shadow-xl">
                                <img className="rounded-full h-40 w-40 mx-auto" src={client?.image} alt="" />
                                <p className="text-center text-[#747474] my-8">{client?.review}</p>
                                <hr />
                                <div className="flex justify-between mt-5">
                                    <div className="space-y-1">
                                        <h3 className="text-xl text-[#002935] font-semibold">{client?.name}</h3>
                                        <h5 className="text-sm text-[#ff4880] font-medium">{client?.profession}</h5>
                                    </div>
                                    <p className="flex items-center font-bold text-lg">{client?.rating}.0<FaStar className="text-[#ffc107] ml-1" /></p>
                                </div>
                            </ div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
