import { Users, MapPin, Building2, Heart, Calendar, Share2 } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

interface GetInvolvedProps {
  onNavigate: (page: string) => void;
}

export function GetInvolved({ onNavigate }: GetInvolvedProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-foreground mb-6">Get Involved</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            Join thousands of people around the world making a real difference in forest conservation. No matter your skills or availability, there's a way for you to contribute.
          </p>
          
          {/* Prominent CTA */}
          <Button
            onClick={() => onNavigate('volunteer-map')}
            className="bg-accent hover:bg-accent/90 text-white rounded-xl px-8 py-6 text-lg gap-3 shadow-xl"
          >
            <Users size={24} />
            Find Events Near You
          </Button>
        </div>
      </section>

      {/* Main Action Cards */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Volunteer Card */}
          <Card className="p-8 hover:shadow-xl transition-all rounded-2xl border-2 border-border">
            <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
              <Users className="text-white" size={32} />
            </div>
            <h3 className="text-foreground mb-4">Volunteer</h3>
            <p className="text-muted-foreground mb-6">
              Join local restoration events, plant trees, and help restore damaged ecosystems. Perfect for individuals, families, and groups.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground mb-6">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Weekend tree planting events</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Educational workshops</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Community cleanup activities</span>
              </li>
            </ul>
            <Button
              onClick={() => onNavigate('volunteer-map')}
              className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl"
            >
              Browse Events
            </Button>
          </Card>

          {/* Report Card */}
          <Card className="p-8 hover:shadow-xl transition-all rounded-2xl border-2 border-border">
            <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
              <MapPin className="text-white" size={32} />
            </div>
            <h3 className="text-foreground mb-4">Report Deforestation</h3>
            <p className="text-muted-foreground mb-6">
              Help us identify deforestation hotspots by reporting what you see. Your observations are crucial for early intervention.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground mb-6">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Quick mobile reporting</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>GPS and photo verification</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Track your impact</span>
              </li>
            </ul>
            <Button
              onClick={() => onNavigate('report-hotspot')}
              className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl"
            >
              Report Now
            </Button>
          </Card>

          {/* Organization Card */}
          <Card className="p-8 hover:shadow-xl transition-all rounded-2xl border-2 border-border">
            <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
              <Building2 className="text-white" size={32} />
            </div>
            <h3 className="text-foreground mb-4">Partner With Us</h3>
            <p className="text-muted-foreground mb-6">
              Are you an organization? Create and manage restoration events, coordinate volunteers, and amplify your impact.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground mb-6">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Event management tools</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Volunteer coordination</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Impact reporting</span>
              </li>
            </ul>
            <Button
              onClick={() => onNavigate('org-dashboard')}
              className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl"
            >
              Get Started
            </Button>
          </Card>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="py-16 px-6 bg-muted">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-foreground mb-12">Other Ways to Help</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 rounded-2xl">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Heart className="text-primary" size={24} />
              </div>
              <h4 className="text-foreground mb-2">Donate</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Support our mission with a one-time or recurring donation to fund restoration projects worldwide.
              </p>
              <Button variant="outline" className="w-full rounded-xl">
                Learn More
              </Button>
            </Card>

            <Card className="p-6 rounded-2xl">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Share2 className="text-primary" size={24} />
              </div>
              <h4 className="text-foreground mb-2">Spread the Word</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Follow us on social media and share our mission with your network to grow our community.
              </p>
              <Button variant="outline" className="w-full rounded-xl">
                Follow Us
              </Button>
            </Card>

            <Card className="p-6 rounded-2xl">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Calendar className="text-primary" size={24} />
              </div>
              <h4 className="text-foreground mb-2">Host an Event</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Organize a community event, fundraiser, or awareness campaign in your local area.
              </p>
              <Button variant="outline" className="w-full rounded-xl">
                Get Started
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-foreground mb-4">Success Stories</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Hear from volunteers who are making a difference
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 rounded-2xl border-2 border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">👤</span>
                </div>
                <div>
                  <h4 className="text-foreground mb-1">Maria Santos</h4>
                  <p className="text-sm text-muted-foreground">Volunteer, São Paulo</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "I've participated in 12 restoration events through Releaf. Seeing the areas we planted three years ago now flourishing with life is incredibly rewarding. This platform makes it so easy to find and join events in my area."
              </p>
            </Card>

            <Card className="p-8 rounded-2xl border-2 border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">👤</span>
                </div>
                <div>
                  <h4 className="text-foreground mb-1">David Kimani</h4>
                  <p className="text-sm text-muted-foreground">Reporter, Kenya</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "As a local guide, I've been able to report several deforestation hotspots that led to quick intervention. The reporting tool is simple to use, and knowing my observations lead to real action keeps me motivated."
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white mb-4">Ready to Make a Difference?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Join our global community and start making an impact today. Every action counts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => onNavigate('volunteer-map')}
              className="bg-accent hover:bg-accent/90 text-white rounded-xl px-6 py-6 text-lg"
            >
              Find Events Now
            </Button>
            <Button
              onClick={() => onNavigate('quiz')}
              className="bg-white hover:bg-white/90 text-primary rounded-xl px-6 py-6 text-lg"
            >
              Take Volunteer Quiz
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
