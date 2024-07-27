import { LuPhoneOutgoing } from "react-icons/lu";

export default function Phone() {
  return (
    <div className="relative bg-white mb-10">
        <img src="./Images/sectionImage/phone.jpeg" alt="Background" className="w-full h-72 object-cover" />

        <div className="absolute top-0 left-0 w-full h-full px-4 bg-pink-500 hover:bg-[#7ab2b2c9] duration-1000 bg-opacity-70 flex items-center justify-center">
            <div className="text-center text-white">
                <h1 className="text-3xl font-bold">24/7 Available. Call us</h1>
                <p className="text-xl mt-2">Veterinarian +31-359-28-1237</p>
                <div className="text-2xl mt-4 p-2 rounded-full bg-white hover:text-[27px] bg-opacity-50 inline-flex items-center justify-center">
                <LuPhoneOutgoing />
                </div>
            </div>
        </div>
    </div>
  )
}
