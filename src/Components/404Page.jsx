import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-50 text-center">
      <h1 className="text-7xl font-extrabold text-gray-800">404</h1>
      <p className="mt-4 text-xl text-gray-600">
        Oops! The page you’re looking for doesn’t exist.
      </p>

      <Link
        to="/"
        className="mt-6 rounded-2xl bg-blue-600 px-6 py-3 text-white shadow-md transition hover:bg-blue-700"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;