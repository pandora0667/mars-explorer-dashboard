import { useState } from 'react';
import { Bars3Icon, BellIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isKorean, setIsKorean] = useState(true);

  return (
    <header className="sticky top-0 z-50 border-b border-dark-lighter/20 backdrop-blur-sm bg-dark/80">
      <div className="container">
        <div className="flex items-center justify-between h-16 gap-8">
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-primary-dark 
                flex items-center justify-center shadow-glow">
                <span className="text-lg">🌎</span>
              </div>
              <span className="text-lg font-semibold tracking-tight">Mars Explorer</span>
            </a>

            <nav className="hidden md:flex items-center gap-1">
              <a href="/weather" className="nav-link-active">
                날씨
              </a>
              <a href="/gallery" className="nav-link">
                갤러리
              </a>
              <a href="/news" className="nav-link">
                뉴스
              </a>
              <a href="/apod" className="nav-link">
                천문사진
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <button className="nav-link relative">
              <BellIcon className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary" />
            </button>
            
            <button
              className="nav-link font-mono"
              onClick={() => setIsKorean(!isKorean)}
              aria-label="언어 변경"
            >
              {isKorean ? 'KO' : 'EN'}
            </button>

            <div className="hidden md:block h-6 w-px bg-dark-lighter/20" />

            <a 
              href="https://github.com/yourusername/mars-explorer-dashboard" 
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex btn btn-primary"
            >
              GitHub
            </a>

            <button className="md:hidden nav-link">
              <Bars3Icon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar; 