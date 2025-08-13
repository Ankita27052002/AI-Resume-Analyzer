    import { Link } from "react-router-dom";
    import { useAuth } from "src/domains/auth/context/AuthContext";

    export default function Navbar() {
    const { user, logout } = useAuth();

    return (
        <nav className="bg-white shadow-sm p-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600">
            AI Resume Analyzer
        </Link>
        <div className="space-x-4">
            {user ? (
            <>
                <Link to="/dashboard" className="text-gray-700 hover:text-blue-600">
                Dashboard
                </Link>
                <button
                onClick={logout}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                Logout
                </button>
            </>
            ) : (
            <>
                <Link to="/login" className="text-gray-700 hover:text-blue-600">
                Login
                </Link>
                <Link to="/signup" className="text-gray-700 hover:text-blue-600">
                Signup
                </Link>
            </>
            )}
        </div>
        </nav>
    );
}