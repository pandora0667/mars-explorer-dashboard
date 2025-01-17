import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

interface WeatherData {
  AT: {
    av: number;
    ct: number;
    mn: number;
    mx: number;
  };
  PRE: {
    av: number;
    ct: number;
    mn: number;
    mx: number;
  };
  HWS: {
    av: number;
    ct: number;
    mn: number;
    mx: number;
  };
  WD: {
    most_common: {
      compass_degrees: number;
      compass_point: string;
      ct: number;
    };
  };
  Northern_season: string;
  Southern_season: string;
  First_UTC: string;
}

interface SpaceWeatherData {
  flares: any[];
  cmes: any[];
  gsts: any[];
}

const WeatherPage = () => {
  const [weatherData, setWeatherData] = useState<Record<string, WeatherData>>({});
  const [spaceWeather, setSpaceWeather] = useState<SpaceWeatherData>({ flares: [], cmes: [], gsts: [] });
  const [selectedSol, setSelectedSol] = useState<string>('');

  useEffect(() => {
    const mockData = {
      "675": {
        AT: { av: -62.314, ct: 177556, mn: -96.872, mx: -15.908 },
        PRE: { av: 750.563, ct: 887776, mn: 722.0901, mx: 768.791 },
        HWS: { av: 7.233, ct: 88628, mn: 1.051, mx: 22.455 },
        WD: {
          most_common: {
            compass_degrees: 292.5,
            compass_point: "WNW",
            ct: 30283
          }
        },
        Northern_season: "early winter",
        Southern_season: "early summer",
        First_UTC: "2020-10-19T18:32:20Z"
      }
    };
    setWeatherData(mockData);
    setSelectedSol('675');

    // Fetch space weather data
    const fetchSpaceWeather = async () => {
      const API_KEY = 'DEMO_KEY';
      const endDate = new Date().toISOString().split('T')[0];
      const startDate = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

      try {
        const [flares, cmes, gsts] = await Promise.all([
          fetch(`https://api.nasa.gov/DONKI/FLR?startDate=${startDate}&endDate=${endDate}&api_key=${API_KEY}`).then(res => res.json()),
          fetch(`https://api.nasa.gov/DONKI/CME?startDate=${startDate}&endDate=${endDate}&api_key=${API_KEY}`).then(res => res.json()),
          fetch(`https://api.nasa.gov/DONKI/GST?startDate=${startDate}&endDate=${endDate}&api_key=${API_KEY}`).then(res => res.json())
        ]);

        setSpaceWeather({ flares, cmes, gsts });
      } catch (error) {
        console.error('Error fetching space weather data:', error);
      }
    };

    fetchSpaceWeather();
  }, []);

  const currentData = weatherData[selectedSol];

  if (!currentData) return null;

  const chartData = {
    labels: ['Sol 259', 'Sol 260', 'Sol 261', 'Sol 262', 'Sol 263', 'Sol 264', 'Sol 265'],
    datasets: [
      {
        fill: true,
        label: 'Temperature',
        data: [
          currentData.AT.mn,
          currentData.AT.mn + 10,
          currentData.AT.av,
          currentData.AT.av + 5,
          currentData.AT.mx - 10,
          currentData.AT.mx - 5,
          currentData.AT.mx,
        ],
        borderColor: '#9747FF',
        borderWidth: 2,
        backgroundColor: 'rgba(151, 71, 255, 0.1)',
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: '#9747FF',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#1a1a1a',
        titleColor: '#fff',
        bodyColor: '#fff',
        padding: 12,
        displayColors: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          color: '#666',
          font: {
            size: 12,
          },
        },
      },
      y: {
        grid: {
          color: 'rgba(102, 102, 102, 0.1)',
          drawBorder: false,
        },
        ticks: {
          color: '#666',
          font: {
            size: 12,
          },
        },
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B0B0F] via-[#0B0B0F] to-[#070709] text-white pt-24">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-4xl font-light">
              Latest Weather at Elysium Planitia
            </h1>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 bg-[#1a1a1a] rounded text-sm">°C</button>
              <button className="px-3 py-1.5 bg-[#1a1a1a] rounded text-sm text-gray-500">°F</button>
            </div>
          </div>
          <p className="text-gray-400">
            InSight is taking daily weather measurements (temperature, wind, pressure) on the surface of Mars at Elysium Planitia, a flat, smooth plain near Mars' equator.
          </p>
        </div>

        {/* Current Weather */}
        <div className="mb-12">
          <div className="flex items-baseline gap-4 mb-2">
            <h2 className="text-6xl font-light">Sol {selectedSol}</h2>
            <span className="text-xl text-gray-400">{format(new Date(currentData.First_UTC), 'MMMM do, yyyy')}</span>
          </div>
          <div className="flex gap-4">
            <span className="px-4 py-2 bg-[#2A1F1D]/30 text-[#D4938F] rounded-full text-sm">
              {currentData.Northern_season}
            </span>
            <span className="px-4 py-2 bg-[#2A1F1D]/30 text-[#D4938F] rounded-full text-sm">
              {currentData.Southern_season}
            </span>
          </div>
        </div>

        {/* Weather Grid */}
        <div className="grid grid-cols-4 gap-6 mb-12">
          <div className="bg-[#1a1a1a]/60 rounded-2xl p-6 backdrop-blur">
            <h3 className="text-gray-400 text-sm mb-4">Temperature</h3>
            <div className="text-5xl font-light mb-4">{currentData.AT.av.toFixed(1)}°</div>
            <div className="flex flex-col gap-1 text-sm">
              <div className="text-[#D4938F]">High: {currentData.AT.mx.toFixed(1)}°C</div>
              <div className="text-[#A67A76]">Low: {currentData.AT.mn.toFixed(1)}°C</div>
            </div>
          </div>
          <div className="bg-[#1a1a1a]/60 rounded-2xl p-6 backdrop-blur">
            <h3 className="text-gray-400 text-sm mb-4">Pressure</h3>
            <div className="text-5xl font-light mb-4">{currentData.PRE.av.toFixed(0)}</div>
            <div className="text-sm text-gray-400">Pa</div>
          </div>
          <div className="bg-[#1a1a1a]/60 rounded-2xl p-6 backdrop-blur">
            <h3 className="text-gray-400 text-sm mb-4">Wind Speed</h3>
            <div className="text-5xl font-light mb-4">{currentData.HWS.av.toFixed(1)}</div>
            <div className="text-sm text-gray-400">m/s</div>
          </div>
          <div className="bg-[#1a1a1a]/60 rounded-2xl p-6 backdrop-blur">
            <h3 className="text-gray-400 text-sm mb-4">Wind Direction</h3>
            <div className="text-5xl font-light mb-4">{currentData.WD.most_common.compass_point}</div>
            <div className="text-sm text-gray-400">{currentData.WD.most_common.compass_degrees}°</div>
          </div>
        </div>

        {/* Temperature Trends */}
        <div className="bg-gradient-to-b from-[#1a1a1a]/40 to-[#1a1a1a]/20 rounded-2xl p-8 backdrop-blur mb-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0B0B0F]/20" />
          <div className="relative">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl font-light mb-3">Temperature Trends</h2>
                <p className="text-gray-400">Daily temperature variations on Mars</p>
              </div>
              <div className="flex gap-8">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#D4938F]" />
                  <span className="text-gray-400">High: {currentData.AT.mx.toFixed(1)}°C</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#A67A76]" />
                  <span className="text-gray-400">Low: {currentData.AT.mn.toFixed(1)}°C</span>
                </div>
              </div>
            </div>
            <div className="h-[400px]">
              <Line data={{
                ...chartData,
                datasets: [{
                  ...chartData.datasets[0],
                  borderColor: '#D4938F',
                  backgroundColor: 'rgba(212, 147, 143, 0.05)',
                  pointBackgroundColor: '#D4938F'
                }]
              }} options={chartOptions} />
            </div>
          </div>
        </div>

        {/* InSight Mission Information */}
        <div className="relative -mt-16">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a1a1a]/20 to-transparent pointer-events-none" />
          <div className="relative pt-32 pb-24">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-light mb-4 bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">About InSight Mission</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Exploring Mars' interior through cutting-edge technology and innovative scientific instruments
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Mission Overview */}
              <div className="space-y-12">
                <div className="space-y-6">
                  <h3 className="text-2xl font-light bg-gradient-to-r from-[#D4938F] to-[#A67A76] bg-clip-text text-transparent">Mission Overview</h3>
                  <p className="text-gray-400/90 leading-relaxed">
                    InSight (Interior Exploration using Seismic Investigations, Geodesy and Heat Transport) is designed to study Mars' interior structure. The lander uses cutting-edge instruments to delve deep beneath the surface and seek the fingerprints of the processes that formed the terrestrial planets.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-[#1a1a1a]/40 to-[#1a1a1a]/20 rounded-2xl p-6 backdrop-blur">
                    <div className="text-[#D4938F]/90 text-sm mb-2">Launch Date</div>
                    <div className="text-xl font-light">May 5, 2018</div>
                  </div>
                  <div className="bg-gradient-to-br from-[#1a1a1a]/40 to-[#1a1a1a]/20 rounded-2xl p-6 backdrop-blur">
                    <div className="text-[#D4938F]/90 text-sm mb-2">Landing Date</div>
                    <div className="text-xl font-light">November 26, 2018</div>
                  </div>
                  <div className="bg-gradient-to-br from-[#1a1a1a]/40 to-[#1a1a1a]/20 rounded-2xl p-6 backdrop-blur">
                    <div className="text-[#D4938F]/90 text-sm mb-2">Landing Site</div>
                    <div className="text-xl font-light">Elysium Planitia</div>
                  </div>
                  <div className="bg-gradient-to-br from-[#1a1a1a]/40 to-[#1a1a1a]/20 rounded-2xl p-6 backdrop-blur">
                    <div className="text-[#D4938F]/90 text-sm mb-2">Mission End</div>
                    <div className="text-xl font-light">December 15, 2022</div>
                  </div>
                </div>
              </div>

              {/* Mission Objectives */}
              <div className="space-y-8">
                <h3 className="text-2xl font-light bg-gradient-to-r from-[#D4938F] to-[#A67A76] bg-clip-text text-transparent">Mission Objectives</h3>
                <div className="grid gap-6">
                  <div className="bg-gradient-to-br from-[#1a1a1a]/40 to-[#1a1a1a]/20 rounded-2xl p-6 backdrop-blur group transition-all duration-300 hover:from-[#1a1a1a]/60 hover:to-[#1a1a1a]/40">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2A1F1D]/40 to-[#2A1F1D]/20 flex items-center justify-center flex-shrink-0">
                        <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#D4938F] to-[#A67A76]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-light mb-2">Interior Structure</h4>
                        <p className="text-gray-400/90 text-sm leading-relaxed">Study Mars' interior structure and composition to understand its formation and evolution</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#1a1a1a]/40 rounded-2xl p-6 backdrop-blur group transition-all duration-300 hover:bg-[#1a1a1a]/60">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#2A1F1D]/30 flex items-center justify-center flex-shrink-0">
                        <div className="w-6 h-6 rounded-lg bg-[#D4938F]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-light mb-2">Tectonic Activity</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">Determine the rate of Martian tectonic activity and meteorite impacts</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#1a1a1a]/40 rounded-2xl p-6 backdrop-blur group transition-all duration-300 hover:bg-[#1a1a1a]/60">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#2A1F1D]/30 flex items-center justify-center flex-shrink-0">
                        <div className="w-6 h-6 rounded-lg bg-[#D4938F]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-light mb-2">Heat Flow</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">Measure Mars' internal heat flow using a specialized heat probe</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#1a1a1a]/40 rounded-2xl p-6 backdrop-blur group transition-all duration-300 hover:bg-[#1a1a1a]/60">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#2A1F1D]/30 flex items-center justify-center flex-shrink-0">
                        <div className="w-6 h-6 rounded-lg bg-[#D4938F]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-light mb-2">Weather Monitoring</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">Track daily weather conditions including temperature, wind, and air pressure</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherPage; 