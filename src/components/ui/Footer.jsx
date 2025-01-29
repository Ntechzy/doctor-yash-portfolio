const Footer = () => {
    return (
      <footer className="bg-primary_dark text-white py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {/* Logo and Description */}
          <div>
            <div className="mb-4">
              <img src="/logo.png" alt="Logo" className="h-10" /> {/* Replace with your logo */}
            </div>
            <p>
              Dr. M.S.S. Mukharjee, an esteemed cardiologist in Hyderabad, boasts
              extensive experience in interventional cardiology.
            </p>
            <div className="flex space-x-4 mt-4">
              {/* Social Media Links */}
              <a href="#" className="hover:text-blue-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-blue-400">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-blue-400">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="hover:text-blue-400">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
  
          {/* Useful Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Useful Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Services
                </a>
              </li>
            
              <li>
                <a href="#" className="hover:text-blue-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>
  
          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p>Pulse Heart Super Specialty Hospital</p>
            <p>Matrusi Nagar, Miyapur</p>
            <p>MIG 287, Road No. 4, Opp. Global Edge School, Kukatpally</p>
            <p>Kukatpally Housing Board Colony, Hyderabad, Telangana 502032</p>
            <p className="mt-4">Inquiries: <a href="mailto:pulseheartcenter@gmail.com" className="hover:text-blue-400">pulseheartcenter@gmail.com</a></p>
            <div className="mt-4">
              <p>KPHB Office: 04023054142</p>
              <p>Mobile: 9912866966</p>
              <p>Miyapur Office: 04029334142</p>
              <p>Mobile: 8886688063</p>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  