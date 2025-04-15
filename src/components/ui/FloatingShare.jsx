import Link from "next/link";
import { IoChatbubbleOutline } from "react-icons/io5";


const FloatingShare = ()=>{

    return (
        <Link href={"https://wa.me/+918765624982?text=I%20want%20consultation"} target="_blank" className="fixed bottom-10 right-5 bg-primary p-3 rounded-full text-white">
            <IoChatbubbleOutline className="size-7"/>
        </Link>
    )
}

export default FloatingShare;