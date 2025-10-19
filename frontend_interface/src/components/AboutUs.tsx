import { Mail, Target, Heart, Users, Globe, Eye, Flag, Sprout } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

interface AboutUsProps {
  onNavigate: (page: string) => void;
}

export function AboutUs({ onNavigate }: AboutUsProps) {
  const scrollToContact = () => {
    const footer = document.querySelector('footer');
    footer?.scrollIntoView({ behavior: 'smooth' });
  };

  const teamMembers = [
    {
      name: 'Jenny Hoang',
      role: 'Project Manager',
    },
    {
      name: 'Thu Doan',
      role: 'Lead Developer',
    },
    {
      name: 'Henry Nguyen',
      role: 'Full-Stack Engineer',
    },
    {
      name: 'Tri Nguyen',
      role: 'Back-end Developer',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            About Releaf
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Bridging the gap between environmental crisis and community action through technology and collaboration.
          </p>
        </div>
      </section>

      {/* Inspiration Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 rounded-2xl border-2 border-border shadow-lg">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-md">
                <Target className="text-white" size={28} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Inspiration</h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              Deforestation is accelerating at an alarming rate, threatening biodiversity, climate stability, and the livelihoods of communities worldwide. We witnessed this crisis firsthand and knew we had to act.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              But we also saw another problem: passionate volunteers struggling to find legitimate, impactful opportunities, while conservation organizations desperately need help but lack the network to recruit effectively. We built Releaf to bridge that gap — making it easy for anyone to find meaningful ways to help protect our forests.
            </p>
          </Card>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-6 bg-muted">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-foreground mb-12">
            The Problem We're Solving
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-foreground mb-4">🌍 The Environmental Crisis</h3>
              <p className="text-muted-foreground">
                Every year, millions of hectares of forest are lost to deforestation. Traditional conservation efforts struggle with limited resources, delayed detection, and inadequate coordination between organizations and volunteers.
              </p>
            </Card>

            <Card className="p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-foreground mb-4">🔗 The Connection Gap</h3>
              <p className="text-muted-foreground">
                There's no centralized platform connecting volunteers with conservation organizations. People who want to help face endless searching, while parks and NGOs can't find the volunteers they need. This broken network means fewer trees planted and less impact.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Approach
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            We tackle deforestation through three interconnected pillars
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 rounded-2xl text-center hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Detect</h3>
              <p className="text-sm text-muted-foreground">
                We bring transparency to deforestation data through interactive mapping, making forest loss visible and accessible to everyone.
              </p>
            </Card>

            <Card className="p-6 rounded-2xl text-center hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Flag className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Report</h3>
              <p className="text-sm text-muted-foreground">
                We empower individuals to become environmental watchdogs, creating a community-driven early warning system for forest threats.
              </p>
            </Card>

            <Card className="p-6 rounded-2xl text-center hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sprout className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Restore</h3>
              <p className="text-sm text-muted-foreground">
                We connect volunteers with hands-on opportunities to plant trees, monitor forests, and educate communities through our smart matching system.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-6 bg-muted">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-foreground mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 rounded-2xl text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Accessibility</h3>
              <p className="text-sm text-muted-foreground">
                Conservation shouldn't require expertise. We welcome everyone from students to retirees, coders to teachers.
              </p>
            </Card>

            <Card className="p-6 rounded-2xl text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Impact</h3>
              <p className="text-sm text-muted-foreground">
                Every feature we build asks: "Will this help save more trees?" We measure success in hectares restored and lives changed.
              </p>
            </Card>

            <Card className="p-6 rounded-2xl text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Transparency</h3>
              <p className="text-sm text-muted-foreground">
                We believe in honest information about both the crisis we face and the solutions that work. See exactly where your efforts make a difference.
              </p>
            </Card>

            <Card className="p-6 rounded-2xl text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Community</h3>
              <p className="text-sm text-muted-foreground">
                Alone we can do little. Together, we can restore forests and inspire global change through collective action.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet Our Team
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Built by people who care, for people who want to make a difference.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="p-6 rounded-2xl text-center hover:shadow-xl transition-shadow">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center border-4 border-primary/20">
                  <Users className="text-primary" size={48} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 px-6 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Make an Impact?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join us in the fight against deforestation. Whether you're a volunteer, organization, or supporter, there's a place for you in the Releaf community.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={() => onNavigate('get-involved')}
              className="bg-primary hover:bg-primary/90 text-white rounded-xl px-8 py-6 text-lg"
            >
              Get Involved
            </Button>
            <Button
              onClick={scrollToContact}
              variant="outline"
              className="rounded-xl px-8 py-6 text-lg gap-2"
            >
              <Mail size={18} />
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}