
export default function Gallery() {
  return (
    <div id="gallery" className="grid grid-cols-4 gap-1 md:gap-5 py-10 max-h-screen">
      <div className="max-h-96 w-full overflow-hidden ">
        <img className="rounded-br md:rounded-br-xl max-h-96 hover:scale-110 duration-500" src="./public/Images/sectionImage/gallery/gallery_8.jpeg" alt="" />
      </div>
      <div className="max-h-96 w-full overflow-hidden ">
        <img className="rounded-bl md:rounded-bl-xl max-h-96 hover:scale-110 duration-500" src="./public/Images/sectionImage/gallery/gallery_9.jpeg" alt="" />
      </div>
      <div className="row-span-2 col-span-2 h-full w-full overflow-hidden ">
        <img className="row-span-2 col-span-2 h-full w-full hover:scale-110 duration-500" src="./public/Images/sectionImage/gallery/gallery_7.jpeg" alt="" />
      </div>
      <div className="max-h-96 w-full overflow-hidden ">
        <img className="rounded-tr md:rounded-tr-xl max-h-96 hover:scale-110 duration-500" src="./public/Images/sectionImage/gallery/gallery_10.jpeg" alt="" />
      </div>
      <div className="max-h-96 w-full overflow-hidden ">
        <img className="rounded-tl md:rounded-tl-xl max-h-96 hover:scale-110 duration-500" src="./public/Images/sectionImage/gallery/gallery_11.jpeg" alt="" />
      </div>
    </div>
  )
}
