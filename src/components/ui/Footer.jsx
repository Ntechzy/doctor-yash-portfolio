import Link from "next/link";


const Footer = () => {
    return (
        <footer className="bg-primary_dark text-gold py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top Footer Links Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <h3 className="font-semibold text-[37px] mb-4 text-white">Company</h3>
                        <ul>
                            <li className="mb-2">
                                <Link href="/about" className="hover:underline">About Us</Link>
                            </li>
                            <li className="mb-2">
                                <Link href="/services" className="hover:underline">Services</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:underline">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-[37px] mb-4 text-white">Support</h3>
                        <ul>
                            <li>
                                <Link href="/contact" className="hover:underline">Contact Us</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-[37px] mb-4 text-white">Services</h3>
                        <ul>
                            {/* {departments.slice(0, 4).map((data, i) => (
                <li key={i} className="mb-2">
                  <Link href={`/service/${data.title}`} className="hover:underline">
                    {data.title}
                  </Link>
                </li>
              ))} */}
                        </ul>
                    </div>


                </div>

                {/* Bottom Footer Section */}
                <div className="mt-8 text-center border-t text-primary border-gray-700 pt-4">
                    <p>&copy; 2024 Yash Pandey. All rights reserved.</p>
                    <p className="text-gold">
                        Created by{' '}
                        <a target="_blank" rel="noopener noreferrer" href="https://branding.ntechzy.in/" className="hover:underline">
                            Ntechzy
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
