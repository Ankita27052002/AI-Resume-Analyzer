import { useState } from "react";
import { useAuth } from "@/auth/context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Signup() {
    // State to manage form inputs
    const [formData, setFormData] = useState({ email: "", password: "" });
    // State for error messages
    const [error, setError] = useState(null);
    // AuthContext signup function
    const { signup } = useAuth();
    // Navigation hook
    const navigate = useNavigate();

    // Handle input change for both email and password
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Submit signup form
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        await signup(formData.email, formData.password);
        navigate("/"); // Redirect after successful signup
        } catch {
        setError("Signup failed. Please try again.");
        }
    };

    return (
        <section className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
            <h1 className="text-2xl font-bold mb-6 text-center">Create Account</h1>
            {error && <div className="mb-4 text-sm text-red-600">{error}</div>}
            <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Field */}
            <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded focus:outline-none focus:ring focus:border-green-300"
                required
            />
            {/* Password Field */}
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 border rounded focus:outline-none focus:ring focus:border-green-300"
                required
            />
            {/* Submit Button */}
            <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
            >
                Signup
            </button>
            </form>
        </div>
        </section>
    );
}