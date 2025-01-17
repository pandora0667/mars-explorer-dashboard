import { useState, useEffect } from 'react';

interface ApodData {
  title: string;
  explanation: string;
  date: string;
  url: string;
  hdurl: string;
  media_type: string;
  service_version: string;
}

const ApodPage = () => {
  const [apodData, setApodData] = useState<ApodData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const mockData: ApodData = {
      title: "Supernova Remnant Cassiopeia A",
      explanation: "Massive stars in our Milky Way Galaxy live spectacular lives. Collapsing from vast cosmic clouds, their nuclear furnaces ignite and create heavy elements in their cores. After only a few million years for the most massive stars, the enriched material is blasted back into interstellar space where star formation can begin anew. The expanding debris cloud known as Cassiopeia A is an example of this final phase of the stellar life cycle. Light from the supernova explosion that created this remnant would have been first seen in planet Earth's sky about 350 years ago, although it took that light 11,000 years to reach us. This sharp NIRCam image from the James Webb Space Telescope shows the still hot filaments and knots in the supernova remnant. The whitish, smoke-like outer shell of the expanding blast wave is about 20 light-years across. A series of light echoes from the massive star's cataclysmic explosion are also identified in Webb's detailed images of the surrounding interstellar medium.",
      date: "2025-01-17",
      url: "https://apod.nasa.gov/apod/image/2501/CasA_nircam_1024.jpg",
      hdurl: "https://apod.nasa.gov/apod/image/2501/CasA_nircam_4096.jpg",
      media_type: "image",
      service_version: "v1"
    };
    
    setApodData(mockData);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0B0B0F] text-white pt-24 flex items-center justify-center">
        <div className="text-2xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white pt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">{apodData?.title}</h1>
          <p className="text-gray-400 mb-8">{apodData?.date}</p>
          <div className="relative aspect-video mb-8 rounded-lg overflow-hidden">
            {apodData?.media_type === 'image' && (
              <img
                src={apodData?.url}
                alt={apodData?.title}
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <p className="text-lg leading-relaxed mb-8">{apodData?.explanation}</p>
        </div>
      </div>
    </div>
  );
};

export default ApodPage; 