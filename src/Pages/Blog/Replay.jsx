import Swal from "sweetalert2";

export default function Replay() {

    const handleSubmit = (e) =>{
        e.preventDefault();
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Post published successfully 🙂🙂🙂",
            showConfirmButton: false,
            timer: 1500
          });
        const form = e.target;
        form.name.value = '';
        form.email.value = '';
        form.web.value = '';
        form.description.value = '';
    }

    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-10 px-4">
                <h1 className="text-4xl font-semibold text-[#002935]">Comments (2)</h1>
                <form onSubmit={handleSubmit} className="mt-6 max-w-3xl clear-start space-y-3">
                    <div className="flex space-x-2 text-lg text-[#747474]">
                        <input type="text" name="name" id="" placeholder=" Your Name" className="p-2 w-full rounded-sm bg-gray-200" required />
                        <input type="email" name="email" id="" placeholder="Email" className="p-2 w-full rounded-sm bg-gray-200" required />
                    </div>
                    <input type="text" name="web" id="" placeholder="Website" className="p-2 w-full rounded-sm bg-gray-200" required />
                    <textarea name="description" id="" rows={3} placeholder="Your Message" className="p-2 w-full rounded-sm bg-gray-200" required></textarea>
                    <input type="submit" value={'Post Comment'} className="text-white text-lg bg-[#ff4880] hover:bg-[#14586d] py-3 px-10 rounded font-semibold duration-500 mx-auto" />
                </form>
            </div>
        </div>
    )
}
