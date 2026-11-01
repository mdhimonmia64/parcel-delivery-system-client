import { Link } from "react-router";

const Forbidden = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 bg-white shadow-lg rounded-2xl">
        
        {/* Error Code */}
        <h1 className="text-6xl font-bold text-red-500 mb-4">
          403
        </h1>

        {/* Title */}
        <h2 className="text-2xl text-red-500  font-semibold mb-2">
          Access Forbidden
        </h2>

        {/* Description */}
        <p className="text-gray-600 mb-6">
          Sorry, you don't have permission to access this page.
        </p>

        {/* Button */}
        <Link to="/">
          <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Go Back Home
          </button>
        </Link>

      </div>
    </div>
  );
};

export default Forbidden;
