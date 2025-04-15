import Link from "next/link";
import { BsTelephone } from "react-icons/bs";
import { FiMail,FiMapPin  } from "react-icons/fi";

const TopBar = ()=>{

    return (
        <div className="text-white p-3  justify-between px-12 bg-[#046463] hidden md:flex">
            <div className="flex gap-5 items-center">
                <Link className="flex gap-2 items-center" href={"tel:+918765624982"}>
                    <BsTelephone/>
                    8765624982
                </Link>
                <Link className="flex gap-2 items-center" href={"mailto:pulseheartcenter@gmail.com"}>
                    <FiMail/>
                    pulseheartcenter@gmail.com
                </Link>
            </div>
            <div className="flex items-center gap-2">
                <FiMapPin/>
                Sigra, Varanasi, Uttar Pradesh 221001
            </div>
        </div>
    )
}

export default TopBar;