import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-blue-400 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Brand Logo / Name */}
                <Link to="/" className="text-2xl font-bold tracking-wide text-white hover:text-blue-300 transition-colors">
                    OM RANA
                </Link>

                {/* Nav Links */}
                <div className="flex items-center space-x-6 text-lg font-medium">
                    <Link 
                        to="/" 
                        className="text-white hover:text-blue-900 transition-colors duration-200"
                    >
                        Home
                    </Link>
                    <Link 
                        to="/about" 
                        className="text-white hover:text-blue-900 transition-colors duration-200"
                    >
                        About
                    </Link>
                    <Link 
                        to="/contact" 
                        className="text-white hover:text-blue-900 transition-colors duration-200"
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
}