import { Search, MapPin, Sprout } from 'lucide-react';
import { Card } from './ui/card';

interface WhatWeDoProps {
  onNavigate: (page: string) => void;
}

export function WhatWeDo({ onNavigate }: WhatWeDoProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">What We Do</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Releaf combines cutting-edge technology with community action to protect and restore our planet's forests.
          </p>
        </div>
      </section>

      {/* Three Main Cards */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Detect Card */}
          <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-2xl border-2 border-border">
            <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
              <Search className="text-white" size={32} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Detect</h3>
            <p className="text-muted-foreground">
              AI and crowdsourced data identify deforestation hotspots in real time.
            </p>
            <div className="mt-6 pt-6 border-t border-border">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Satellite imagery analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Community reporting network</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Real-time alerts and monitoring</span>
                </li>
              </ul>
            </div>
          </Card>

          {/* Report Card */}
          <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-2xl border-2 border-border">
            <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
              <MapPin className="text-white" size={32} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Report</h3>
            <p className="text-muted-foreground">
              Report deforestation areas with geotagged photos, descriptions, sevirity.
            </p>
            <div className="mt-6 pt-6 border-t border-border">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Easy mobile reporting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>GPS-tagged evidence</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Verified impact tracking</span>
                </li>
              </ul>
            </div>
          </Card>

          {/* Restore Card */}
          <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-2xl border-2 border-border">
            <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
              <Sprout className="text-white" size={32} />
            </div>
            <h3 className="text-foreground mb-4">Restore</h3>
            <p className="text-muted-foreground">
              Connect with verified local reforestation events and restoration projects.
            </p>
            <div className="mt-6 pt-6 border-t border-border">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Vetted restoration partners</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Local volunteer opportunities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Measurable environmental impact</span>
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </section>

      {/* How It Works Timeline */}
      <section className="py-16 px-6 bg-muted">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-foreground mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h4 className="text-foreground mb-2">Identify</h4>
              <p className="text-sm text-muted-foreground">
                Hotspots are detected using AI and satellite data
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h4 className="text-foreground mb-2">Verify</h4>
              <p className="text-sm text-muted-foreground">
                Community members report and confirm on the ground
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h4 className="text-foreground mb-2">Mobilize</h4>
              <p className="text-sm text-muted-foreground">
                Local organizations create restoration events
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                4
              </div>
              <h4 className="text-foreground mb-2">Restore</h4>
              <p className="text-sm text-muted-foreground">
                Volunteers participate and make a real impact
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
