import { MdMessage, MdPerson } from "react-icons/md";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Posts() {
  return (
    <div id="blog" className="max-w-7xl mx-auto z-40 py-20 px-4">
      <div className="text-center max-w-3xl mx-auto">
        <h3 className="text-2xl text-[#ff4880] mb-3">Latest News</h3>
        <h1 className="text-4xl md:text-[45px] text-[#002935] font-semibold leading-[50px]">The Latest News & Blog</h1>
      </div>
      <div className="grid lg:grid-cols-2 gap-10 mt-14">
        <HashLink to={'/blog/#details'} className="bg-white shadow-2xl relative priceCard">
          <div className="w-full md:h-[350px] overflow-hidden">
            <img className="w-full h-full hover:scale-105 duration-500" src="./Images/post/post_10.jpeg" alt="" />
            <p className="absolute top-3 md:top-5 right-3 md:right-5 text-white md:text-lg bg-[#002935] py-1.5 md:py-3 px-4 md:px-7 rounded font-semibold duration-500 priceBtn">10 May</p>
          </div>
          <div className="p-4 md:p-8 space-y-4">
            <div className="flex space-x-4 md:space-x-10 text-[#747474] font-bold">
              <p className="flex items-center"><MdPerson className="border-2 border-[#b4b4b4] rounded-full text-xl mr-1" /> By Admin</p>
              <p className="flex items-center"><MdMessage className="mr-1 text-lg" /> Comment (5)</p>
            </div>
            <h2 className="text-xl md:text-[27px] text-[#002935] font-bold leading-[1.2]">Lobortis Pharetra In Necat Boi Risuse Osae That One Far.</h2>
            <p className="text-[#747474]">Lorem ipsum dolor sit amet, atomorum posidon ium est ad. Id vim errem princi pes, no suas molesti interpretarisLorm ipsum dolor sit amet, atomorum posidon</p>
          </div>
        </HashLink>
        <div className="flex flex-col justify-between space-y-5 lg:space-y-0">
          <HashLink to={'/blog/#details'} className="p-5 pt-10 md:p-10 space-y-4 shadow-2xl bg-white relative priceCard">
            <div className="flex space-x-4 md:space-x-10 text-[#747474] font-bold">
              <p className="flex items-center"><MdPerson className="border-2 border-[#b4b4b4] rounded-full text-xl mr-1" /> By Admin</p>
              <p className="flex items-center"><MdMessage className="mr-1 text-lg" /> Comment (5)</p>
            </div>
            <h2 className="text-xl md:text-[27px] text-[#002935] font-bold leading-[1.2]">Lobortis Pharetra In Necat Boi Risuse Osae That One Far.</h2>
            <p className="absolute -top-1 md:top-5 lg:-top-0 right-3 md:right-5 text-white text-sm md:text-lg bg-[#002935] py-1 md:py-3 px-3 md:px-7 rounded font-semibold duration-500 priceBtn">10 May</p>
          </HashLink>
          <HashLink to={'/blog/#details'} className="p-5 pt-10 md:p-10 space-y-4 shadow-2xl bg-white relative priceCard">
            <div className="flex space-x-4 md:space-x-10 text-[#747474] font-bold">
              <p className="flex items-center"><MdPerson className="border-2 border-[#b4b4b4] rounded-full text-xl mr-1" /> By Admin</p>
              <p className="flex items-center"><MdMessage className="mr-1 text-lg" /> Comment (5)</p>
            </div>
            <h2 className="text-xl md:text-[27px] text-[#002935] font-bold leading-[1.2]">Lobortis Pharetra In Necat Boi Risuse Osae That One Far.</h2>
            <p className="absolute -top-1 md:top-5 lg:-top-0 right-3 md:right-5 text-white text-sm md:text-lg bg-[#002935] py-1 md:py-3 px-3 md:px-7 rounded font-semibold duration-500 priceBtn">10 May</p>
          </HashLink>
          <HashLink to={'/blog/#details'} className="p-5 pt-10 md:p-10 space-y-4 shadow-2xl bg-white relative priceCard">
            <div className="flex space-x-4 md:space-x-10 text-[#747474] font-bold">
              <p className="flex items-center"><MdPerson className="border-2 border-[#b4b4b4] rounded-full text-xl mr-1" /> By Admin</p>
              <p className="flex items-center"><MdMessage className="mr-1 text-lg" /> Comment (5)</p>
            </div>
            <h2 className="text-xl md:text-[27px] text-[#002935] font-bold leading-[1.2]">Lobortis Pharetra In Necat Boi Risuse Osae That One Far.</h2>
            <p className="absolute -top-1 md:top-5 lg:-top-0 right-3 md:right-5 text-white text-sm md:text-lg bg-[#002935] py-1 md:py-3 px-3 md:px-7 rounded font-semibold duration-500 priceBtn">10 May</p>
          </HashLink>
        </div>
      </div>
    </div>
  )
}
