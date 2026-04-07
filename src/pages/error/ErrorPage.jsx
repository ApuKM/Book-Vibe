import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f172a] text-white px-4">
      <div className="text-center max-w-xl">
        {/* Big 404 */}
        <h1 className="text-7xl md:text-9xl font-extrabold bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold mt-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-400 mt-3">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-4 justify-center">
          <Link
            to="/"
            className="px-6 py-2 rounded-xl bg-linear-to-r from-purple-500 to-pink-500 hover:opacity-90 transition"
          >
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-6 py-2 rounded-xl border border-gray-600 hover:bg-gray-800 transition"
          >
            Go Back
          </button>
        </div>

        {/* Decorative element */}
        <div className="mt-10 opacity-30 text-sm">
          Error code: 404_NOT_FOUND
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;