
export default function Comments() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto space-y-6 px-4">
        <h1 className="text-4xl font-semibold text-[#002935]">Comments (2)</h1>
        <div className="flex max-w-3xl space-x-5 shadow-lg p-3 rounded">
            <img className="max-h-32 rounded-md" src="./Images/sectionImage/Doctors/doctor_7.jpeg" alt="" />
            <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-[#002935]">Issac Herman</h3>
                <p className="text-[#747474]">June 14, 2023 / 12:00 AM</p>
                <p className="text-[#747474]">Imperdiet in nulla sed viverraut loremut dapib estetur Lorem ipsum dolor sit amet eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eniy minim sed exe ullamco laboris nisi ut aliquip cepteur</p>
                <button className="float-right border px-6 py-2 rounded bg-gray-100 hover:bg-[#f55a88] text-[#002935] hover:text-white duration-500">Replay</button>
            </div>
        </div>
        <div className="flex max-w-3xl space-x-5 relative shadow-lg p-3 rounded">
            <img className="max-h-32 rounded-md" src="./Images/sectionImage/Doctors/doctor_8.jpeg" alt="" />
            <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-[#002935]">Issac Herman</h3>
                <p className="text-[#747474]">June 14, 2023 / 12:00 AM</p>
                <p className="text-[#747474]">Imperdiet in nulla sed viverraut loremut dapib estetur Lorem ipsum dolor sit amet eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eniy minim sed exe ullamco laboris nisi ut aliquip cepteur</p>
                <button className="float-right border px-6 py-2 rounded bg-gray-100 hover:bg-[#f55a88] text-[#002935] hover:text-white duration-500">Replay</button>
            </div>
        </div>
      </div>
    </div>
  )
}
