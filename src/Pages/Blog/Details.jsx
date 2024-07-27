import { FaCheck } from "react-icons/fa";

export default function Details() {
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-10 px-4 ">
                <div className="grid grid-cols-1 gap-4 lg:flex items-center lg:space-x-10">
                    <img className="md:max-h-80 rounded" src="./Images/post/gallery_10.jpeg" alt="" />
                    <ul className="text-[#002935] font-bold md:text-lg space-y-3">
                        <li className="flex items-center"><FaCheck className="mr-2 text-base" /> Find information and begin your application</li>
                        <li className="flex items-center"><FaCheck className="mr-2 text-base" /> We provide obtaining entry permits</li>
                        <li className="flex items-center"><FaCheck className="mr-2 text-base" /> Ut enim veniam, quis nostrud minim exerc</li>
                        <li className="flex items-center"><FaCheck className="mr-2 text-base" /> Apply to travel, study, work or immigrate</li>
                        <li className="flex items-center"><FaCheck className="mr-2 text-base" /> Dolor in reprehenderit voluptate velit esse</li>
                        <li className="flex items-center"><FaCheck className="mr-2 text-base" /> Bunt in culpa qui officia deserunt mollit anim</li>
                    </ul>
                </div>
                <div className="mt-10 space-y-7">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-semibold text-[#002935]">We Exist to Inspire the World to Play</h2>
                        <p className="text-[#747474]">England dotted with a lush, green landscape, rustic villages and throbbing with humanity. South Asian country that has plenty to offer to visitors with its diverse wildlife .We have helped students, business persons, tourists, clients with medical needs. There are many variations of</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:flex items-center lg:space-x-5">
                            <img className="lg:max-h-80 rounded" src="./Images/post/gallery_9.jpeg" alt="" />
                            <img className="lg:max-h-80 rounded" src="./Images/post/gallery_11.jpeg" alt="" />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-3xl font-semibold text-[#002935]">Building smart business solution for you</h2>
                        <p className="text-[#747474]">Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum</p>
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-3xl font-semibold text-[#002935]">The Passion to Unlock Potential</h2>
                        <p className="text-[#747474]">Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
