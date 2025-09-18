import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h2 className="text-6xl font-bold text-gray-900 mb-4">404</h2>
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h3>
        <p className="text-gray-600 mb-8">Could not find the requested resource.</p>
        <Link 
          href="/"
          className="bg-[#FF5F23] hover:bg-[#FF5F23]/90 text-white px-6 py-3 rounded-sm font-medium transition-all duration-300 ease-out cursor-pointer"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}
