import { Outlet } from "react-router-dom";
import Navbar from "../Shared-Components/Common-Components/Navbar";
import Footer from "../Shared-Components/Common-Components/Footer";

export default function MainLayout() {
    return (
        <div className="">
            <Navbar></Navbar>
            <div className=''>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    )
}
