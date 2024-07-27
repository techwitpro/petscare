import { useState } from "react";

export default function FAQ() {
    const [isOpen, setIsOpen] = useState(1);
    const dataArr = [
        {
            title: "In et finibus lectus. Donec scelerisque tortor?",
            description: 'There are many variations of passages of available but the Ut elit tellus luctus nec ullamcorper at mattis',
        },
        {
            title: "Rhoncus turpis porta non Curabitur interdum?",
            description: "There are many variations of passages of available but the Ut elit tellus luctus nec ullamcorper at mattis",
        },
        {
            title: "Donec ac enim vitae ligula ultrices Accum?",
            description: "There are many variations of passages of available but the Ut elit tellus luctus nec ullamcorper at mattis",
        },
        {
            title: "Donec ac enim vitae ligula ultrices Accum?",
            description: "There are many variations of passages of available but the Ut elit tellus luctus nec ullamcorper at mattis",
        },
        {
            title: "What Can I do to Help?",
            description: "There are many variations of passages of available but the Ut elit tellus luctus nec ullamcorper at mattis",
        },
    ];
    const toggle = (idx) => {
        setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
    };
    return (
        <div id="faq" className="bg-[#fff4f8] pt-24 relative flex justify-center items-center px-4 overflow-hidden py-10">
            <img className="absolute left-0 bottom-0" src="../../../public/Images/Background/accordian_shape1.png" alt="" />
            <img className="absolute right-0 top-0" src="../../../public/Images/Background/accordian_shape2.png" alt="" />
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center z-40 space-y-2 lg:space-y-0">
                <div className="lg:w-2/5">
                    <img className="animated-image" src="./public/Images/sectionImage/faq_left.png" alt="" />
                </div>
                <div className="cursor-pointer space-y-6 lg:pl-20 lg:w-3/5">
                    {dataArr.map((data, idx) => (
                        <div key={idx} onClick={() => toggle(idx)} className="flex flex-row-reverse items-center">
                            <div className={`flex h-16 w-16 select-none items-center justify-center rounded-md ${isOpen === idx ? 'bg-[#ff4880]' : 'bg-[#7ab2b2d8]'} text-2xl font-semibold text-white`}>
                                <span>0{idx + 1}</span>
                            </div>

                            <div className="relative h-[2px] w-10 bg-[#7ab2b2d8]">
                                <span className="absolute -left-2 -top-[5px] z-40 h-3 w-3 rounded-full border-2 border-[#7ab2b2d8] bg-white"></span>
                                <span className="h-1 w-10 bg-[#7ab2b2d8]"></span>
                                <span className={`absolute -right-2 -top-[5px] z-40 h-3 w-3 rounded-full border-2 ${isOpen === idx ? 'border-[#7ab2b2d8] bg-white delay-100' : 'border-transparent'}`}></span>
                            </div>

                            <div className="">
                                <div className={`relative pr-5 border-t-[12px] border-[#7ab2b2d8]  ${isOpen === idx ? 'text-white bg-[#ff4880]' : 'text-[#002935] bg-[#fff4f8]'} p-3 shadow-md`}>
                                    <span className="absolute right-0 top-0 h-0 w-0 border-b-[40px] border-r-[40px] border-b-transparent border-r-[#7ab2b2d8]"></span>
                                    <h1 className="select-none text-2xl">{data.title}</h1>
                                </div>
                                <div className={`grid overflow-hidden text-slate-600 transition-all duration-300 ease-in-out ${isOpen === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                    <div className="overflow-hidden">
                                        <div className="bg-[#328181be] px-4 py-6 text-white">{data.description}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
