import { FaShareNodes } from "react-icons/fa6";

export default function Doctors() {
    return (
        <div id="doctor" className="max-w-7xl mx-auto pt-20 pb-28 px-4">
            <div className="text-center max-w-2xl mx-auto">
                <h3 className="text-2xl text-[#ff4880] mb-3 font-semibold">Our Doctors</h3>
                <h1 className="text-4xl md:text-[45px] text-[#002935] font-semibold leading-[50px]">We provide Exceptional Medical Care For Our Patients</h1>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mt-14">
                <div>
                    <img src="./public/Images/sectionImage/Doctors/doctor_7.jpeg" alt="" />
                    <div className="flex items-center justify-between py-5 doctor">
                        <div>
                            <h2 className="text-3xl font-semibold text-[#002935]">Dr. Marvin McKinney</h2>
                            <p className="text-[#747474]">Dental Surgery</p>
                        </div>
                        <FaShareNodes className="text-white text-5xl bg-black share p-2 rounded-full border-4 border-[#ff4880]" />
                    </div>
                </div>
                <div className="flex flex-col-reverse md:flex-col">
                    <div className="flex items-center justify-between py-5 doctor">
                        <div>
                            <h2 className="text-3xl font-semibold text-[#002935]">Dr. Terri Williams</h2>
                            <p className="text-[#747474]">Medical Assistant</p>
                        </div>
                        <FaShareNodes className="text-white text-5xl bg-black share p-2 rounded-full border-4 border-[#ff4880]" />
                    </div>
                    <img src="./public/Images/sectionImage/Doctors/doctor_8.jpeg" alt="" />
                </div>
                <div>
                    <img src="./public/Images/sectionImage/Doctors/doctor_9.jpeg" alt="" />
                    <div className="flex items-center justify-between py-5 doctor">
                        <div>
                            <h2 className="text-3xl font-semibold text-[#002935]">Dr. Jane Cooper</h2>
                            <p className="text-[#747474]">Heart Speceilis</p>
                        </div>
                        <FaShareNodes className="text-white text-5xl bg-black share p-2 rounded-full border-4 border-[#ff4880]" />
                    </div>
                </div>
            </div>
        </div>
    )
}
