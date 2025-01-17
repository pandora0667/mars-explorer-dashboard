import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-[#0B0B0F] z-10" />
          <div className="relative w-full h-full overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/Vy_RPd0rblI?start=5&autoplay=1&mute=1&loop=1&playlist=Vy_RPd0rblI&controls=0&showinfo=0&rel=0"
              title="Mars Mission"
              className="absolute top-1/2 left-1/2 w-[150%] h-[150%] -translate-x-1/2 -translate-y-1/2"
              allow="autoplay; encrypted-media"
              frameBorder="0"
              style={{ 
                pointerEvents: 'none',
                minWidth: '100%',
                minHeight: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-8">
          <div className="max-w-3xl">
            <h1 className="text-7xl font-bold text-white mb-4 leading-tight">
              We are in 2033
              <br />
              about to reach Mars
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Do you want to join with us?
            </p>
            <div className="flex gap-4">
              <Link 
                to="/gallery" 
                className="px-8 py-4 bg-[#9747FF] text-white rounded-lg hover:bg-[#8A35FF] transition-colors"
              >
                Discover More
              </Link>
              <Link
                to="/news"
                className="px-8 py-4 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-colors"
              >
                Mars Updates
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-[#0B0B0F]">
        <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link to="/weather" className="group">
            <div className="relative h-80 rounded-xl overflow-hidden">
              <img 
                src="/images/weather-feature.jpg" 
                alt="Weather" 
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2">Weather Station</h3>
                <p className="text-gray-300">Real-time Mars weather data</p>
              </div>
            </div>
          </Link>

          <Link to="/gallery" className="group">
            <div className="relative h-80 rounded-xl overflow-hidden">
              <img 
                src="/images/gallery-feature.jpg" 
                alt="Mission Log" 
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2">Mission Gallery</h3>
                <p className="text-gray-300">Latest images from Mars</p>
              </div>
            </div>
          </Link>

          <Link to="/news" className="group">
            <div className="relative h-80 rounded-xl overflow-hidden">
              <img 
                src="/images/news-feature.jpg" 
                alt="News" 
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2">Latest News</h3>
                <p className="text-gray-300">Updates from Mars missions</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainPage; 