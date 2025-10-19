import { useState, useEffect } from 'react';
import { MapPin, Upload, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Card } from './ui/card';
import InteractiveMap from './InteractiveMap';
import { Hotspot } from './HotspotMap';

interface ReportHotspotProps {
  onNavigate: (page: string) => void;
}

export function ReportHotspot({ onNavigate }: ReportHotspotProps) {
  const [formData, setFormData] = useState({
    location: '',
    description: '',
    coordinates: '',
  });
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [previewHotspot, setPreviewHotspot] = useState<Hotspot | null>(null);

  const parseCoordinates = (coordString: string): { lat: number; lng: number } | null => {
    try {
      const [lat, lng] = coordString.split(',').map(str => parseFloat(str.trim()));
      if (!isNaN(lat) && !isNaN(lng) && lat >= -90 && lat <= 90 && lng >= -180 && lng <= 180) {
        return { lat, lng };
      }
    } catch {
      // Invalid format
    }
    return null;
  };

  useEffect(() => {
    // Update preview when coordinates change
    if (formData.coordinates) {
      const coords = parseCoordinates(formData.coordinates);
      if (coords) {
        setPreviewHotspot({
          id: 1,
          name: 'Report Location',
          location: formData.location || 'New Location',
          lat: coords.lat,
          lng: coords.lng,
          severity: 'moderate',
          areaLost: 0,
          description: formData.description || 'New report location'
        });
      } else {
        setPreviewHotspot(null);
      }
    } else {
      setPreviewHotspot(null);
    }
  }, [formData.coordinates, formData.location, formData.description]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file.name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#fafafa] flex items-center justify-center px-6">
        <Card className="max-w-lg w-full p-8 rounded-2xl text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} className="text-green-600" />
          </div>
          <h2 className="text-[#1F1F12] mb-4">Thank You!</h2>
          <p className="text-muted-foreground mb-8">
            Your report helps protect forests. Our team will review your submission and take appropriate action.
          </p>
          <div className="flex flex-col gap-3">
            <Button
              onClick={() => {
                setFormData({ location: '', description: '', coordinates: '' });
                setSelectedFile(null);
                setPreviewHotspot(null);
                setSubmitted(false);
              }}
              variant="outline"
              className="w-full rounded-xl border-[#1F1F12] text-[#1F1F12] hover:bg-[#1F1F12] hover:text-white"
            >
              Submit Another Report
            </Button>
            <Button
              onClick={() => onNavigate('landing')}
              className="w-full bg-[#FFDE59] hover:bg-[#FFDE59]/90 text-[#1F1F12] rounded-xl"
            >
              Return to Home
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafafa] pb-20">
      <div className="max-w-3xl mx-auto px-6 py-8">
        <Button
          variant="ghost"
          onClick={() => onNavigate('landing')}
          className="mb-6 text-[#1F1F12] hover:text-[#1F1F12]/80 rounded-xl gap-2"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Button>

        <div className="mb-8">
          <h1 className="text-[#1F1F12] mb-2">Report Deforestation Hotspot</h1>
          <p className="text-muted-foreground">
            Help us identify areas at risk. Your reports enable faster response and protection efforts.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <Card className="p-8 rounded-2xl mb-6">
            <div className="space-y-6">
              {/* Location */}
              <div>
                <Label htmlFor="location" className="flex items-center gap-2 mb-2">
                  <MapPin size={18} />
                  Location
                </Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="e.g., Amazon Basin, Brazil or search by address"
                  required
                  className="rounded-xl"
                />
                <p className="text-sm text-muted-foreground mt-2">
                  Enter an address, landmark, or general area
                </p>
              </div>

              {/* Coordinates (Optional) */}
              <div>
                <Label htmlFor="coordinates" className="mb-2 block">
                  GPS Coordinates (Optional)
                </Label>
                <Input
                  id="coordinates"
                  value={formData.coordinates}
                  onChange={(e) => setFormData({ ...formData, coordinates: e.target.value })}
                  placeholder="e.g., -3.4653, -62.2159"
                  className="rounded-xl"
                />
                <p className="text-sm text-muted-foreground mt-2">
                  If available, provide latitude and longitude for precision
                </p>
              </div>

              {/* Map Preview */}
              <div className="w-full h-64 rounded-xl overflow-hidden border border-border">
                {previewHotspot ? (
                  <InteractiveMap
                    hotspots={[previewHotspot]}
                    onMarkerClick={() => {}}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                    <div className="text-center p-6">
                      <MapPin size={48} className="text-muted-foreground mx-auto mb-2" />
                      <p className="text-muted-foreground">
                        Enter GPS coordinates to see location on map
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Description */}
              <div>
                <Label htmlFor="description" className="mb-2 block">
                  Description
                </Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Describe what you observed: type of deforestation, estimated area, visible damage, timeline if known, etc."
                  rows={6}
                  required
                  className="rounded-xl"
                />
              </div>

              {/* Photo Upload */}
              <div>
                <Label className="mb-2 block">
                  Photo Evidence (Optional)
                </Label>
                <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-[#FFDE59]/50 transition-colors">
                  <input
                    type="file"
                    id="photo"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label htmlFor="photo" className="cursor-pointer">
                    <Upload size={40} className="text-muted-foreground mx-auto mb-3" />
                    {selectedFile ? (
                      <p className="text-[#1F1F12] mb-1">Selected: {selectedFile}</p>
                    ) : (
                      <p className="text-muted-foreground mb-1">
                        Click to upload or drag and drop
                      </p>
                    )}
                    <p className="text-sm text-muted-foreground">
                      PNG, JPG, or GIF up to 10MB
                    </p>
                  </label>
                </div>
              </div>
            </div>
          </Card>

          {/* Info Card */}
          <Card className="p-6 rounded-2xl mb-6 bg-blue-50 border-blue-200">
            <h3 className="text-[#1F1F12] mb-2">Why Your Report Matters</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Enables rapid response from conservation organizations</li>
              <li>• Helps track deforestation patterns and trends</li>
              <li>• Supports evidence-based policy decisions</li>
              <li>• Connects local communities with restoration efforts</li>
            </ul>
          </Card>

          {/* Submit Button */}
          <div className="flex gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onNavigate('landing')}
              className="flex-1 rounded-xl border-[#1F1F12] text-[#1F1F12] hover:bg-[#1F1F12] hover:text-white"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-[#FFDE59] hover:bg-[#FFDE59]/90 text-[#1F1F12] rounded-xl"
            >
              Submit Report
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
