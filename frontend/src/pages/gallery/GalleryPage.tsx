import { useState } from 'react';

interface MarsImage {
  id: string;
  title: string;
  camera: string;
  sol: number;
  earth_date: string;
  img_src: string;
}

const CAMERAS = [
  { id: 'FHAZ', name: 'Front Hazard Avoidance Camera' },
  { id: 'RHAZ', name: 'Rear Hazard Avoidance Camera' },
  { id: 'MAST', name: 'Mast Camera' },
  { id: 'CHEMCAM', name: 'Chemistry and Camera Complex' },
  { id: 'MAHLI', name: 'Mars Hand Lens Imager' },
  { id: 'MARDI', name: 'Mars Descent Imager' },
  { id: 'NAVCAM', name: 'Navigation Camera' },
];

const GalleryPage = () => {
  const [selectedCamera, setSelectedCamera] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Mock data for now
  const images: MarsImage[] = [
    {
      id: '1',
      title: 'Martian Surface Near Jezero Crater',
      camera: 'MAST',
      sol: 100,
      earth_date: '2023-01-15',
      img_src: '/images/mars-1.jpg'
    },
    // Add more mock images here
  ];

  const filteredImages = images.filter(image => {
    const matchesCamera = !selectedCamera || image.camera === selectedCamera;
    const matchesSearch = !searchQuery || 
      image.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCamera && matchesSearch;
  });

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0B0B0F]" />
          <img 
            src="/images/mars-gallery-hero.jpg" 
            alt="Mars Gallery" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <h1 className="text-6xl font-bold text-white mb-4">
            Mars Gallery
          </h1>
          <p className="text-xl text-gray-300">
            Explore the latest images from Mars rovers
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="flex gap-4 items-center">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search images..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 bg-[#12121A] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#9747FF]"
            />
          </div>
          <select
            value={selectedCamera}
            onChange={(e) => setSelectedCamera(e.target.value)}
            className="px-4 py-2 bg-[#12121A] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#9747FF]"
          >
            <option value="">All Cameras</option>
            {CAMERAS.map(camera => (
              <option key={camera.id} value={camera.id}>
                {camera.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Image Grid */}
      <div className="max-w-7xl mx-auto px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map(image => (
            <div 
              key={image.id}
              className="group relative bg-[#12121A] rounded-xl overflow-hidden"
            >
              <div className="aspect-square">
                <img 
                  src={image.img_src} 
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {image.title}
                  </h3>
                  <div className="flex gap-2 items-center text-sm text-gray-300">
                    <span className="px-2 py-1 rounded-md bg-white/10">
                      {image.camera}
                    </span>
                    <span>Sol {image.sol}</span>
                    <span>{image.earth_date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage; 