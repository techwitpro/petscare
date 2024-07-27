import Swal from "sweetalert2";

export default function Contact() {

    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Message was send successfully 🙂🙂🙂",
            showConfirmButton: false,
            timer: 1500
        });
        const form = e.target;
        form.fName.value = '';
        form.lName.value = '';
        form.email.value = '';
        form.phone.value = '';
        form.web.value = '';
        form.sub.value = '';
        form.description.value = '';
    }

    return (
        <div id="contact" className="bg-[#fff4f8] py-20 px-4">
            <div className="max-w-7xl mx-auto z-40">
                <div className="text-center max-w-3xl mx-auto">
                    <h3 className="text-2xl text-[#ff4880] mb-3 font-semibold">Need Any Help?</h3>
                    <h1 className="text-4xl md:text-[45px] text-[#002935] font-semibold leading-[50px]">Get in Touch With Us</h1>
                </div>
                <form onSubmit={handleSubmit} className="mt-12 space-y-8">
                    <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-10">
                        <input type="text" name="fName" placeholder="First Name" className="p-2 border border-[#ff4880] w-full rounded text-lg bg-transparent" required />
                        <input type="text" name="lName" placeholder="Last Name" className="p-2 border border-[#ff4880] w-full rounded text-lg bg-transparent" required />
                    </div>
                    <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-10">
                        <input type="number" name="phone" placeholder="Phone" className="p-2 border border-[#ff4880] w-full rounded text-lg bg-transparent" required />
                        <input type="email" name="email" placeholder="Email Address" className="p-2 border border-[#ff4880] w-full rounded text-lg bg-transparent" required />
                    </div>
                    <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-10">
                        <input type="text" name="web" placeholder="Website" className="p-2 border border-[#ff4880] w-full rounded text-lg bg-transparent" required />
                        <input type="text" name="sub" placeholder="Subject" className="p-2 border border-[#ff4880] w-full rounded text-lg bg-transparent" required />
                    </div>
                    <textarea name="description" id="" rows={5} placeholder="Message" className="p-2 border border-[#ff4880] w-full rounded text-lg bg-transparent"></textarea>
                    <div className="w-full flex">
                        <input type="submit" value="Send Message" className="text-white text-lg bg-[#002935] hover:bg-[#ff4880] py-3 px-10 rounded font-semibold duration-500 mx-auto" />
                    </div>
                </form>
            </div>
        </div>
    )
}
