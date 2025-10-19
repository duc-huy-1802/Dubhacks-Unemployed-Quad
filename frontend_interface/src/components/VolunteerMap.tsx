import { useState } from 'react';
import { MapPin, Calendar, Users, Filter, X, Navigation } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';

interface VolunteerMapProps {
  onNavigate: (page: string) => void;
}

const mockEvents = [
  {
    id: 1,
    name: 'Urban Forest Restoration',
    type: 'Tree Planting',
    date: '2025-10-25',
    location: 'Portland, OR',
    lat: 45.5152,
    lng: -122.6784,
    volunteers: 45,
    description: 'Join us in restoring native trees to urban areas.',
  },
  {
    id: 2,
    name: 'Coastal Mangrove Project',
    type: 'Mangrove Restoration',
    date: '2025-11-02',
    location: 'Miami, FL',
    lat: 25.7617,
    lng: -80.1918,
    volunteers: 32,
    description: 'Help restore critical coastal mangrove ecosystems.',
  },
  {
    id: 3,
    name: 'Mountain Forest Recovery',
    type: 'Reforestation',
    date: '2025-10-28',
    location: 'Denver, CO',
    lat: 39.7392,
    lng: -104.9903,
    volunteers: 28,
    description: 'Replant areas affected by recent wildfires.',
  },
];

const mockHotspots = [
  { id: 1, location: 'Northern California', lat: 40.7128, lng: -122.2,severity: 'high' },
  { id: 2, location: 'Southern Oregon', lat: 42.3265, lng: -122.8, severity: 'medium' },
];

export function VolunteerMap({ onNavigate }: VolunteerMapProps) {
  const [selectedEvent, setSelectedEvent] = useState(mockEvents[0]);
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <div className="h-screen flex flex-col md:flex-row">
        {/* Map Area */}
        <div className="flex-1 relative bg-gradient-to-br from-green-50 to-blue-50 order-2 md:order-1">
          {/* Mock Map */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-24 h-24 bg-[#FFDE59] rounded-full flex items-center justify-center mx-auto mb-4">
                <Navigation size={48} className="text-[#1F1F12]" />
              </div>
              <p className="text-muted-foreground mb-2">Interactive Map</p>
              <p className="text-sm text-muted-foreground max-w-xs">
                Yellow markers represent events, green markers show reported hotspots
              </p>
            </div>
          </div>

          {/* Map Markers (Mock) */}
          {mockEvents.map((event, index) => (
            <button
              key={event.id}
              onClick={() => setSelectedEvent(event)}
              className="absolute w-10 h-10 bg-[#FFDE59] rounded-full border-4 border-white shadow-lg hover:scale-110 transition-transform flex items-center justify-center cursor-pointer"
              style={{
                left: `${20 + index * 25}%`,
                top: `${30 + index * 15}%`,
              }}
            >
              <MapPin size={20} className="text-[#1F1F12]" />
            </button>
          ))}

          {mockHotspots.map((hotspot, index) => (
            <div
              key={hotspot.id}
              className="absolute w-10 h-10 bg-green-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center"
              style={{
                left: `${60 + index * 20}%`,
                top: `${40 + index * 10}%`,
              }}
            >
              <MapPin size={20} className="text-white" />
            </div>
          ))}

          {/* Filter Button (Mobile) */}
          <div className="absolute top-4 right-4 md:hidden">
            <Button
              onClick={() => setFilterOpen(!filterOpen)}
              className="bg-white text-[#1F1F12] shadow-lg rounded-xl gap-2 hover:bg-gray-50"
            >
              <Filter size={20} />
              Filters
            </Button>
          </div>

          {/* Quiz CTA */}
          <div className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80">
            <Card className="p-4 rounded-2xl shadow-xl bg-[#1F1F12] text-white border-0">
              <p className="mb-2">Not sure where to start?</p>
              <Button
                onClick={() => onNavigate('quiz')}
                className="w-full bg-[#FFDE59] hover:bg-[#FFDE59]/90 text-[#1F1F12] rounded-xl"
              >
                Take the Quiz
              </Button>
            </Card>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full md:w-96 bg-white border-l border-border overflow-y-auto order-1 md:order-2">
          <div className="p-6">
            <h2 className="text-[#1F1F12] mb-4">Upcoming Events</h2>

            {/* Filters (Desktop) */}
            <div className="hidden md:block mb-6 space-y-3">
              <Select defaultValue="all">
                <SelectTrigger className="rounded-xl">
                  <SelectValue placeholder="Event Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="planting">Tree Planting</SelectItem>
                  <SelectItem value="restoration">Restoration</SelectItem>
                  <SelectItem value="monitoring">Monitoring</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="any">
                <SelectTrigger className="rounded-xl">
                  <SelectValue placeholder="Distance" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any Distance</SelectItem>
                  <SelectItem value="10">Within 10 miles</SelectItem>
                  <SelectItem value="25">Within 25 miles</SelectItem>
                  <SelectItem value="50">Within 50 miles</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="all">
                <SelectTrigger className="rounded-xl">
                  <SelectValue placeholder="Format" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Formats</SelectItem>
                  <SelectItem value="in-person">In-Person</SelectItem>
                  <SelectItem value="remote">Remote</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Event List */}
            <div className="space-y-4">
              {mockEvents.map((event) => (
                <Card
                  key={event.id}
                  className={`p-4 rounded-2xl cursor-pointer transition-all ${
                    selectedEvent.id === event.id
                      ? 'border-2 border-[#FFDE59] shadow-md'
                      : 'hover:shadow-md'
                  }`}
                  onClick={() => setSelectedEvent(event)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <Badge className="rounded-lg bg-[#FFDE59]/20 text-[#1F1F12] hover:bg-[#FFDE59]/20">
                      {event.type}
                    </Badge>
                  </div>

                  <h3 className="text-[#1F1F12] mb-3">{event.name}</h3>

                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={16} />
                      <span>{event.volunteers} volunteers</span>
                    </div>
                  </div>

                  <Button
                    onClick={() => onNavigate('event-details')}
                    className="w-full bg-[#FFDE59] hover:bg-[#FFDE59]/90 text-[#1F1F12] rounded-xl"
                  >
                    View Details
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Filter Sheet */}
      {filterOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 md:hidden" onClick={() => setFilterOpen(false)}>
          <div
            className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-[#1F1F12]">Filters</h3>
              <button onClick={() => setFilterOpen(false)}>
                <X size={24} className="text-[#1F1F12]" />
              </button>
            </div>

            <div className="space-y-3 mb-6">
              <Select defaultValue="all">
                <SelectTrigger className="rounded-xl">
                  <SelectValue placeholder="Event Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="planting">Tree Planting</SelectItem>
                  <SelectItem value="restoration">Restoration</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="any">
                <SelectTrigger className="rounded-xl">
                  <SelectValue placeholder="Distance" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any Distance</SelectItem>
                  <SelectItem value="10">Within 10 miles</SelectItem>
                  <SelectItem value="25">Within 25 miles</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button
              onClick={() => setFilterOpen(false)}
              className="w-full bg-[#FFDE59] hover:bg-[#FFDE59]/90 text-[#1F1F12] rounded-xl"
            >
              Apply Filters
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
