import { MapPin, X, ArrowLeft, Sprout, ChevronUp, AlertTriangle } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { useState } from 'react';
import InteractiveMap from './InteractiveMap';
import 'leaflet/dist/leaflet.css';

interface HotspotMapProps {
  onNavigate: (page: string) => void;
}

export interface Hotspot {
  id: number;
  name: string;
  location: string;
  areaLost: number;
  severity: 'critical' | 'high' | 'moderate';
  lat: number;
  lng: number;
  description: string;
}

export function HotspotMap({ onNavigate }: HotspotMapProps) {
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const hotspots: Hotspot[] = [
    {
      id: 1,
      name: 'Amazon Rainforest',
      location: 'Manaus, Brazil',
      areaLost: 15420,
      severity: 'critical',
      lat: -3.1,
      lng: -60.0,
      description: 'Illegal logging and agricultural expansion have led to significant deforestation in this region.',
    },
    {
      id: 2,
      name: 'Congo Basin',
      location: 'Democratic Republic of Congo',
      areaLost: 8750,
      severity: 'high',
      lat: -0.5,
      lng: 25.0,
      description: 'Industrial logging and mining activities threatening biodiversity hotspots.',
    },
    {
      id: 3,
      name: 'Borneo Rainforest',
      location: 'Kalimantan, Indonesia',
      areaLost: 12300,
      severity: 'critical',
      lat: -0.5,
      lng: 115.0,
      description: 'Palm oil plantations expanding into protected forest areas.',
    },
    {
      id: 4,
      name: 'Atlantic Forest',
      location: 'São Paulo, Brazil',
      areaLost: 4200,
      severity: 'moderate',
      lat: -23.5,
      lng: -46.6,
      description: 'Urban expansion and agricultural development impacting remaining forest fragments.',
    },
    {
      id: 5,
      name: 'Madagascar Forests',
      location: 'Toamasina, Madagascar',
      areaLost: 6800,
      severity: 'high',
      lat: -18.1,
      lng: 49.4,
      description: 'Slash-and-burn agriculture and illegal rosewood harvesting.',
    },
  ];

  const handleHotspotClick = (hotspot: Hotspot) => {
    setSelectedHotspot(hotspot);
    setDrawerOpen(true);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'bg-destructive border-destructive';
      case 'high':
        return 'bg-orange-500 border-orange-500';
      case 'moderate':
        return 'bg-accent border-accent';
      default:
        return 'bg-primary border-primary';
    }
  };

  const getSeverityDotColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'bg-destructive';
      case 'high':
        return 'bg-orange-500';
      case 'moderate':
        return 'bg-accent';
      default:
        return 'bg-primary';
    }
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Minimal Navigation Bar */}
      <header className="bg-white border-b border-border px-6 py-4 flex items-center justify-between z-20">
        <div className="flex items-center gap-6">
          <button 
            onClick={() => onNavigate('landing')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Sprout className="text-white" size={18} />
            </div>
            <span className="text-foreground text-xl">Releaf</span>
          </button>
          
          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => onNavigate('landing')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => onNavigate('volunteer-map')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Volunteer
            </button>
          </nav>
        </div>
        
        <Button
          onClick={() => onNavigate('landing')}
          variant="outline"
          className="gap-2 rounded-xl"
        >
          <ArrowLeft size={18} />
          Back
        </Button>
      </header>

      {/* Map Container */}
      <div className="flex-1 relative bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full">
            {/* Interactive Map */}
            <InteractiveMap hotspots={hotspots} onMarkerClick={handleHotspotClick} />

            {/* Legend */}
            <Card className="absolute top-6 left-6 p-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg">
              <h4 className="text-foreground mb-3">Deforestation Severity</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 bg-destructive rounded-full"></div>
                  <span className="text-muted-foreground">Critical</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-muted-foreground">High</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">Moderate</span>
                </div>
              </div>
            </Card>

            {/* Stats Card */}
            <Card className="absolute top-6 right-6 p-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg">
              <h4 className="text-foreground mb-3">Global Overview</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between gap-8">
                  <span className="text-muted-foreground">Active Hotspots:</span>
                  <span className="text-foreground">{hotspots.length}</span>
                </div>
                <div className="flex justify-between gap-8">
                  <span className="text-muted-foreground">Total Area Lost:</span>
                  <span className="text-foreground">
                    {hotspots.reduce((sum, h) => sum + h.areaLost, 0).toLocaleString()} ha
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Bottom Drawer */}
        {selectedHotspot && (
          <div 
            className={`absolute bottom-0 left-0 right-0 bg-white border-t border-border shadow-2xl transition-transform duration-300 ${
              drawerOpen ? 'translate-y-0' : 'translate-y-[calc(100%-4rem)]'
            }`}
            style={{ maxHeight: '60vh' }}
          >
            {/* Drawer Handle */}
            <button
              onClick={() => setDrawerOpen(!drawerOpen)}
              className="w-full py-4 px-6 flex items-center justify-between hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className={`w-3 h-3 ${getSeverityDotColor(selectedHotspot.severity)} rounded-full`}></div>
                <div className="text-left">
                  <h3 className="text-foreground">{selectedHotspot.name}</h3>
                  <p className="text-sm text-muted-foreground">{selectedHotspot.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <ChevronUp 
                  size={20} 
                  className={`text-muted-foreground transition-transform ${drawerOpen ? '' : 'rotate-180'}`}
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedHotspot(null);
                    setDrawerOpen(false);
                  }}
                  className="p-1 hover:bg-muted rounded-full"
                >
                  <X size={20} className="text-muted-foreground" />
                </button>
              </div>
            </button>

            {/* Drawer Content */}
            <div className="px-6 pb-6 overflow-y-auto" style={{ maxHeight: 'calc(60vh - 5rem)' }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Info Section */}
                <div>
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="text-primary" size={20} />
                      <h4 className="text-foreground">Location Details</h4>
                    </div>
                    <p className="text-muted-foreground">{selectedHotspot.description}</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-muted rounded-xl">
                      <span className="text-muted-foreground">Area Lost</span>
                      <span className="text-foreground">
                        {selectedHotspot.areaLost.toLocaleString()} hectares
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-muted rounded-xl">
                      <span className="text-muted-foreground">Severity Level</span>
                      <span className={`px-3 py-1 rounded-full text-xs text-white ${getSeverityColor(selectedHotspot.severity)}`}>
                        {selectedHotspot.severity.toUpperCase()}
                      </span>
                    </div>

                    <div className="flex justify-between items-center p-3 bg-muted rounded-xl">
                      <span className="text-muted-foreground">Coordinates</span>
                      <span className="text-foreground text-sm">
                        {selectedHotspot.lat.toFixed(2)}°, {selectedHotspot.lng.toFixed(2)}°
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Section */}
                <div>
                  <div className="mb-4">
                    <h4 className="text-foreground mb-2">Take Action</h4>
                    <p className="text-sm text-muted-foreground">
                      Help restore this area by volunteering or reporting additional deforestation.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <Button 
                      onClick={() => onNavigate('volunteer-map')}
                      className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl gap-2"
                    >
                      <Sprout size={18} />
                      Volunteer for Restoration
                    </Button>

                    <Button 
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary/5 rounded-xl"
                      onClick={() => {
                        // Placeholder for before/after view
                        alert('Before/After satellite imagery view coming soon!');
                      }}
                    >
                      View Before/After
                    </Button>

                    <Button 
                      variant="outline"
                      onClick={() => onNavigate('report-hotspot')}
                      className="w-full rounded-xl"
                    >
                      Report More Deforestation
                    </Button>
                  </div>

                  {/* Impact Info */}
                  <div className="mt-6 p-4 bg-primary/5 rounded-xl border border-primary/20">
                    <p className="text-sm text-foreground">
                      <span className="text-primary">💡 Did you know?</span> This area could absorb approximately{' '}
                      <span>{(selectedHotspot.areaLost * 150).toLocaleString()} tons</span> of CO₂ annually if restored.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
