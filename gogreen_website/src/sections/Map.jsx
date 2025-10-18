import React, { useState } from 'react';

const Map = () => {
  const [currentMap, setCurrentMap] = useState("https://www.google.com/maps?q=United+States&output=embed");

  const locations = [
    { id: 1, name: "United States", url: "https://www.google.com/maps?q=United+States&output=embed" },
    { id: 2, name: "Seattle", url: "https://www.google.com/maps?q=Seattle+WA&output=embed" },
    { id: 3, name: "Portland", url: "https://www.google.com/maps?q=Portland+OR&output=embed" },
    // Add more locations as needed
  ];

  return (
    <section id="map" className="c-space section-spacing">
      <h2 className="text-heading">Map</h2>
      <p className="subtext">Interactive map showing forest coverage and environmental data across regions.</p>

      <div className="mt-6 flex items-center gap-2 flex-wrap">
        {locations.map((location) => (
          <button
            key={location.id}
            onClick={() => setCurrentMap(location.url)}
            className="px-3 py-1 rounded-md text-sm font-medium border 
              bg-transparent text-neutral-300 border-white/10 hover:bg-white/5"
          >
            {location.name}
          </button>
        ))}
      </div>

      <div className="mt-4 w-full rounded-xl overflow-hidden border border-white/10 shadow-sm">
        <div className="w-full h-96 sm:h-[560px]">
          <iframe
            title="Interactive Map"
            src={currentMap}
            width="100%"
            height="100%"
            className="border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default Map;
