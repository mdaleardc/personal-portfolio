import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Animated 404 Text */}
        <div className="relative mb-8">
          <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4 tracking-tighter">
            404
          </h1>
          <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 blur-2xl rounded-full -z-10"></div>
        </div>

        {/* Floating Icon */}
        <div className="relative mb-8">
          <div className="w-24 h-24 mx-auto mb-6 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl transform rotate-45 shadow-2xl shadow-cyan-500/25"></div>
            <div className="absolute inset-2 bg-slate-900 rounded-xl transform rotate-45 flex items-center justify-center">
              <svg className="w-8 h-8 text-cyan-400 transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="space-y-6 mb-12">
          <h2 className="text-3xl font-bold text-white">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed max-w-md mx-auto">
            Sorry, the page you're looking for seems to have wandered off into the digital void.
          </p>
          <div className="flex items-center justify-center space-x-2 text-cyan-400">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-100"></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-200"></div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/"
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl shadow-2xl shadow-cyan-500/25 transition-all duration-300 hover:shadow-cyan-500/40 hover:scale-105 hover:from-cyan-400 hover:to-blue-500 transform"
          >
            <span className="relative z-10 flex items-center justify-center">
              Return Home
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10"></div>
          </Link>

          <Link
            to="/contact"
            className="group px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 font-semibold rounded-2xl transition-all duration-300 hover:bg-cyan-400/10 hover:border-cyan-400 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
          >
            <span className="flex items-center justify-center">
              Contact Me
              <svg className="w-5 h-5 ml-2 transform group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </span>
          </Link>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -left-20 top-1/4 w-40 h-40 bg-cyan-500/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute -right-20 bottom-1/4 w-40 h-40 bg-purple-500/5 rounded-full blur-xl animate-pulse delay-700"></div>
      </div>

      {/* Footer Note */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <p className="text-gray-500 text-sm">
          While you're here, check out my{" "}
          <Link to="/projects" className="text-cyan-400 hover:text-cyan-300 transition-colors">
            projects
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;