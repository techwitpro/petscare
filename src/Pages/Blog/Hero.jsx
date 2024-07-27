import { MdCalendarMonth, MdMessage, MdPerson } from "react-icons/md";

export default function Hero() {
    return (
        <div id="details" className="bg-white pt-24">
            <div className="max-w-7xl mx-auto px-4">
                <img className="w-full lg:w-3/4" src="../../../public/Images/post/post_14.jpeg" alt="" />
                <div className="mt-8 space-y-4">
                    <h1 className="text-4xl font-semibold text-[#002935]">Lobortis Pharetra In Necat Boi Risuse Osae That One Far.</h1>
                    <div className="flex space-x-10 text-[#747474] font-bold">
                        <p className="flex items-center"><MdPerson className="border-2 border-[#b4b4b4] rounded-full text-xl mr-1" /> By Admin</p>
                        <p className="flex items-center"><MdCalendarMonth className="mr-1 text-lg" /> May 10</p>
                        <p className="flex items-center"><MdMessage className="mr-1 text-lg" /> Comment (5)</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque suscipit eligendi, illo quis adipisci, nemo earum sit consectetur exercitationem totam culpa tempora possimus mollitia a repudiandae commodi facere ipsum aut accusamus deleniti quibusdam alias! Pariatur magni nesciunt amet quos soluta incidunt enim quidem deserunt quae quibusdam, perspiciatis, id cupiditate consequatur autem reprehenderit harum culpa doloremque error praesentium itaque! Aliquam, nobis.</p>
                </div>
            </div>
        </div>
    )
}
