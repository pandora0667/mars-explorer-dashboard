import { useState } from 'react';

const Sidebar = () => {
  const [activeId, setActiveId] = useState('weather');

  const menuItems = [
    { 
      id: 'weather', 
      label: '화성 기상', 
      icon: '🌡️',
      badge: { type: 'success' as const, text: 'Live' }
    },
    { 
      id: 'gallery', 
      label: '탐사 이미지', 
      icon: '📸',
      badge: { type: 'warning' as const, text: 'New' }
    },
    { 
      id: 'news', 
      label: '우주 뉴스', 
      icon: '📰'
    },
    { 
      id: 'apod', 
      label: '오늘의 천문사진', 
      icon: '🌠'
    },
  ];

  return (
    <aside className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 glass-effect">
      <div className="flex flex-col h-full p-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-display font-semibold text-space-text-primary">
            Navigation
          </h2>
        </div>

        <nav className="flex-1">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveId(item.id)}
                  className={`w-full group flex items-center justify-between px-4 py-2 rounded-lg transition-all duration-200
                    ${activeId === item.id 
                      ? 'bg-space-accent text-white shadow-neon-sm' 
                      : 'hover:bg-space-light/30 text-space-text-secondary hover:text-space-text-primary'
                    }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className={`badge badge-${item.badge.type} ${activeId === item.id ? 'bg-white/20' : ''}`}>
                      {item.badge.text}
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="pt-4 border-t border-space-light/20">
          <div className="card-hover rounded-lg p-4 bg-gradient-to-r from-mars-red/10 to-mars-orange/10">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-mars-red to-mars-orange flex items-center justify-center">
                <span className="text-lg">🚀</span>
              </div>
              <div>
                <h3 className="font-display font-medium text-space-text-primary">Support Project</h3>
                <p className="text-sm text-space-text-secondary">Help us keep exploring</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar; 