import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <span className="text-xl font-bold">LearnHub</span>
            </div>
            <p className="text-slate-300 mb-4">
              Empowering learners worldwide with quality online courses and expert instruction.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-slate-300 hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="/courses" className="text-slate-300 hover:text-blue-400 transition-colors">Courses</a></li>
              <li><a href="/dashboard" className="text-slate-300 hover:text-blue-400 transition-colors">Dashboard</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">
                <FiFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">
                <FiInstagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">
                <FiLinkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">
                <FiTwitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-300">© 2025 LearnHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer