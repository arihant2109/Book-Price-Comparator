// components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-900 to-purple-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold tracking-wide">
            📘 BookCompare
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6 text-sm font-medium">
            <Link href="/homepage" className="hover:text-yellow-300 transition ">Home</Link>
            <Link href="/compare" className="hover:text-yellow-300 transition">Compare</Link>
            <Link href="/reviews" className="hover:text-yellow-300 transition">Reviews</Link>
            <Link href="/about" className="hover:text-yellow-300 transition">About</Link>
          </div>

          {/* Auth Buttons */}
          <div className="space-x-4">
            <Link href="/login" className="px-4 py-2 border border-white rounded hover:bg-white hover:text-blue-900 transition">
              Sign In
            </Link>
            <Link href="/signup" className="px-4 py-2 bg-yellow-400 text-blue-900 rounded hover:bg-yellow-300 transition">
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
