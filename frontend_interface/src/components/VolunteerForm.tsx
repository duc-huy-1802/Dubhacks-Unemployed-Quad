import { useState } from 'react';
import { User, Mail, MapPin, Heart, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card } from './ui/card';
import { Checkbox } from './ui/checkbox';

interface VolunteerFormProps {
  onNavigate: (page: string) => void;
}

const interests = [
  'Tree Planting',
  'Forest Restoration',
  'Environmental Education',
  'Data Collection',
  'Event Coordination',
  'Photography/Media',
];

export function VolunteerForm({ onNavigate }: VolunteerFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    interests: [] as string[],
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const toggleInterest = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#fafafa] flex items-center justify-center px-6">
        <Card className="max-w-lg w-full p-8 rounded-2xl text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} className="text-green-600" />
          </div>
          <h2 className="text-[#1F1F12] mb-4">Thank You for Joining!</h2>
          <p className="text-muted-foreground mb-8">
            We'll contact you about local restoration events that match your interests. Check your email for next steps.
          </p>
          <div className="flex flex-col gap-3">
            <Button
              onClick={() => onNavigate('volunteer-map')}
              className="w-full bg-[#FFDE59] hover:bg-[#FFDE59]/90 text-[#1F1F12] rounded-xl"
            >
              Explore Events
            </Button>
            <Button
              onClick={() => onNavigate('landing')}
              variant="outline"
              className="w-full rounded-xl border-[#1F1F12] text-[#1F1F12] hover:bg-[#1F1F12] hover:text-white"
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
          onClick={() => onNavigate('volunteer-map')}
          className="mb-6 text-[#1F1F12] hover:text-[#1F1F12]/80 rounded-xl gap-2"
        >
          <ArrowLeft size={20} />
          Back
        </Button>

        <div className="mb-8">
          <h1 className="text-[#1F1F12] mb-2">Become a Volunteer</h1>
          <p className="text-muted-foreground">
            Join our community of forest restoration volunteers. We'll match you with local events and opportunities.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <Card className="p-8 rounded-2xl mb-6">
            <div className="space-y-6">
              {/* Name */}
              <div>
                <Label htmlFor="name" className="flex items-center gap-2 mb-2">
                  <User size={18} />
                  Full Name
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  required
                  className="rounded-xl"
                />
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email" className="flex items-center gap-2 mb-2">
                  <Mail size={18} />
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  required
                  className="rounded-xl"
                />
              </div>

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
                  placeholder="City, State or ZIP code"
                  required
                  className="rounded-xl"
                />
                <p className="text-sm text-muted-foreground mt-2">
                  We'll notify you about events near you
                </p>
              </div>

              {/* Interests */}
              <div>
                <Label className="flex items-center gap-2 mb-3">
                  <Heart size={18} />
                  Interests (Select all that apply)
                </Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {interests.map((interest) => (
                    <div
                      key={interest}
                      className="flex items-center space-x-3 p-3 rounded-xl border-2 border-border hover:border-[#FFDE59]/50 transition-colors cursor-pointer"
                      onClick={() => toggleInterest(interest)}
                    >
                      <Checkbox
                        id={interest}
                        checked={formData.interests.includes(interest)}
                        onCheckedChange={() => toggleInterest(interest)}
                      />
                      <label
                        htmlFor={interest}
                        className="flex-1 cursor-pointer text-[#1F1F12]"
                      >
                        {interest}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Benefits Card */}
          <Card className="p-6 rounded-2xl mb-6 bg-green-50 border-green-200">
            <h3 className="text-[#1F1F12] mb-3">Volunteer Benefits</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>🌳 Make a tangible environmental impact</li>
              <li>🤝 Connect with like-minded individuals</li>
              <li>📚 Learn about ecology and conservation</li>
              <li>🎓 Gain valuable experience and skills</li>
              <li>📜 Receive volunteer certificates and recognition</li>
            </ul>
          </Card>

          {/* Submit Button */}
          <div className="flex gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onNavigate('volunteer-map')}
              className="flex-1 rounded-xl border-[#1F1F12] text-[#1F1F12] hover:bg-[#1F1F12] hover:text-white"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-[#FFDE59] hover:bg-[#FFDE59]/90 text-[#1F1F12] rounded-xl"
            >
              Submit Application
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
