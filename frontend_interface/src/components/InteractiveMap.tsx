import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Hotspot } from './HotspotMap';
import L from 'leaflet';

// Fix Leaflet default marker icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

// Create custom icons for different severity levels
const createSeverityIcon = (color: string) => {
  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div style="
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background-color: ${color};
        border: 2px solid white;
        box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        display: flex;
        align-items: center;
        justify-content: center;
      ">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
          <line x1="12" y1="9" x2="12" y2="13"/>
          <line x1="12" y1="17" x2="12.01" y2="17"/>
        </svg>
      </div>
    `,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
};



const severityIcons = {
  critical: createSeverityIcon('#ef4444'), // red
  high: createSeverityIcon('#f97316'), // orange
  moderate: createSeverityIcon('#22c55e'), // green
};

interface InteractiveMapProps {
  hotspots: Hotspot[];
  onMarkerClick: (hotspot: Hotspot) => void;
}

const InteractiveMap: React.FC<InteractiveMapProps> = ({ hotspots, onMarkerClick }) => {
  // Calculate center based on hotspots or default to a world view
  const center = hotspots.length > 0
    ? [hotspots[0].lat, hotspots[0].lng]
    : [0, 0];

  return (
    <MapContainer
      center={center as [number, number]}
      zoom={3}
      style={{ height: '100%', width: '100%' }}
      className="z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {hotspots.map((hotspot) => (
          <Marker
            key={hotspot.id}
            position={[hotspot.lat, hotspot.lng]}
            icon={severityIcons[hotspot.severity as keyof typeof severityIcons] || severityIcons.moderate}
            eventHandlers={{
              click: () => onMarkerClick(hotspot),
            }}
          >
            <Popup>
              <div className="text-sm">
                <h3 className="font-medium">{hotspot.name}</h3>
                <p className="text-muted-foreground">{hotspot.location}</p>
                <p className="mt-1">Area Lost: {hotspot.areaLost.toLocaleString()} hectares</p>
              </div>
            </Popup>
          </Marker>
        ))}
    </MapContainer>
  );
};

export default InteractiveMap;