import { FaFacebookF, FaInstagram, FaLinkedinIn, FaLocationArrow, FaTwitter } from "react-icons/fa";
import { FaLocationPin, FaPhone } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import Swal from "sweetalert2";

export default function Footer() {

    const handleSubscribe = (e) => {
        e.preventDefault();
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "You subscribed successfully 🙂🙂🙂",
            showConfirmButton: false,
            timer: 1500
        });
        const form = e.target;
        form.email.value = '';
    }

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
        form.name.value = '';
        form.email.value = '';
        form.description.value = '';
    }

    return (
        <footer className="gradient-lr pt-20 px-4">
            <div className="max-w-7xl mx-auto text-white space-y-20">
                <div className="flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0">
                    <div className="lg:w-2/3 lg:pr-24">
                        <h2 className="text-3xl font-semibold mb-5">Contact Info</h2>
                        <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0">
                            <div className="md:w-1/3">
                                <h3 className="flex items-center text-2xl font-medium"><FaPhone className="mr-1 font-normal text-xl" />Phone</h3>
                                <p>(+01) 123 456 7890</p>
                            </div>
                            <div className="md:w-1/3">
                                <h3 className="flex items-center text-2xl font-medium"><MdMail className="mr-1 font-normal text-xl" /> Email</h3>
                                <p>info@example.com</p>
                            </div>
                            <div className="md:w-1/3">
                                <h3 className="flex items-center text-2xl font-medium"><FaLocationPin className="mr-1 font-normal text-xl" />PhoneAddress</h3>
                                <p>3801 Chalk Butte Rd, MT 59427, UK-1216</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-2/3 lg:w-1/3">
                        <h2 className="text-3xl font-semibold ">Newsletter</h2>
                        <p className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, quidem.</p>
                        <form onSubmit={handleSubscribe} className="flex">
                            <input type="email" name="email" id="" placeholder="Enter Your Email Address" className="p-2 w-full rounded-l-sm text-lg text-[#747474]" required /><button type="submit" className="text-2xl bg-[#ff4880] w-12 flex justify-center items-center rounded-r-sm"><FaLocationArrow /></button>
                        </form >
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-between space-y-14 lg:space-y-0">
                    <div className="lg:w-2/3">
                        <div className="flex flex-col md:flex-row justify-between space-y-10 md:space-y-0">
                            <div className="md:w-1/3">
                                <h1 className='text-4xl font-bold text-[#ff4880] mb-3'>LOGO</h1>
                                <p className="md:pr-10">For Every Business, Advertising and Marketing plays an important role in making an IT Company a brand.</p>
                                <div className="mt-6">
                                    <h2 className="text-3xl font-semibold ">Follow us on</h2>
                                    <div className="flex space-x-5 items-center text-lg mt-3">
                                        <div className="bg-[#135565] hover:bg-[#ff4880] rounded-full h-8 w-8 flex justify-center items-center"><FaFacebookF /></div> 
                                        <div className="bg-[#135565] hover:bg-[#ff4880] rounded-full h-8 w-8 flex justify-center items-center"><FaInstagram /></div> 
                                        <div className="bg-[#135565] hover:bg-[#ff4880] rounded-full h-8 w-8 flex justify-center items-center"><FaTwitter /></div> 
                                        <div className="bg-[#135565] hover:bg-[#ff4880] rounded-full h-8 w-8 flex justify-center items-center"><FaLinkedinIn /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/3">
                                <h2 className="text-3xl font-semibold ">Quick Links</h2>
                                <ul className="mt-3 md:mt-6 space-y-1 text-lg">
                                    <li>About Us</li>
                                    <li>Services</li>
                                    <li>Executive team</li>
                                    <li>Portfolio</li>
                                    <li>Contact Us</li>
                                </ul>
                            </div>
                            <div className="md:w-1/3">
                                <h2 className="text-3xl font-semibold ">Services</h2>
                                <ul className="mt-3 md:mt-6 space-y-1 text-lg">
                                    <li>Pet Training</li>
                                    <li>Pet Grooming</li>
                                    <li>Care Service Pet</li>
                                    <li>Adoption Pet</li>
                                    <li>Boarding Pet</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-2/3 lg:w-1/3">
                        <h2 className="text-3xl font-semibold mb-3">Get in Touch</h2>
                        <form onSubmit={handleSubmit} className="mt-6">
                            <div className="flex space-x-2 text-lg text-[#747474]">
                                <input type="text" name="name" id="" placeholder=" Your Name" className="p-2 w-full rounded-sm" required />
                                <input type="email" name="email" id="" placeholder="Email" className="p-2 w-full rounded-sm" required />
                            </div>
                            <textarea name="description" id="" rows={3} placeholder="Your Message" className="p-2 w-full rounded-sm mt-3 mb-2" required ></textarea>
                            <button className="text-white text-lg bg-[#ff4880] hover:bg-[#14586d] py-2 px-10 rounded-sm font-semibold duration-500 mx-auto">Send</button>
                        </form>
                    </div>
                </div>
                <div>
                    <hr />
                    <p className="text-center text-lg py-5">All Right Reserved Copyright © 2024 <span className="text-[#ff4880]">Laralink</span></p>
                </div>
            </div>
        </footer>
    )
}
