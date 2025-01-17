import { useState, useEffect } from 'react';

interface NewsItem {
  title: string;
  source: {
    name: string;
    authors?: string[];
  };
  link: string;
  thumbnail: string;
  date: string;
}

const NewsPage = () => {
  const [newsData, setNewsData] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const mockNews: NewsItem[] = [
      {
        title: "Mars hides behind the Full Wolf Moon in gorgeous photos from around the world",
        source: {
          name: "Space.com",
          authors: ["Brett Tingley"]
        },
        link: "https://www.space.com/stargazing/mars-hides-behind-the-full-wolf-moon-in-gorgeous-photos-from-around-the-world",
        thumbnail: "https://cdn.mos.cms.futurecdn.net/Zcxvd8qUY4dReC9rGgJgLE-1200-80.jpg",
        date: "01/14/2025, 05:09 PM"
      },
      {
        title: "Episodic warm climates on early Mars primed by crustal hydration",
        source: {
          name: "Nature.com",
          authors: ["Danica Adams", "Renyu Hu", "Bethany Ehlmann"]
        },
        link: "https://www.nature.com/articles/s41561-024-01626-8",
        thumbnail: "https://media.springernature.com/m685/springer-static/image/art%3A10.1038%2Fs41561-024-01626-8/MediaObjects/41561_2024_1626_Fig1_HTML.png",
        date: "01/15/2025, 10:59 AM"
      },
      {
        title: "Signatures of Ice-Free Ancient Ponds and Lakes Found on Mars",
        source: {
          name: "Caltech",
          authors: ["Lori Dajose"]
        },
        link: "https://www.caltech.edu/about/news/signatures-of-ice-free-ancient-ponds-and-lakes-found-on-mars",
        thumbnail: "https://caltech-prod.s3.amazonaws.com/main/images/Curiosity.2e16d0ba.fill-1600x810-c100.jpg",
        date: "01/15/2025, 07:16 PM"
      },
      {
        title: "Mars's rare disappearing solar wind event explained",
        source: {
          name: "Phys.org",
          authors: ["Hannah Bird"]
        },
        link: "https://phys.org/news/2025-01-mars-rare-solar-event.html",
        thumbnail: "https://scx2.b-cdn.net/gfx/news/hires/2025/marss-rare-disappearin.jpg",
        date: "01/17/2025, 11:50 AM"
      },
      {
        title: "Extraordinary images reveal the mysteries of Mars",
        source: {
          name: "New Scientist",
          authors: ["David Stock"]
        },
        link: "https://www.newscientist.com/article/mg26535260-300-extraordinary-images-reveal-the-mysteries-of-mars/",
        thumbnail: "https://images.newscientist.com/wp-content/uploads/2025/01/14142430/SEI_235253969.jpg",
        date: "01/15/2025, 06:00 PM"
      }
    ];
    
    setNewsData(mockNews);
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
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Latest Mars News</h1>
          <p className="text-gray-400 mb-8">Stay updated with the latest discoveries and research about the Red Planet</p>
          
          <div className="grid gap-8">
            {newsData.map((news, index) => (
              <a 
                key={index} 
                href={news.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#12121A]/80 backdrop-blur-xl rounded-xl overflow-hidden hover:bg-[#12121A] transition-colors"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 h-48 md:h-auto">
                    <img 
                      src={news.thumbnail} 
                      alt={news.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <h2 className="text-xl font-semibold mb-2 line-clamp-2">
                      {news.title}
                    </h2>
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                      <span>{news.source.name}</span>
                      <span>•</span>
                      <span>{news.date}</span>
                    </div>
                    {news.source.authors && (
                      <p className="text-sm text-gray-400">
                        By {news.source.authors.join(', ')}
                      </p>
                    )}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage; 