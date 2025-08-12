import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
            <Link to="/" className="text-xl font-bold text-blue-600">
                 AI Resume Analyzer
            </Link> 
            <div className="space-x-4">
                <Link to="/examples" className="hover:text-blue-500">Examples</Link>
                <Link to="/upload" className="hover:text-blue-500">Analyze</Link>
                <Link to="/login" className="hover:text-blue-500">Login</Link>
            </div>       
        </nav>
    )
}