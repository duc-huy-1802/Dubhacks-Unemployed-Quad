import { useEffect, useState } from 'react';
import { isVerified } from '../utils/auth';

const Map = () => {
  const [verified, setVerified] = useState(false);
  useEffect(()=> setVerified(isVerified()), []);

  return (
    <section id="map" className="c-space section-spacing">
      <h2 className="text-heading">Map</h2>
      <p className="subtext">Interactive map (U.S.) — NASA/other satellite layers will be integrated here.</p>

      {!verified ? (
        <div className="mt-6 p-6 rounded bg-neutral-900">
          <p className="text-neutral-300">You must verify you're human before viewing report locations.</p>
          <a href="#home" className="mt-4 inline-block px-4 py-2 rounded bg-royal text-white">Go to Register / Verify</a>
        </div>
      ) : (
        <div className="mt-6 h-96 bg-neutral-900 rounded flex items-center justify-center">
          <p className="text-neutral-400">Map placeholder — integrate Leaflet/Mapbox/ESRI/NASA tiles here.</p>
        </div>
      )}
    </section>
  );
};

export default Map;
