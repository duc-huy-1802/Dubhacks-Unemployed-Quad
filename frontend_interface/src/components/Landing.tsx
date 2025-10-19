import { Building2, Users, MapPin, Map } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface LandingProps {
  onNavigate: (page: string) => void;
}

export function Landing({ onNavigate }: LandingProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Blur */}
        <div className="absolute inset-0">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1758344108550-187c9a9175ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjBjYW5vcHklMjBhYm92ZXxlbnwxfHx8fDE3NjA4MjM4NTZ8MA&ixlib=rb-4.0.1&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Forest canopy"
            className="w-full h-full object-cover blur-[2px] scale-105"
          />
        </div>
        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-secondary/90 z-10" />
        
        <div className="relative z-20 text-center px-6 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Detect. Report. Restore.
          </h1>
          <p className="text-white/90 text-xl md:text-2xl mb-12 font-semibold">
            Explore the current situation of forests worldwide.
          </p>
          
          {/* Prominent CTA */}
          <Button 
            onClick={() => onNavigate('hotspot-map')}
            className="bg-white hover:bg-white/90 text-primary rounded-xl px-8 py-6 text-xl gap-3 shadow-2xl font-bold"
          >
            <Map size={28} />
            View Interactive Map
          </Button>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-foreground mb-12 font-bold">Get Involved</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card 
              className="p-8 hover:shadow-xl transition-all cursor-pointer group border-2 border-transparent hover:border-primary/30 rounded-2xl"
              onClick={() => onNavigate('org-dashboard')}
            >
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <Building2 className="text-white" size={28} />
              </div>
              <h3 className="text-foreground mb-3 text-center font-bold">I am an Organization</h3>
              <p className="text-sm text-muted-foreground mb-6 text-center">
                Create and manage restoration events, coordinate volunteers, and track your impact
              </p>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl font-semibold">
                Get Started
              </Button>
            </Card>

            <Card 
              className="p-8 hover:shadow-xl transition-all cursor-pointer group border-2 border-transparent hover:border-primary/30 rounded-2xl"
              onClick={() => onNavigate('volunteer-map')}
            >
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <Users className="text-white" size={28} />
              </div>
              <h3 className="text-foreground mb-3 text-center font-bold">I am a Volunteer</h3>
              <p className="text-sm text-muted-foreground mb-6 text-center">
                Find and join restoration events, take our matching quiz, and make a difference
              </p>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl font-semibold">
                Explore Events
              </Button>
            </Card>

            <Card 
              className="p-8 hover:shadow-xl transition-all cursor-pointer group border-2 border-transparent hover:border-primary/30 rounded-2xl"
              onClick={() => onNavigate('report-hotspot')}
            >
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <MapPin className="text-white" size={28} />
              </div>
              <h3 className="text-foreground mb-3 text-center font-bold">Report Deforestation</h3>
              <p className="text-sm text-muted-foreground mb-6 text-center">
                Help us identify deforestation hotspots with photos and location data
              </p>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl font-semibold">
                Report Now
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Releaf Section */}
      <section className="py-20 px-6 bg-muted">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-foreground mb-4 font-bold">Why Releaf?</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join thousands of volunteers and organizations working together to restore our planet's forests.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔍</span>
              </div>
              <h3 className="text-foreground mb-2 font-bold">Detect</h3>
              <p className="text-muted-foreground">
                Use satellite data and community reports to identify deforestation in real-time.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📍</span>
              </div>
              <h3 className="text-foreground mb-2 font-bold">Report</h3>
              <p className="text-muted-foreground">
                Anyone can report deforestation hotspots with photos and location data.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌱</span>
              </div>
              <h3 className="text-foreground mb-2 font-bold">Restore</h3>
              <p className="text-muted-foreground">
                Connect with local restoration projects and make a tangible impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 px-6 bg-secondary text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl text-white mb-2 font-bold">1.2M+</div>
              <p className="text-white/70">Trees Planted</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl text-white mb-2 font-bold">850+</div>
              <p className="text-white/70">Active Events</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl text-white mb-2 font-bold">15K+</div>
              <p className="text-white/70">Volunteers</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl text-white mb-2 font-bold">3,400+</div>
              <p className="text-white/70">Reports Submitted</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
