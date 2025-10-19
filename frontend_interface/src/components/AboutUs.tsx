import { Mail, Linkedin, Target, Heart, Users, Globe } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

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
      name: 'Sarah Chen',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1570170609489-43197f518df0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHBlcnNvbnxlbnwxfHx8fDE3NjA3MzEzMjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      linkedin: '#',
    },
    {
      name: 'Marcus Johnson',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyMnx8cHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBwZXJzb258ZW58MXx8fHwxNzYwNzMxMzI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      linkedin: '#',
    },
    {
      name: 'Elena Rodriguez',
      role: 'Design Director',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHBlcnNvbnxlbnwxfHx8fDE3NjA3MzEzMjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      linkedin: '#',
    },
    {
      name: 'James Park',
      role: 'Outreach Lead',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHBlcnNvbnxlbnwxfHx8fDE3NjA3MzEzMjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      linkedin: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-foreground mb-6">About Releaf</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Empowering communities worldwide to protect and restore our planet's forests through technology and collaboration.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 rounded-2xl border-2 border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <Target className="text-white" size={24} />
              </div>
              <h2 className="text-foreground">Our Mission</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Releaf was founded in 2020 with a simple yet powerful mission: to democratize forest conservation by connecting technology, local communities, and environmental action. We believe that protecting our planet's forests requires both cutting-edge innovation and grassroots involvement.
            </p>
            <p className="text-muted-foreground mb-6">
              Every year, millions of hectares of forest are lost to deforestation, threatening biodiversity, accelerating climate change, and displacing indigenous communities. Traditional conservation efforts often struggle with limited resources, delayed detection, and inadequate local engagement.
            </p>
            <p className="text-muted-foreground">
              That's where Releaf comes in. By combining AI-powered satellite monitoring with crowdsourced reporting and coordinated restoration events, we're creating a global network that can detect threats early, respond quickly, and make lasting change. Together, we're not just watching forests disappear—we're actively restoring them.
            </p>
          </Card>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-6 bg-muted">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-foreground mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 rounded-2xl text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-primary" size={28} />
              </div>
              <h3 className="text-foreground mb-3">Community First</h3>
              <p className="text-sm text-muted-foreground">
                Local communities are at the heart of everything we do. Their knowledge and involvement are essential to lasting change.
              </p>
            </Card>

            <Card className="p-6 rounded-2xl text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary" size={28} />
              </div>
              <h3 className="text-foreground mb-3">Transparency</h3>
              <p className="text-sm text-muted-foreground">
                We provide verified data and measurable impact metrics so you can see exactly where your efforts are making a difference.
              </p>
            </Card>

            <Card className="p-6 rounded-2xl text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="text-primary" size={28} />
              </div>
              <h3 className="text-foreground mb-3">Global Impact</h3>
              <p className="text-sm text-muted-foreground">
                While we act locally, we think globally—building a worldwide network of forest defenders and restorers.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-foreground mb-4">Meet Our Team</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            A diverse group of technologists, environmentalists, and community organizers united by a common goal.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="p-6 rounded-2xl text-center hover:shadow-xl transition-shadow">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{member.role}</p>
                <a
                  href={member.linkedin}
                  className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full transition-colors"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <Linkedin className="text-primary" size={18} />
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 px-6 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-foreground mb-4">Get in Touch</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Have questions? Want to partner with us? We'd love to hear from you.
          </p>
          <Button
            onClick={scrollToContact}
            className="bg-primary hover:bg-primary/90 text-white rounded-xl gap-2"
          >
            <Mail size={18} />
            Contact Us
          </Button>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-12 px-6 bg-secondary text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl mb-2">2020</div>
            <p className="text-sm opacity-80">Founded</p>
          </div>
          <div>
            <div className="text-3xl mb-2">45+</div>
            <p className="text-sm opacity-80">Countries</p>
          </div>
          <div>
            <div className="text-3xl mb-2">200+</div>
            <p className="text-sm opacity-80">Partner Organizations</p>
          </div>
          <div>
            <div className="text-3xl mb-2">15K+</div>
            <p className="text-sm opacity-80">Community Members</p>
          </div>
        </div>
      </section>
    </div>
  );
}
