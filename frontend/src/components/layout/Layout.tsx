import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path || 
           (location.pathname === '/' && path === '/weather');
  };

  return (
    <div className="min-h-screen bg-[#0B0B0F]">
      <nav className="fixed top-0 left-0 right-0 bg-black/20 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between h-24">
            <Link 
              to="/" 
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-lg bg-[#9747FF]/10 p-[1px] transition-all duration-300 group-hover:bg-[#9747FF]/20">
                <div className="w-full h-full rounded-lg bg-gradient-to-b from-[#9747FF]/20 to-transparent flex items-center justify-center">
                  <svg 
                    viewBox="0 0 24 24" 
                    className="w-5 h-5 text-[#9747FF]"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5c.83-2 2.69-3.5 5.5-3.5s4.67 1.5 5.5 3.5c-1.41 1.26-3.29 2-5.5 2s-4.09-.74-5.5-2zm9.54-5.85l-1.41-1.41-1.41 1.41-.71-.71 1.41-1.41-1.41-1.41.71-.71 1.41 1.41 1.41-1.41.71.71-1.41 1.41 1.41 1.41-.71.71z" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-wide text-white">
                  MARS
                </span>
                <span className="text-[11px] text-[#9747FF] tracking-[0.2em] font-medium">EXPLORER</span>
              </div>
            </Link>

            <div className="flex items-center gap-1">
              <Link 
                to="/weather" 
                className={`relative px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive('/weather') 
                    ? 'text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {isActive('/weather') && (
                  <div className="absolute inset-0 bg-[#9747FF]/10 rounded-lg" />
                )}
                <span className="relative z-10">Weather</span>
              </Link>
              <Link 
                to="/gallery" 
                className={`relative px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive('/gallery') 
                    ? 'text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {isActive('/gallery') && (
                  <div className="absolute inset-0 bg-[#9747FF]/10 rounded-lg" />
                )}
                <span className="relative z-10">Gallery</span>
              </Link>
              <Link 
                to="/news" 
                className={`relative px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive('/news') 
                    ? 'text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {isActive('/news') && (
                  <div className="absolute inset-0 bg-[#9747FF]/10 rounded-lg" />
                )}
                <span className="relative z-10">News</span>
              </Link>
              <Link 
                to="/apod" 
                className={`relative px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive('/apod') 
                    ? 'text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {isActive('/apod') && (
                  <div className="absolute inset-0 bg-[#9747FF]/10 rounded-lg" />
                )}
                <span className="relative z-10">APOD</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;
