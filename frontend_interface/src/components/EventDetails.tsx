import { Calendar, MapPin, Users, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback } from './ui/avatar';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

interface EventDetailsProps {
  onNavigate: (page: string) => void;
}

const mockVolunteers = [
  { id: 1, name: 'Sarah Chen', role: 'Tree Planter', initials: 'SC' },
  { id: 2, name: 'Michael Brown', role: 'Site Coordinator', initials: 'MB' },
  { id: 3, name: 'Emily Davis', role: 'Equipment Manager', initials: 'ED' },
  { id: 4, name: 'James Wilson', role: 'Tree Planter', initials: 'JW' },
  { id: 5, name: 'Lisa Anderson', role: 'Data Collector', initials: 'LA' },
];

export function EventDetails({ onNavigate }: EventDetailsProps) {
  const [joined, setJoined] = useState(false);

  return (
    <div className="min-h-screen bg-[#fafafa] pb-20">
      <div className="max-w-5xl mx-auto">
        {/* Header Image */}
        <div className="relative h-80 overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758599668429-121d54188b9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjByZXN0b3JhdGlvbiUyMHZvbHVudGVlcnN8ZW58MXx8fHwxNzYwODI1MzI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Event"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          
          <div className="absolute top-6 left-6">
            <Button
              variant="secondary"
              onClick={() => onNavigate('volunteer-map')}
              className="rounded-xl gap-2 bg-white/90 hover:bg-white"
            >
              <ArrowLeft size={20} />
              Back
            </Button>
          </div>

          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-start justify-between">
              <div>
                <Badge className="rounded-lg bg-[#FFDE59] text-[#1F1F12] hover:bg-[#FFDE59] mb-3">
                  Tree Planting
                </Badge>
                <h1 className="text-white mb-2">Urban Forest Restoration</h1>
                <p className="text-white/90">Portland, OR</p>
              </div>
              <Button
                variant="secondary"
                size="icon"
                className="rounded-xl bg-white/90 hover:bg-white"
              >
                <Share2 size={20} />
              </Button>
            </div>
          </div>
        </div>

        <div className="px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Quick Info */}
              <Card className="p-6 rounded-2xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#FFDE59]/20 rounded-xl flex items-center justify-center">
                      <Calendar className="text-[#1F1F12]" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Date</p>
                      <p className="text-[#1F1F12]">Oct 25, 2025</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#FFDE59]/20 rounded-xl flex items-center justify-center">
                      <Clock className="text-[#1F1F12]" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Time</p>
                      <p className="text-[#1F1F12]">9:00 AM - 3:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#FFDE59]/20 rounded-xl flex items-center justify-center">
                      <Users className="text-[#1F1F12]" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Volunteers</p>
                      <p className="text-[#1F1F12]">45 joined</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Description */}
              <Card className="p-6 rounded-2xl">
                <h2 className="text-[#1F1F12] mb-4">About This Event</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Join us for a day of urban forest restoration in Portland! We'll be planting native tree species to help restore urban green spaces and improve air quality in the community.
                  </p>
                  <p>
                    This event is perfect for both beginners and experienced volunteers. All tools and materials will be provided. Please bring water, snacks, and wear appropriate outdoor clothing.
                  </p>
                  <h3 className="text-[#1F1F12] mt-6 mb-3">What to Bring</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Work gloves (if you have them)</li>
                    <li>Water bottle and snacks</li>
                    <li>Sun protection (hat, sunscreen)</li>
                    <li>Weather-appropriate clothing</li>
                    <li>Closed-toe shoes or boots</li>
                  </ul>
                </div>
              </Card>

              {/* Location */}
              <Card className="p-6 rounded-2xl">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="text-[#1F1F12] mt-1" size={20} />
                  <div>
                    <h3 className="text-[#1F1F12] mb-1">Location</h3>
                    <p className="text-muted-foreground">
                      Forest Park Trailhead<br />
                      NW Thurman St & NW 29th Ave<br />
                      Portland, OR 97210
                    </p>
                  </div>
                </div>
                <div className="w-full h-48 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl flex items-center justify-center">
                  <p className="text-muted-foreground">Map View</p>
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Join CTA */}
              <Card className="p-6 rounded-2xl">
                {joined ? (
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-3xl">✓</span>
                    </div>
                    <p className="text-center text-[#1F1F12]">You're Registered!</p>
                    <p className="text-center text-sm text-muted-foreground">
                      We've sent confirmation details to your email.
                    </p>
                    <Button
                      variant="outline"
                      className="w-full rounded-xl border-[#1F1F12] text-[#1F1F12] hover:bg-[#1F1F12] hover:text-white"
                      onClick={() => setJoined(false)}
                    >
                      Cancel Registration
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <Button
                      onClick={() => setJoined(true)}
                      className="w-full bg-[#FFDE59] hover:bg-[#FFDE59]/90 text-[#1F1F12] rounded-xl"
                    >
                      Join Event
                    </Button>
                    <p className="text-center text-sm text-muted-foreground">
                      Free event • Open to all skill levels
                    </p>
                  </div>
                )}
              </Card>

              {/* Required Roles */}
              <Card className="p-6 rounded-2xl">
                <h3 className="text-[#1F1F12] mb-4">Volunteer Roles</h3>
                <div className="space-y-2">
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-100 rounded-lg">
                    Tree Planter
                  </Badge>
                  <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 rounded-lg">
                    Site Coordinator
                  </Badge>
                  <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100 rounded-lg">
                    Equipment Manager
                  </Badge>
                  <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 rounded-lg">
                    Data Collector
                  </Badge>
                </div>
              </Card>

              {/* Current Volunteers */}
              <Card className="p-6 rounded-2xl">
                <h3 className="text-[#1F1F12] mb-4">Volunteers ({mockVolunteers.length})</h3>
                <div className="space-y-3">
                  {mockVolunteers.map((volunteer) => (
                    <div key={volunteer.id} className="flex items-center gap-3">
                      <Avatar className="w-10 h-10">
                        <AvatarFallback className="bg-[#FFDE59] text-[#1F1F12]">
                          {volunteer.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="text-sm text-[#1F1F12]">{volunteer.name}</p>
                        <p className="text-xs text-muted-foreground">{volunteer.role}</p>
                      </div>
                    </div>
                  ))}
                  <Button variant="ghost" className="w-full text-[#1F1F12] hover:text-[#1F1F12]/80 rounded-xl">
                    View All 45 Volunteers
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
